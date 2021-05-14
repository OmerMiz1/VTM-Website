import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import {fetchNotes} from './ViewSummary.Api'; 



const VeiwSummaryLogic = (setLoading , mySummaries)  => {
    const [notes, setNotes] = useState([]);
    const [allTagsNotes, setAllTagsNotes] = useState([]);
    const [filterTagsNotes, setFilterTagsNotes] = useState([]);

    const [viewSummary, setViewSummary] = useState();
    const params = useParams();



    useEffect(() => {
        const id = parseInt(params.id);
        setViewSummary(getSummaryById(id));
        fetchNotes(id, setNotes, setLoading);
    }, []);

    useEffect(() => {
        const allNotes = getAllTags(notes)
        setAllTagsNotes(allNotes);
        setFilterTagsNotes(allNotes);
    }, [notes])

    const getAllTags = (notes) => {
        const allTags = new Set();
        notes.forEach((note) => {
            allTags.add(note.tag)
        });
        return Array.from(allTags)
    }


    const toggleFilterNote = (tag) => {
        if (filterTagsNotes.includes(tag)) {
            setFilterTagsNotes(filterTagsNotes.filter(item => item !== tag));
        } else {
            setFilterTagsNotes(prev => [...prev, tag]);            
        }
    }


    // get the relevant summary from all summaries (by id)
    const getSummaryById = id => {
        return mySummaries.find(summary => summary.id === id);
    }
   

    return {
        notes, viewSummary, allTagsNotes, 
        filterTagsNotes, toggleFilterNote

    }
} 


export default VeiwSummaryLogic;





