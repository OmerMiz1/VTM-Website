import React, {useState} from 'react';
import parse from 'html-react-parser';

import {ViewSummaryContext, ListNotes, ItemNote, EditIconContainer,
    TimeTag, TitleTag, ContextText} from '.././VeiwSummary.style';

import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';
import Icon from '../../../../components/atoms/Icon';
import { EditIcons} from '../HeaderSection/HeaderIcons.data';

import EditNoteForm from '../../../../components/atoms/Forms/EditNoteForm';
import EditPopupForm from '../../../../components/Popups/EditPopupForm'
import AddButton from '../../../../components/atoms/Buttons/AddButton';




function ContentSection({notes, tags, filterTags, toggleTags, mode, editNote, addNote, deleteNote, sid}) {

    const [showEditNoteNumber, setShowEditNoteNumber] = useState(-1);

    return (
        <ViewSummaryContext>
            <ListOfButtonsTags>
                    {tags.map((tag, index) => {
                        const color = filterTags.includes(tag) ? '#aee2ae' : '#fff'; //TODO change colors
                        return(
                            <TagsButton fontSize='75%' key={index}
                            backColor={color} keyId={index} text={tag}
                            link={'#'} fun={toggleTags} />
                        );
                    })}
            </ListOfButtonsTags>
            

            <ListNotes>
                {
                    notes.filter(item => filterTags.includes(item.tag)).map((note) => {
                        return(
                            <ItemNote key={note.nid}>
                                {mode.mode == 'edit' && <EditIconContainer>
                                    <Icon fontSize="18px" margin={'0 5px 0 0'} color={ EditIcons.trash.color}
                                        icon={EditIcons.trash.icon} funOnClick={() => deleteNote(note.nid)}></Icon>
                                
                                    <Icon fontSize="18px" margin={'0 5px 0 0'} color={ EditIcons.pen.color}
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
            {mode.mode == 'edit' && <AddButton onClickFun={() => setShowEditNoteNumber(0)}>add note</AddButton>}
            {
                showEditNoteNumber >= 0 ?  
                <EditPopupForm title= {showEditNoteNumber ? 'Edit Note' : 'Add Note'} onClose={() => setShowEditNoteNumber(-1)}>
                    <EditNoteForm note={notes.find(item => item.nid === showEditNoteNumber)}
                    editNote={showEditNoteNumber? editNote: addNote} sid={sid}
                    open={showEditNoteNumber} onClose={() => setShowEditNoteNumber(-1)}> </EditNoteForm>
                </EditPopupForm> : <></>
            }
            
        </ViewSummaryContext>
        
    )
}

export default ContentSection
