import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ViewSummaryApi from './ViewSummary.Api';


const ViewSummaryLogic = (setLoading, mySummaries) => {
	const [notes, setNotes] = useState([]);
	const [allTagsNotes, setAllTagsNotes] = useState([]);
	const [filterTagsNotes, setFilterTagsNotes] = useState([]);
	const [viewSummary, setViewSummary] = useState();
	const params = useParams();
	const [mode, setMode] = useState(params.mode);
	const { fetchNotes } = ViewSummaryApi(notes, setNotes, setLoading);

	const toggleMode = () => setMode(mode === 'view' ? 'edit' : 'view');

	useEffect(() => {
		const sid = params.sid;
		setViewSummary(getSummaryById(sid));
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