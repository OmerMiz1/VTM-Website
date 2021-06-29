import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NoteApi from '../../../api/Note';
import SummaryApi from '../../../api/Summary';


const ViewSummaryLogic = (setLoading, mySummaries, publicSummaries) => {
	const summaryIdKeyName = "sid";
	const createdKeyName = "createTime";
	const editedKeyName = "editTime";
	const noteIdKeyName = "nid";

	const [notes, setNotes] = useState([]);
	const [access, setAccess] = useState({});
	const [allTagsNotes, setAllTagsNotes] = useState([]);
	const [filterTagsNotes, setFilterTagsNotes] = useState([]);
	const [viewSummary, setViewSummary] = useState();
	const params = useParams();

	const [mode, setMode] = useState(params.mode);

    const { getNotes, updateNote, addNote, deleteNote } = NoteApi();
	const { getAccessRemote } = SummaryApi();

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
			case "sharewithme":
				// TODO
            default:
                console.log(`error at view summary logic case`); //DELETEME
        }

		var notesDone = false;
		var accessDone = false;
        setLoading(true);

		getNotes(sid)
			.then(notes => {
				notesDone = true;
				console.log("ViewSummaryLogic, notes:", notes); //DELETEME
				setNotes(notes);

				if (accessDone)
					setLoading(false);
			})
			.catch(error => {
				notesDone = true;
				console.log(error);
			})
		getAccess(sid)
			.then(response => {
				accessDone = true;
				console.log("ViewSummaryLogic, access:", response.data); //DELETEME
				setAccess(response.data);

				if (notesDone)
					setLoading(false);
			})
			.catch(error => {
				accessDone = true;
				console.log(error);
			})
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

    const addNoteIn = (note) => {
        console.log(`note1`, note);
        addNote(note)
			.then(response => {
				console.log("response: ", response);
				note[noteIdKeyName] = response.data[noteIdKeyName];
				note[createdKeyName] = response.data[createdKeyName];
				note[editedKeyName] = response.data[createdKeyName];
				setNotes([...notes, note]);
			})
			.catch(error => {
				console.log(error) // DELETEME
			});            
    }

    const updateNoteIn = (note) => {
		if (!note[summaryIdKeyName] || typeof(note[createdKeyName]) !== typeof (1)) {
			console.log('invalid note object', note); //DELETEME
			return;
		}

        updateNote(note)
			.then(response => {
				console.log(`update note response:`, response); //DELETEME
				setNotes(prev => prev.map(item => (item.nid === note.nid ? note : item)));
			})
			.catch(error => {
				console.log(error);
			})
    }

    const deleteNoteIn = (note) => {
		deleteNote(note)
			.then(response => {
				console.log(response);
				const newNotes = [...notes].filter(n => n.nid !== note.nid);
				setNotes(newNotes);
			})
			.catch(error => {
				console.log(error) // DELETEME
			});
    }

	const getAccess = (sid) => {
		return getAccessRemote(sid);
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
		getAccess
	}
}

export default ViewSummaryLogic;