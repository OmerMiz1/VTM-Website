import {useState, useRef} from 'react';

const HeaderLogic = (updateSummary, mode, viewSummary) => {
    const titleInputRef = useRef();
    const addTagInputRef = useRef();

    // Edit title states
    const [editTitle, setEditTitle] = useState(false);
    const [Title, setTitle] = useState(viewSummary.title);

    // Add and Delete tags states
    const [tags, setTags] = useState(viewSummary.tags);
    const [showAddTagInput, setShowAddTagInput] = useState('hidden');

    // ************* Edit title function ************* //
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
        copySummary.title = titleInputRef.current.value;
        editSummary(viewSummary.sid, copySummary );
        setEditTitle(false);           
    }

    // ************* Add and Delete tags function ************* //

    const toggleShowAddTagInput = () => {
        setShowAddTagInput(showAddTagInput === 'hidden' ? 'visible': 'hidden');
    }

    const deleteTag = (sid, myTag) => {
        console.log(`delet sid: `,sid , ' and tag -> ' , myTag);
        const newTags = tags.filter(tag => tag !== myTag );
        let copySummary = {...viewSummary};
        copySummary.tags = newTags;
        editSummary(viewSummary.sid, copySummary );
        setTags(newTags);

    }

    const addTag = () => {
        console.log(`add tag!!! `, addTagInputRef.current.value);

        const newTag = addTagInputRef.current.value;
        if (!tags.includes(newTag) && newTag !== '') {
            const newTags = [... tags , newTag];
            let copySummary = {...viewSummary};
            copySummary.tags = newTags;
            editSummary(viewSummary.sid, copySummary );
            setTags(newTags);
        }
        setShowAddTagInput('hidden');
    }

    return {
        titleInputRef, Title, modeToggle, updateTitle,
        editTitle, toggleEditTitle,
        addTagInputRef, toggleShowAddTagInput, deleteTag,
        addTag, tags, showAddTagInput
    }

}

export default HeaderLogic


