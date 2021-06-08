import React, { useState } from 'react';
import "./style.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function EditNoteForm({ open, onClose, note, updateNote, sid }) {
	const [title, setTitle] = useState(note ? note.title : '');
	const [tag, setTag] = useState(note ? note.tag : '');
	const [formatedTime, setFormatedTime] = useState(note ? note.time : '00:00:00');
	const [content, setContent] = useState(note ? note.content : '');


	const onSubmit = (e) => {
		e.preventDefault();

		// TODO note.nid change random
		console.log(`note`, note) //DELETEME
		const newNote = {
			sid: sid,
			title: title ? title : "Untitled",
			content: content,
			time: formatedTime,
			tag: tag,
			timeSec: getTimeSec()
		}

		if(note.nid)
			newNote["nid"] = note.nid
		
		console.log(`newNote`, newNote); //DELETEME
		updateNote(newNote);
		onClose();
	}

	const getTimeSec = () => {
		let tempSecTime = formatedTime.split(':');
		// minutes == 60 seconds, Hours == 60 minutes.
		let timeSecFormat = (+tempSecTime[0]) * 60 * 60 + (+tempSecTime[1]) * 60 + (+tempSecTime[2]);
		return timeSecFormat;
	}
	
	if (open === null) return null;

	return (
		<form className="form-style-9" onSubmit={onSubmit}>
			<ul>
				<li>
					<input className="field-style field-full" type='text' name="title" placeholder="Add Title" value={title}
						onChange={(e) => setTitle(e.target.value)}></input>
				</li>
				<li>
					<input className="field-style field-split align-left" value={formatedTime} step="2" id="time-input" type='time'
						onChange={(e) => setFormatedTime(e.target.value)}></input>
					<input className="field-style field-split align-right" type='text' name="tag" placeholder="Add Tag" value={tag}
						onChange={(e) => setTag(e.target.value)} list="tags"></input>
					<datalist id="tags">
						{/* TODO add tags... */}
						<option>Note</option>
						<option>Important</option>
						<option>Definition</option>
						<option>Example</option>
						<option>Rewatch</option>
						<option>Todo</option>
					</datalist>
				</li>
				<li>
					<div className="Editor">
						<CKEditor
							editor={ClassicEditor}
							data={content}

							onChange={(event, editor) => {
								const data = editor.getData();
								setContent(data)
							}}
						/>
					</div>
				</li>
				<li>
					<input type='submit' value='Save Note' />
				</li>
			</ul>
		</form>
	)
}

export default EditNoteForm;
