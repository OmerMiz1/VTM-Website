import {useState, useRef} from 'react';

const HeaderLogic = (updateSummary, mode, viewSummary) => {
    const titleInputRef = useRef();

    const [editTitle, setEditTitle] = useState(false);
    const [Title, setTitle] = useState(viewSummary.title);


    const toggleEditTitle = () => {
        if (mode.mode === 'edit') {
            setEditTitle(!editTitle);
        }
    }

    const modeToggle =  () => {
        setEditTitle(false);
        mode.toggleMode();
    }

    const updateTitle = () =>  {
        console.log(`upadate!!!`, titleInputRef.current.value);
        setTitle(titleInputRef.current.value);
        // send the change!!!
        let copySummary = {...viewSummary};
        console.log(`copySummary`, copySummary);
        copySummary.title = titleInputRef.current.value;
        console.log(`copySummary2 --> `, copySummary);



        updateSummary(viewSummary.id, copySummary );
        setEditTitle(false);           
    }


    
    return {
        titleInputRef, Title, modeToggle, updateTitle,
        editTitle, toggleEditTitle
        
    }

}

export default HeaderLogic


