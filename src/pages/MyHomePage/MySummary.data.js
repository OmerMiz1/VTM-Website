import {useState, useEffect} from 'react';

const MyHomePageData = ()  => {
    const [mySummaries, setMySummaries] = useState([]);
    const [myFilterSummaries, setMyFilterSummaries] = useState([]);


    useEffect(() => {
        console.log(`useEffect!!!!`, mySummaries);
        setMyFilterSummaries(mySummaries);
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