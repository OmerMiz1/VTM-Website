import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

import {fetchNotes} from './ViewSummary.Api'; 



const VeiwSummaryLogic = (setLoading , mySummaries)  => {
    const [notes, setNotes] = useState([]);
    const [viewSummary, setViewSummary] = useState()
    const location = useLocation();

    useEffect(() => {
        const id = location.state;
        setViewSummary(getSummaryById(id));
        fetchNotes(id, setNotes, setLoading);
    
    }, [location]);

    // get the relevant summary from all summaries (by id)
    const getSummaryById = id => {
        return mySummaries.find(summary => summary.id === id);
    }
   

    return {
        notes, viewSummary
    }
} 


export default VeiwSummaryLogic;





