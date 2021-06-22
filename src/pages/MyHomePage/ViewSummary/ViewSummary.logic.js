import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NoteApi from '../../../api/Note';


const ViewSummaryLogic = (setLoading, mySummaries, publicSummaries) => {
	const [notes, setNotes] = useState([]);
	const [allTagsNotes, setAllTagsNotes] = useState([]);
	const [filterTagsNotes, setFilterTagsNotes] = useState([]);
	const [viewSummary, setViewSummary] = useState();
	const params = useParams();

    console.log(`params`, params);
	const [mode, setMode] = useState(params.mode);
	const { fetchNotes } = NoteApi(notes, setNotes, setLoading);

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
		fetchNotes(sid);
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

	return {
		notes,
		viewSummary,
		allTagsNotes,
		filterTagsNotes,
		toggleFilterNote,
		toggleMode,
		mode,
		setNotes
	}
}

export default ViewSummaryLogic;