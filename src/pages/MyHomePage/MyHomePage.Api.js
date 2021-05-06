import {useState, useEffect, useMemo} from 'react';
import {MockData} from './MySummary.data'

const MyHomePageApi = ()  => {
    const [mySummaries, setMySummaries] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // Cheacking if mySummaries is empty
    const isMySummaryEmpty =
        !mySummaries || (mySummaries && mySummaries.length === 0);


    
    const deleteSummary = (id) => {
        console.log(`api - delete id`, id)
    }

    const editSummary = (id) => {
        console.log(`api - edit id`, id)
    }

    const ShareSummary = (id) => {
        console.log(`api - sharing id`, id)
    }


    const toggleFavorite = (id) => {
        console.log(`api - toggle Favorite id`, id)
    }



    // MOCK get all my summary and set it on the state
    const fetchServices = () => {
        setLoading(true);
        console.log('fetch all my summaries...');
        // mock the loading time
        setTimeout(
            () => {
                setMySummaries(MockData);
                setLoading(false);
            }, 100);
    }

    useEffect(() => {
        fetchServices();
      }, []);



    return {
        isMySummaryEmpty, mySummaries, isLoading,
        deleteSummary, editSummary, ShareSummary, toggleFavorite
    }
} 


export default MyHomePageApi;