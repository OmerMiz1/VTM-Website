import {MockData} from './VeiwSummary.mock';

const ViewSummaryApi = (setNotes, notes) =>  {

    //MOCK add note
    const addNote = (updateNote) => {

        //TODO change set nid!
        updateNote.nid = Math.floor((Math.random() * 1000000) + 1)

        console.log(`api - add ` ,updateNote);
        setNotes([...notes, updateNote]); 
    };


    //MOCK edit note
    const editNote = (nid , updateNote) => {
        //Mock edit summary
        const newNote = updateNote ? updateNote: 
        {
            nid : 1000,
            sid : 3,
            title: "Edit Note",
            content: "<p>Edit mock</p>",
            time: "00:00:00",
            tag: "Mock",
            timeSec: 0
        }

        console.log(`api - edit nid`, nid, ' to ' ,newNote);
        setNotes(prev => prev.map(item => (item.nid === nid ? newNote : item)));
        
    };

    return {
        editNote, addNote

    }
}

export default ViewSummaryApi


//MOCK fetch all the notes that much to summary sid
export const fetchNotes = (sid, setNotes, setLoading) => {
    console.log(`fech all the notes of summay sid - `, sid);
    setLoading(true);
    // mock the loading time
    setTimeout(
        () => {
            const dataNotes = MockData.filter( item => {
                return(
                    item.sid === sid
                )
            });
            setNotes(dataNotes);
            setLoading(false);
        }, 200);
};
