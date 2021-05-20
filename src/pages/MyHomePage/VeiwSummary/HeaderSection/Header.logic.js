import {useState, useRef} from 'react';

const HeaderLogic = (editSummary, mode, viewSummary) => {
    const titleInputRef = useRef();
    const addTagInputRef = useRef();

    // Edit title states
    const [editTitle, setEditTitle] = useState(false);
    const [Title, setTitle] = useState(viewSummary.title);

    // Add and Delete tags states
    const [tags, setTags] = useState(viewSummary.tags);
    const [showAddTagInput, setShowAddTagInput] = useState(false);

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
        console.log(`copySummary`, copySummary);
        copySummary.title = titleInputRef.current.value;
        console.log(`copySummary2 --> `, copySummary);

        editSummary(viewSummary.id, copySummary );
        setEditTitle(false);           
    }

    // ************* Add and Delete tags function ************* //

    const toggleShowAddTagInput = () => {
        setShowAddTagInput(!showAddTagInput);
    }

    const deleteTag = (id, myTag) => {
        console.log(`delet id: `,id , ' and tag -> ' , myTag);
        const newTags = tags.filter(tag => tag !== myTag );
        setTags(newTags);
    }

    const addTag = () => {
        console.log(`add tag!!! `, addTagInputRef.current.value);

        const newTag = addTagInputRef.current.value;
        if (!tags.includes(newTag) && newTag !== '') {
            const newTags = [... tags , newTag];
            setTags(newTags);
        }
        setShowAddTagInput(false);
    }

    return {
        titleInputRef, Title, modeToggle, updateTitle,
        editTitle, toggleEditTitle,
        addTagInputRef, toggleShowAddTagInput, deleteTag,
        addTag, tags, showAddTagInput
    }

}

export default HeaderLogic


