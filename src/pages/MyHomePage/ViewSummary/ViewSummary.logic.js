import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NoteApi from '../../../api/Note';


const ViewSummaryLogic = (setLoading, mySummaries, publicSummaries) => {
	const createdKeyName = "createTime";
	const editedKeyName = "editTime";
	const noteIdKeyName = "nid";

	const [notes, setNotes] = useState([]);
	const [allTagsNotes, setAllTagsNotes] = useState([]);
	const [filterTagsNotes, setFilterTagsNotes] = useState([]);
	const [viewSummary, setViewSummary] = useState();
	const params = useParams();

    console.log(`params`, params);
	const [mode, setMode] = useState(params.mode);

    const {fetchNotes, updateNote, addNote, deleteNote } = NoteApi();

	const toggleMode = (nextState) => setMode(mode === 'view' ? nextState : 'view');

	useEffect(() => {
		const sid = params.sid;
        switch(params.page){
            case "mySummaries":
                setViewSummary(getSummaryById(sid));
                break;
            case "discover":
                console.log(`add here set summary`, sid);
                setViewSummary(getSummaryByIdPublic(sid));
                break
            default:
                console.log(`error at view summary logic case`);
        }
        setLoading(true);
		let respons = fetchNotes(sid);
        if (respons !== 'error') { // TODO error handel
            setNotes(notes);
			setLoading(false);
        } 
      
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

	const getSummaryById = sid => mySummaries.find(summary => summary.sid === sid);
	const getSummaryByIdPublic = sid => publicSummaries.find(summary => summary.sid === sid);


    const addNoteIn =  (note) => {
        console.log(`note1`, note);
        let response =  addNote(note);

        if (response !== 'error') { // TODO error handel
            note[noteIdKeyName] = response.data[noteIdKeyName];
            note[createdKeyName] = response.data[createdKeyName];
            note[editedKeyName] = response.data[editedKeyName];
            setNotes([...notes, note]);
        }
    }


    const updateNoteIn = (note) => {
        let response = updateNote(note);
        if (response !== 'error') { // TODO error handel
            setNotes(prev => prev.map(item => (item.nid === note.nid ? note : item)));
        }
    }

    const deleteNoteIn = (note) => {
        if (deleteNote !== 'error') { //rename error handel
            const newNotes = [...notes].filter(n => n.nid !== note.nid);
			setNotes(newNotes);
        }
    }


	return {
		notes,
		viewSummary,
		allTagsNotes,
		filterTagsNotes,
		toggleFilterNote,
		toggleMode,
		mode,
        updateNoteIn,
        addNoteIn,
        deleteNoteIn,
        
	}
}

export default ViewSummaryLogic;