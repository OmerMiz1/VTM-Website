import { useContext, useState, useEffect } from 'react';
import SummaryApi from '../../api/Summary';
import { UserContext } from '../../utils/context/UserContext';
import { ObjectStr } from '../../utils/function/Strings';


const MyHomePageLogic = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries) => {
	const { userAttributes } = useContext(UserContext);
	const {
		getSummaryRemote,
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
    const [filterText, setFilterText] = useState("");

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
	
	const getSummary = (sid) => {
		getSummaryRemote(sid)
			.then(response => {
				return response;
			})
			.catch(error => console.log(error))
	}

	const addSummary = (summary) => {
		addSummaryRemote(summary)
		.then(response => {
			// Update front-end
			summary[summaryIdKeyName] = response.data[summaryIdKeyName];
			summary[createTimeKeyName] = response.data[createTimeKeyName];
			summary[editTimeKeyName] = response.data[createTimeKeyName];

			setMySummaries([...mySummaries, summary]);
			setMyFilterSummaries([...myFilterSummaries, summary]);
		})
		.catch(error => {
			console.log(error);
		})
	}

	const updateSummary = (summary) => {
		if (!summary[summaryIdKeyName]) {
			return;
		}

		updateSummaryRemote(summary)
			.then(response => {
				// Update Frontend
				summary[summaryIdKeyName] = JSON.parse(summary[summaryIdKeyName]);
				setMySummaries(prev => prev.map(item => (item[summaryIdKeyName] === summary[summaryIdKeyName] ? summary : item)));
				setMyFilterSummaries(prev => prev.map(item => (item[summaryIdKeyName] === summary[summaryIdKeyName] ? summary : item)));
			})
			.catch(error => {
				console.log(error);
			})
	}

	const deleteSummary = (sid) => {
		if (typeof (sid) !== 'string') {
			return;
		}

		deleteSummaryRemote(sid)
		.then(response => {
			const newSummaries = [...mySummaries].filter(summary => summary.sid !== sid);
			const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.sid !== sid);
			setMyFilterSummaries(newSummariesFilter);
			setMySummaries(newSummaries);
		})
		.catch(error => console.log(error))
	}

	const toggleFavorite = (sid) => {
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
				// Update Frontend
				toUpdate[summaryIdKeyName] = JSON.parse(toUpdate[summaryIdKeyName]);
				setMySummaries(prev => prev.map(item => (item[summaryIdKeyName] === toUpdate[summaryIdKeyName] ? toUpdate : item)));
				setMyFilterSummaries(prev => prev.map(item => (item[summaryIdKeyName] === toUpdate[summaryIdKeyName] ? toUpdate : item)));
			})
			.catch(error => {
				console.log(error);
			})
	}

	const toggleLike = (sid, likes, setSummaries, setLikesState) => {
		const username = userAttributes.username;

		var likesSet = new Set(likes);

		if (likesSet.has(username)) {
			likesSet.delete(username);
		} else {
			likesSet.add(username);
		}

		likes = Array.from(likesSet);

		toggleLikeRemote(sid, likes)
			.then(response => {
				// Update Frontend
				setSummaries(prev => prev.map(item => item[summaryIdKeyName] === sid ? {...item, likes:likes} : item));
				setLikesState(likes);
			})
			.catch(error => {
				console.log(error);
			})
	}

	const getMyLibraries = () => {
		setLoading(true);

		getMyLibrariesRemote(apiName, myLibrariesPath)
			.then(summaries => {
				setMySummaries(summaries);
				setLoading(false);
			})
			.catch(error => {
				console.log('error getting libraries:', error);
				setLoading(false);
			});
	}

	const editAccess = (sid, access) => {
		editAccessRemote(sid, access)
			.then(() => {
				var newItem = {};

				mySummaries.forEach(summary => {
					if (summary[summaryIdKeyName] === sid)
						newItem = {...summary};
				});

				newItem[accessKeyName] = access[accessKeyName];
				newItem[friendsKeyName] = access[friendsKeyName];

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
	}, []);

	return {
		getSummary,
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
        filterText,
        setFilterText

	}
}

export default MyHomePageLogic;