import { useState, useRef } from 'react';

const HeaderLogic = (updateSummary, mode, viewSummary) => {
	const titleInputRef = useRef();
	const addTagInputRef = useRef();

	const [editTitle, setEditTitle] = useState(false);
	const [Title, setTitle] = useState(viewSummary.title);
	const [tags, setTags] = useState(viewSummary.tags);
	const [showAddTagInput, setShowAddTagInput] = useState('hidden');

	// ************* Edit title function ************* //
	const toggleEditTitle = () => {
		if (mode.mode === 'edit') {
			setEditTitle(!editTitle);
		}
	}

	const modeToggle = () => {
		setEditTitle(false);
		mode.toggleMode();
	}

	const updateTitle = () => {
		console.log(`updateTitle`, titleInputRef.current.value); //DELETEME
		setTitle(titleInputRef.current.value);

		const copySummary = { ...viewSummary };
		copySummary.title = titleInputRef.current.value;
		updateSummary(copySummary);
		setEditTitle(false);
	}

	// ************* Add and Delete tags function ************* //
	const toggleShowAddTagInput = () => {
		setShowAddTagInput(showAddTagInput === 'hidden' ? 'visible' : 'hidden');
	}

	const deleteTag = (sid, myTag) => {
		console.log(`deleteTag`, sid, myTag); //DELETEME
		const newTags = tags.filter(tag => tag !== myTag);
		const copySummary = { ...viewSummary };
		copySummary.tags = newTags;
		updateSummary(copySummary);
		setTags(newTags);
	}

	const addTag = () => {
		console.log(`addTag`, addTagInputRef.current.value); //DELETEME

		const newTag = addTagInputRef.current.value;
		if (!tags.includes(newTag) && newTag !== '') {
			const newTags = [...tags, newTag];
			const copySummary = { ...viewSummary };
			copySummary.tags = newTags;
			updateSummary(copySummary);
			setTags(newTags);
		}
		setShowAddTagInput('hidden');
	}

	return {
		titleInputRef,
		Title,
		modeToggle,
		updateTitle,
		editTitle,
		toggleEditTitle,
		addTagInputRef,
		toggleShowAddTagInput,
		deleteTag,
		addTag,
		tags,
		showAddTagInput
	}
}

export default HeaderLogic