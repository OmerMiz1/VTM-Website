import { useContext, useState, useEffect } from 'react';
import SummaryApi from '../../api/Summary';
import { UserContext } from '../../utils/context/UserContext';
import { ObjectStr } from '../../utils/function/Strings';


const MyHomePageLogic = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries) => {
	const { userAttributes } = useContext(UserContext);
	const { 
		addSummaryRemote,
		updateSummaryRemote,
		deleteSummaryRemote,
		toggleFavoriteRemote,
		toggleLikeRemote,
		getMyLibrariesRemote,
		editAccessRemote,
		getAccessRemote,
	 } = SummaryApi()

	const [isLoading, setLoading] = useState(true);

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

	const addSummary = (summary) => {
		addSummaryRemote(summary)
		.then(response => {
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

	const updateSummary = (summary) => {
		if (!summary[summaryIdKeyName]) {
			console.log('error: sid missing', summary)//DELETEME
			return;
		}

		updateSummaryRemote(summary)
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
		if (typeof (sid) !== 'string') {
			console.log('error: invalid sid.\nExpected: string\tFound:', typeof (sid)) //DELETEME
			return;
		}

		deleteSummaryRemote(sid)
		.then(response => {
			console.log(`delete response:`, response)//DELETEME

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

		[...mySummaries].map((summary) => {
			if (summary.sid === sid) {
				summary[favoriteKeyName] = !summary[favoriteKeyName];
				toUpdate = summary;
			};
			return summary;
		});

		toggleFavoriteRemote(toUpdate)
			.then(response => {
				console.log('update summary response:', response) //DELETEME

				// Update Frontend
				toUpdate[summaryIdKeyName] = JSON.parse(toUpdate[summaryIdKeyName]);
				setMySummaries(prev => prev.map(item => (item[summaryIdKeyName] === toUpdate[summaryIdKeyName] ? toUpdate : item)));
				setMyFilterSummaries(prev => prev.map(item => (item[summaryIdKeyName] === toUpdate[summaryIdKeyName] ? toUpdate : item)));
			})
			.catch(error => {
				console.log(error) //DELETEME
			})
	}

	const toggleLike = (sid, likes) => {
		const username = userAttributes.username;
		
		// TODO debug, likes is a map?
		if (likes.includes(username)) {
			delete likes[username]
		} else {
			likes[username] = likeValue;
		}

		toggleLikeRemote(sid, likes)
			.then(response => {
				console.log('update summary response:', response) //DELETEME

				// Update Frontend
				// toUpdate[summaryIdKeyName] = JSON.parse(toUpdate[summaryIdKeyName]);
				// setMySummaries(prev => prev.map(item => (item[summaryIdKeyName] === toUpdate[summaryIdKeyName] ? toUpdate : item)));
				// setMyFilterSummaries(prev => prev.map(item => (item[summaryIdKeyName] === toUpdate[summaryIdKeyName] ? toUpdate : item)));
			})
			.catch(error => {
				console.log(error) //DELETEME
			})
	}

	const getMyLibraries = () => {
		setLoading(true);

		getMyLibrariesRemote(apiName, myLibrariesPath)
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

	const editAccess = (sid, access) => {
		// access[summaryIdKeyName] = JSON.stringify(sid); //DELETEME? not sure
		editAccessRemote(sid, access)
			.then(response => {
				console.log('response:', response); //DELETEME
				var newItem = {};

				mySummaries.forEach(summary => {
					if (summary[summaryIdKeyName] === sid)
						newItem = {...summary};
				});

				newItem[accessKeyName] = access[accessKeyName];
				newItem[friendsKeyName] = access[friendsKeyName];

				console.log('newItem:', newItem) //DELETEME
				setMySummaries(prevSummaries => prevSummaries.map(item => item[summaryIdKeyName] === sid ? newItem : item));
				setMyFilterSummaries(prevFiltered => prevFiltered.map(item => (item[summaryIdKeyName] === sid) ? newItem : item));
			})
			.catch(error => {
				console.log(ObjectStr(error));
			})
	}


	// TODO
	useEffect(() => {
		const libraryResult = getMyLibraries();
		console.log(`library:`, libraryResult);
		
		//DELETEME
		// let externalSummary = await getSummary("U2FsdGVkX18CkdIsCBablBjUIiNLIucpcam%2FeyqUSFmojPDoMICGN7u2X6vDZ2PGsWa95VdkiWcrIW0WbSsDj%2FtpGexlcljQuNu4XEV3zY63EnJD8BEcLE0s6e5E9%2BQp")
		// console.log(`externalSummary:`, externalSummary);
	}, []);

	return {
		addSummary,
		updateSummary,
		deleteSummary,
		toggleFavorite,
		toggleLike,
		getMyLibraries,
		editAccess,
		setLoading,
		isLoading,
		//TODO
		//shareSummary

	}
}

export default MyHomePageLogic;