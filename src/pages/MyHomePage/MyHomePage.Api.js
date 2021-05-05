import {useState, useEffect} from 'react';
import {MockData} from './MySummary.data'

const MyHomePageApi = ()  => {
    const [mySummaries, setMySummaries] = useState([]);
    const [isLoading, setLoading] = useState(true);


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
            }, 10);
    }

    useEffect(() => {
        fetchServices();
      }, []);

    return {
        isMySummaryEmpty, mySummaries, isLoading
    }
} 


export default MyHomePageApi;