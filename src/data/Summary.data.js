import { useState, useEffect } from 'react';

const SummaryData = () => {
	const [mySummaries, setMySummaries] = useState([]);
	const [myFilterSummaries, setMyFilterSummaries] = useState([]);

    const [publicSummaries, setPublicSummaries] = useState([]);
    const [publicFilterSummaries, setPublicFilterSummaries] = useState([]);

	const [sharedSummaries, setSharedSummaries] = useState([]);


	useEffect(() => {
		if (myFilterSummaries.length < 1) {
			setMyFilterSummaries(mySummaries);
		}
	}, [mySummaries])

    useEffect(() => {
		if (publicFilterSummaries.length < 1) {
			setPublicFilterSummaries(publicSummaries);
		}
	}, [publicSummaries])

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
		sharedSummaries, setSharedSummaries, isSharedSummariesEmpty,
        publicFilterSummaries, setPublicFilterSummaries
	}
}

export default SummaryData;