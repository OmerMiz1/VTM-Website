import React, { useState, useContext } from 'react';
import parse from 'html-react-parser';
import {
	ViewSummaryContext, ListNotes, ItemNote, EditIconContainer,
	TimeTag, TitleTag, ContextText
} from '.././ViewSummary.style';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';
import Icon from '../../../../components/atoms/Icon';
import { EditIcons } from '../HeaderSection/HeaderIcons.data';
import EditNoteForm from '../../../../components/atoms/forms/EditNoteForm';
import EditPopupForm from '../../../../components/Popups/EditPopupForm';
import AccessPopup from '../../../../components/Popups/Access';
import AddButton from '../../../../components/atoms/Buttons/AddButton';
import EditAccessForm from '../../../../components/atoms/forms/EditAccess';

import { SummariesContext } from '../../../../utils/context/SummariesContext';

function ContentSection({ notes, tags, filterTags, toggleTags, mode, updateNote, addNote, deleteNote, sid }) {
	// showEditNoteNumber === null : none,
	// showEditNoteNumber ===  "NEW_NOTE" : newNote,
	// else : updateNote
	const [showEditNoteNumber, setShowEditNoteNumber] = useState(null);
	const { editAccess } = useContext(SummariesContext);

	//TODO ceate styled one and move to util
	const confirmDelete = (note) => {
		var ans = window.confirm("Are you sure you want to delete this note?");
		if (ans === true) {
			deleteNote(note);
		}
	}

	return (
		<ViewSummaryContext>
            
            {/* TODO fix style and accces */}
            {
                mode.mode === "access" && 
                <AccessPopup title="Access Settings" onClose={() => mode.toggleMode("access")}>
						<EditAccessForm close={ () => mode.toggleMode("access")}
                         sid={sid} access={{access: 1, allowFriends: true, allowedUsers: []}} editAccess={editAccess}></EditAccessForm>
				</AccessPopup>
                
            }

			<ListOfButtonsTags>
				{tags.map((tag, index) => {
					const color = filterTags.includes(tag) ? '#aee2ae' : '#fff'; //TODO change colors
					return (
						<TagsButton fontSize='75%' key={index}
							backColor={color} keyId={index} text={tag}
							link={'#'} fun={toggleTags} />
					);
				})}
			</ListOfButtonsTags>


			<ListNotes>
				{
					notes.filter(item => filterTags.includes(item.tag)).map((note) => {
						return (
							<ItemNote key={note.nid}>
								{mode.mode === 'edit' && <EditIconContainer>
									<Icon fontSize="18px" margin={'0 5px 0 0'} color={EditIcons.trash.color}
										icon={EditIcons.trash.icon} funOnClick={() => confirmDelete(note)}></Icon>

									<Icon fontSize="18px" margin={'0 5px 0 0'} color={EditIcons.pen.color}
										icon={EditIcons.pen.icon} funOnClick={() => setShowEditNoteNumber(note.nid)}></Icon>
								</EditIconContainer>}
								<TimeTag>{note.time}</TimeTag>
								<TitleTag>{note.title} </TitleTag>
								<ContextText>{parse(note.content)}</ContextText>
							</ItemNote>
						);
					})
				}
			</ListNotes>
			{mode.mode === 'edit' && <AddButton onClickFun={() => setShowEditNoteNumber("NEW_NOTE")}>add note</AddButton>}
			{
				showEditNoteNumber ?
					<EditPopupForm title={showEditNoteNumber === "NEW_NOTE" ? 'Add Note' : 'Edit Note'} onClose={() => setShowEditNoteNumber(null)}>
						<EditNoteForm note={notes.find(item => item.nid === showEditNoteNumber)}
							updateNote={showEditNoteNumber === "NEW_NOTE" ? addNote : updateNote} sid={sid}
							open={showEditNoteNumber} onClose={() => setShowEditNoteNumber(null)}> </EditNoteForm>
					</EditPopupForm> : <></>
			}
		</ViewSummaryContext>
	)
}

export default ContentSection;