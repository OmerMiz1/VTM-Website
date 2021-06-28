import { useState, useEffect } from 'react';


//TODO rename and not default..
const SummaryData = () => {
	const [mySummaries, setMySummaries] = useState([]);
	const [myFilterSummaries, setMyFilterSummaries] = useState([]);
    const [publicSummaries, setPublicSummaries] = useState([]);
	const [sharedSummaries, setSharedSummaries] = useState([]);


	useEffect(() => {
		if (myFilterSummaries.length < 1) {
			setMyFilterSummaries(mySummaries);
		}
	}, [mySummaries])

	const isMySummaryEmpty =
		!mySummaries || (mySummaries && mySummaries.length === 0);

    const isPublicSummariesEmpty =
		!publicSummaries || (publicSummaries && publicSummaries.length === 0);

	const isSharedSummariesEmpty =
		!sharedSummaries || (sharedSummaries && sharedSummaries.length === 0);
	return {
		mySummaries, setMySummaries, isMySummaryEmpty,
		myFilterSummaries, setMyFilterSummaries,
        publicSummaries, setPublicSummaries, isPublicSummariesEmpty,
		sharedSummaries, setSharedSummaries, isSharedSummariesEmpty
	}
}

export default SummaryData;