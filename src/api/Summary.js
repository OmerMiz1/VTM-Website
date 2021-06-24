import { useState } from 'react';
import Amplify, { API } from 'aws-amplify';
import { ObjectStr } from '../utils/function/Strings';

// TODO no user -> logout, homepage
// FIXME
const awsmobile = {
	"aws_project_region": "eu-central-1",
	"aws_cognito_identity_pool_id": "eu-central-1:37578e1c-c060-4359-9096-d7a534c07a84",
	"aws_cognito_region": "eu-central-1",
	"aws_user_pools_id": "eu-central-1_gxX97wEqr",
	"aws_user_pools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o",
	"aws_cloud_logic_custom": [
		{
			"name": "SummaryAPI",
			"endpoint": "https://smzqyqgrt0.execute-api.eu-central-1.amazonaws.com/staging",
			"region": "eu-central-1"
		}
	]
};
Amplify.configure(awsmobile)

/* DELETEME
Summary: 
{
	sid: STRING,
	uid: STRING,
	authorName: STRING,
	url: STRING,
	title: STRING,
	createTime: STRING,
	editTime: STRING,
	tags: [STRING],
	imgUrl: STRING,
	likes: INT,
	favorite: BOOL,
} 
 */

//TODO move out all params to calling components (!)
const SummaryApi = () => {
	const apiName = 'SummaryAPI';
	const summaryPath = '/summary';
	const accessPath = summaryPath + '/access';
	const publicSummariesPath = summaryPath + "/public";
	const sharedWithMePath = summaryPath + "/sharedwithme";
	const libraryPath = '/library';
	const myLibrariesPath = libraryPath + '/mylibraries';

	const summaryIdKeyName = 'sid';
	const editTimeKeyName = "editTime";
	const createTimeKeyName = "createTime";
	const authorKeyName = "authorName";
	const favoriteKeyName = "favorite";
	const accessKeyName = "access";
	const friendsKeyName = "allowFriends";

	const likeValue = 1;
	const dislikeValue = -1;


	const getSummariesRemote = (uid) => {
		console.log('fetchSummaries, path:', `/${uid}`); //DELETEME
		// setLoading(true);

		return API.get(apiName, `${libraryPath}/${uid}`)
			// .then(summaries => {
			// 	console.log(`summaries:`, summaries) //DELETEME
			// 	setMySummaries(summaries);
			// 	setLoading(false);
			// })
			// .catch(error => {
			// 	console.log('error fetching summaries:', error) //DELETEME
			// });
	}

	const getSummaryRemote = async (sid) => {
		console.log('getSummary, path:', `${summaryPath}`); //DELETEME
		const myInit = {
			queryStringParameters: {
				[summaryIdKeyName]: JSON.stringify(sid)
			}
		}
		console.log(`path: ${summaryPath}\nQueryParams: ${JSON.stringify(myInit.queryStringParameters)}`)
		API.get(apiName, summaryPath, myInit)
			.then(response => {
				console.log(`response`, response) //DELETEME
				return response;
			})
			.catch(error => console.log(error))
	}

	const addSummaryRemote = (summary) => {
		console.log('addSummary:', summary); //DELETEME

		//TODO lid (summary.lid)
		return API.post(apiName, summaryPath, { body: summary })
	}

	const updateSummaryRemote = async (summary) => {
		console.log('updateSummary') //DELETEME

		summary[summaryIdKeyName] = JSON.stringify(summary[summaryIdKeyName]);
		summary[editTimeKeyName] = new Date().getTime();
		
		return API.patch(apiName, summaryPath, { body: summary })
		
	}

	const deleteSummaryRemote = (sid) => {
		console.log('delete summary sid: ', sid); //DELETEME

		const queryParams = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}

		return API.del(apiName, summaryPath, queryParams)
	}

	const toggleFavoriteRemote = (summary) => {
		console.log(`toggleFavorite`, summary); //DELETEME

		summary[summaryIdKeyName] = JSON.stringify(summary[summaryIdKeyName]);
		return API.patch(apiName, summaryPath, { body: summary });
	}

	const toggleLikeRemote = async (sid, likes) => {
        console.log(`toggle like ->  `, sid ); //DELETEME

		const toUpdate = {
			[summaryIdKeyName]: JSON.stringify(toUpdate[summaryIdKeyName]),
			likes: likes
		}

		return API.patch(apiName, summaryPath, { body: toUpdate })

    };

	const getMyLibrariesRemote = () => {
		console.log('getMyLibraries'); //DELETEME

		return API.get(apiName, myLibrariesPath);
	}

    const editAccessRemote = (sid, access) => {
		console.log('editAcces, access:', access); //DELETEME

		access[summaryIdKeyName] = JSON.stringify(sid);

		return API.patch(apiName, accessPath, { body: access })

	}

	// TODO move to discover.logic
	const getPublicSummariesRemote = async () => {
		console.log(`getPublicSummaries, path:`, publicSummariesPath); //DELETEME
		// setLoading(true);

		try {
			var summaries = await API.get(apiName, publicSummariesPath);
		} catch(error) {
			console.log(error); //DELETEME
			// setLoading(false);
			return;
		}

		console.log('public summaries:', summaries); //DELETEME
		// setLoading(false);
		return summaries;
	}

	const GetSummariesSharedWithRemote = async (username) => {
		console.log('getSummariesSharedWithMe, username:', username); //DELETEME
		console.log('path:', sharedWithMePath);//DELETEME
		// setLoading(true);

		const queryParams = {
			queryStringParameters: {
				username: username
			}
		}

		console.log(`params:`, queryParams);//DELETEME

		try {
			var summaries = await API.get(apiName, sharedWithMePath, queryParams);
		} catch (error) {
			console.log(ObjectStr(error)); //DELETEME
			// setLoading(false);
			return;
		}

		console.log('summaries shared with me:', summaries); //DELETEME
		// setLoading(false);
		return summaries;
	}

    //TODO
    const getAccessRemote = (sid) => {  }
	const shareSummaryRemote = (sid) => {	}
	const getLibraryRemote = async (lid) => {	}

	return {
		deleteSummaryRemote,
		updateSummaryRemote,
		shareSummaryRemote,
		toggleFavoriteRemote,
		addSummaryRemote,
        editAccessRemote,
        toggleLikeRemote,
		getPublicSummariesRemote,
		GetSummariesSharedWithRemote,
		getMyLibrariesRemote, // NOT IN USE

	}
}

export default SummaryApi;


