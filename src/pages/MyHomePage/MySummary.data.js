import {useState, useEffect} from 'react';

const MyHomePageData = ()  => {
    // state of all my summaries
    const [mySummaries, setMySummaries] = useState([]);
    // state of the filter summaries
    const [myFilterSummaries, setMyFilterSummaries] = useState([]);

    useEffect(() => {
        if (myFilterSummaries.length < 1 ) {
            setMyFilterSummaries(mySummaries);
        }
    }, [mySummaries])


    // Cheacking if mySummaries is empty
    const isMySummaryEmpty =
        !mySummaries || (mySummaries && mySummaries.length === 0);


    return {
        mySummaries, setMySummaries, isMySummaryEmpty,
        myFilterSummaries, setMyFilterSummaries
    }
} 


export default MyHomePageData;