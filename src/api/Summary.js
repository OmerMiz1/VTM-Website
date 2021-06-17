import { useState, useEffect } from 'react';
import Amplify, { API, Auth } from 'aws-amplify';
import { waitFor } from '@testing-library/react';

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
const SummaryApi = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries) => {
	const apiName = 'SummaryAPI';
	const summaryPath = '/summary';
	const libraryPath = '/library';
	const myLibraries = 'mylibraries';
	const summaryIdKeyName = 'sid';
	const editTimeKeyName = "editTime";
	const createTimeKeyName = "createTime";
	const authorKeyName = "authorName";
	const favoriteKeyName = "favorite";

	const likeValue = 1;
	const dislikeValue = -1;

	const [isLoading, setLoading] = useState(true);

	//TODO lid
	const getSummaries = async (uid) => {
		console.log('fetchSummaries, path:', `/${uid}`); //DELETEME
		setLoading(true);

		API.get(apiName, `${libraryPath}/${uid}`)
			.then(summaries => {
				console.log(`summaries:`, summaries) //DELETEME
				setMySummaries(summaries);
				setLoading(false);
			})
			.catch(error => {
				console.log('error fetching summaries:', error) //DELETEME
			});
	}

	const getSummary = async (sid) => {
		console.log('getSummary, path:', `${summaryPath}`); //DELETEME
		const myInit = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
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

	const addSummary = async (summary) => {
		console.log('addSummary:', summary); //DELETEME

		//TODO lid (summary.lid)
		API.post(apiName, summaryPath, { body: summary })
			.then(async (response) => {
				console.log('post response: ', response) //DELETEME
				
				// Update front-end
				summary[summaryIdKeyName] = response.data[summaryIdKeyName];
				summary[createTimeKeyName] = response.data[createTimeKeyName];
				summary[editTimeKeyName] = response.data[createTimeKeyName];
				
				setMySummaries([...mySummaries, summary]);
				setMyFilterSummaries([...myFilterSummaries, summary]);
			})
			.catch(error => {
				console.log(error) // DELETEME
			})
	}

	const updateSummary = async (summary) => {
		console.log('updateSummary') //DELETEME
	
		if (!summary[summaryIdKeyName]) {
			console.log('error: sid missing', summary)//DELETEME
			return;
		}

		summary[summaryIdKeyName] = JSON.stringify(summary[summaryIdKeyName]);
		summary[editTimeKeyName] = new Date().getTime();
		
		API.patch(apiName, summaryPath, { body: summary })
			.then(response => {
				console.log('update summary response:', response) //DELETEME

				// Update Frontend
				summary[summaryIdKeyName] = JSON.parse(summary[summaryIdKeyName]);
				setMySummaries(prev => prev.map(item => (item[summaryIdKeyName] === summary[summaryIdKeyName] ? summary : item)));
				setMyFilterSummaries(prev => prev.map(item => (item[summaryIdKeyName] === summary[summaryIdKeyName] ? summary : item)));
			})
			.catch(error => {
				console.log(error) //DELETEME
			})
	}

	const deleteSummary = (sid) => {
		console.log('delete summary sid: ', sid); //DELETEME

		if (typeof (sid) !== 'string') {
			console.log('error: invalid sid.\nExpected: string\tFound:', typeof (sid)) //DELETEME
			return;
		}

		const queryParams = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}

		API.del(apiName, summaryPath, queryParams)
			.then(response => {
				console.log(`delete response:`, response)//DELETEME

				// Fronted delete
				const newSummaries = [...mySummaries].filter(summary => summary.sid !== sid);
				const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.sid !== sid);
				setMyFilterSummaries(newSummariesFilter);
				setMySummaries(newSummaries);
			})
			.catch(error => console.log(error))
	}
	
	const toggleFavorite = (sid) => {
		console.log(`toggleFavorite`, sid); //DELETEME

		var toUpdate = {};
		var response = undefined;

		// FIXME editTime shouldnt be changed becuase of this call!!!!
		[...mySummaries].map((summary) => {
			if (summary.sid === sid) {
				summary[favoriteKeyName] = !summary[favoriteKeyName];
				toUpdate = summary;
				updateSummary(toUpdate); // Updates Back & Front
			};
			return summary;
		});
	}

	const toggleLike = async (sid, likes) => {
        console.log(`toggle like ->  `, sid );
        
		try {
			var { username } = await Auth.currentAuthenticatedUser();
		} catch (error) {
			console.log(error); //DELETEME
			return;
		}

		if (likes.includes(username)) {
			delete likes[username]
		} else {
			likes[username] = likeValue;
		}

		const toUpdate = {
			summaryIdKeyName: sid,
			likes: likes
		}

		return updateSummary(toUpdate);
    };

	const getMyLibraries = async () => {
		console.log('getMyLibraries'); //DELETEME
		setLoading(true);

		API.get(apiName, `${libraryPath}/${myLibraries}`)
			.then(summaries => {
				console.log(`library:`, summaries) //DELETEME
				setMySummaries(summaries);
				setLoading(false);
			})
			.catch(error => {
				console.log('error getting libraries:', error) //DELETEME
				setLoading(false);
			});
	}

    //TODO ADD
    const editAccess = async (sid, access) => {

	}
	const ShareSummary = (sid) => {	}
	const getLibrary = async (lid) => {	}
    
	useEffect(async () => {
		const libraryResult = await getMyLibraries();
		console.log(`library:`, libraryResult);
		
		// let externalSummary = await getSummary("U2FsdGVkX18CkdIsCBablBjUIiNLIucpcam%2FeyqUSFmojPDoMICGN7u2X6vDZ2PGsWa95VdkiWcrIW0WbSsDj%2FtpGexlcljQuNu4XEV3zY63EnJD8BEcLE0s6e5E9%2BQp")
		// console.log(`externalSummary:`, externalSummary);
	}, []);

	return {
		isLoading,
		setLoading,
		deleteSummary,
		updateSummary,
		ShareSummary,
		toggleFavorite,
		addSummary,
        editAccess,
        toggleLike
	}
}

export default SummaryApi;


