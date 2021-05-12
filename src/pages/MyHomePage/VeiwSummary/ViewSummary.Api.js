import {useState, useEffect} from 'react';
import {MockData} from './VeiwSummary.mock';
import { useLocation } from "react-router-dom";

const VeiwSummaryApi = (setLoading , mySummaries)  => {
    const [notes, setNotes] = useState([]);
    const [viewSummary, setViewSummary] = useState()
    const location = useLocation();

    //TODO Move to llogic!
    useEffect(() => {
        const id = location.state;
        setViewSummary(getSummaryById(id));
        fetchNotes(id);
    
    }, [location]);

    //MOCK fetch all the notes that much to summary id  
    const  fetchNotes = (id) => {
        console.log(`fech all the notes of summay id - `, id);
        setLoading(true);
        // mock the loading time
        setTimeout(
            () => {
                const dataNotes = MockData.filter( item => {
                    return(
                        item.summaryId ===id
                    )
                });
                setNotes(dataNotes);
                setLoading(false);
            }, 200);
    };


    //TODO move to logic!
    // get the relevant summary from all summaries (by id)
    const getSummaryById = id => {
        return mySummaries.find(summary => summary.id === id);
;
    }
    

    return {  
        notes, viewSummary
    }
} 


export default VeiwSummaryApi;