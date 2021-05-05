import {useState, useEffect} from 'react';
import {MockData} from './MySummary.data'

const MyHomePageLogic = ()  => {
    const [mySummaries, setMySummaries] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [amountSummariesShow, setAmountSummariesShow] = useState(9);


    //view more.. 
    const ShowMoreSummaries = () => {
        setAmountSummariesShow((prevValue) => prevValue + 9);
    };

    const isMySummaryEmpty =
        !mySummaries || (mySummaries && mySummaries.length === 0);


    // MOCK get all my summary and set it on the state
    const fetchServices = () => {
        setLoading(true);

        // mock the loading time
        setTimeout(
            () => {
                setMySummaries(MockData);
                setLoading(false);
            }, 2000);
    }


    useEffect(() => {
        fetchServices();
      }, []);

    return {
        isMySummaryEmpty, mySummaries, isLoading,
        ShowMoreSummaries, amountSummariesShow
    }
} 


export default MyHomePageLogic;