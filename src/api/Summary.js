import Amplify, { API } from 'aws-amplify';

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
	// const createTimeKeyName = "createTime";
	// const authorKeyName = "authorName";
	// const favoriteKeyName = "favorite";
	// const accessKeyName = "access";
	// const friendsKeyName = "allowFriends";

	// const likeValue = 1;
	// const dislikeValue = -1;

	const getPublicSummariesFromUrlRemote = (url) => {
		const myInit = {
			queryStringParameters: {
				url: url
			}
		}

		return API.get(apiName, `${publicSummariesPath}?url=${url}`, myInit);
	}

	const getSummaryRemote = (sid) => {
		const myInit = {
			queryStringParameters: {
				[summaryIdKeyName]: JSON.stringify(sid)
			}
		}

		return API.get(apiName, summaryPath, myInit)
	}

	const addSummaryRemote = (summary) => {
		return API.post(apiName, summaryPath, { body: summary })
	}

	const updateSummaryRemote = async (summary) => {
		summary[summaryIdKeyName] = JSON.stringify(summary[summaryIdKeyName]);
		summary[editTimeKeyName] = new Date().getTime();
		
		return API.patch(apiName, summaryPath, { body: summary })
		
	}

	const deleteSummaryRemote = (sid) => {
		const queryParams = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}

		return API.del(apiName, summaryPath, queryParams)
	}

	const toggleFavoriteRemote = (summary) => {
		summary[summaryIdKeyName] = JSON.stringify(summary[summaryIdKeyName]);
		return API.patch(apiName, summaryPath, { body: summary });
	}

	const toggleLikeRemote = async (sid, likes) => {
		const myInit = {
			[summaryIdKeyName]: JSON.stringify(sid),
			likes: likes
		}

		return API.patch(apiName, summaryPath, { body: myInit })

    }

	const getMyLibrariesRemote = () => {
		return API.get(apiName, myLibrariesPath);
	}

    const editAccessRemote = (sid, access) => {
		access[summaryIdKeyName] = JSON.stringify(sid);

		return API.patch(apiName, accessPath, { body: access })
	}

	const getAccessRemote = (sid) => {
		const params = {
			queryStringParameters: {
				[summaryIdKeyName]: JSON.stringify(sid)
			}
		}

		return API.get(apiName, accessPath, params);
	}

	const getPublicSummariesRemote =  () => {
		// setLoading(true);
		return API.get(apiName, publicSummariesPath);
	}

	const getSummariesSharedWithRemote = (username) => {
		const queryParams = {
			queryStringParameters: {
				username: username
			}
		}

		return API.get(apiName, sharedWithMePath, queryParams);
	}

    //TODO
	const shareSummaryRemote = (sid) => {	}
	const getLibraryRemote = async (lid) => {	}

	return {
		getSummaryRemote,
		deleteSummaryRemote,
		updateSummaryRemote,
		shareSummaryRemote,
		toggleFavoriteRemote,
		addSummaryRemote,
        editAccessRemote,
        toggleLikeRemote,
		getPublicSummariesRemote,
		getSummariesSharedWithRemote,
		getAccessRemote,
		getMyLibrariesRemote, // NOT IN USE
		getPublicSummariesFromUrlRemote,
	}
}

export default SummaryApi;


