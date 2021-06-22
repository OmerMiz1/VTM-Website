import { useState, useEffect } from 'react';


//TODO rename and not default..
const SummaryData = () => {
	const [mySummaries, setMySummaries] = useState([]);
	const [myFilterSummaries, setMyFilterSummaries] = useState([]);
    const [publicSummaries, setPublicSummaries] = useState([]);

	useEffect(() => {
		if (myFilterSummaries.length < 1) {
			setMyFilterSummaries(mySummaries);
		}
	}, [mySummaries])

	const isMySummaryEmpty =
		!mySummaries || (mySummaries && mySummaries.length === 0);

    const isPublicSummariesEmpty =
		!publicSummaries || (publicSummaries && publicSummaries.length === 0);

	return {
		mySummaries, setMySummaries, isMySummaryEmpty,
		myFilterSummaries, setMyFilterSummaries,
        publicSummaries, setPublicSummaries, isPublicSummariesEmpty,	
	}
}

export default SummaryData;