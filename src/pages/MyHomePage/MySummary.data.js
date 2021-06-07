import { useState, useEffect } from 'react';

const MyHomePageData = () => {
	const [mySummaries, setMySummaries] = useState([]);
	const [myFilterSummaries, setMyFilterSummaries] = useState([]);

	useEffect(() => {
		if (myFilterSummaries.length < 1) {
			setMyFilterSummaries(mySummaries);
		}
	}, [mySummaries])

	const isMySummaryEmpty =
		!mySummaries || (mySummaries && mySummaries.length === 0);


	return {
		mySummaries, setMySummaries, isMySummaryEmpty,
		myFilterSummaries, setMyFilterSummaries
	}
}

export default MyHomePageData;