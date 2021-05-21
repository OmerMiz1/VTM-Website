import React, {useState} from 'react';
import parse from 'html-react-parser';


import {ViewSummaryContext, ListNotes, ItemNote,
    TimeTag, TitleTag, ContextText} from '.././VeiwSummary.style';

import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';
import Icon from '../../../../components/atoms/Icon';
import { EditIcons} from '../HeaderSection/HeaderIcons.data';

import EditNoteForm from '../../../../components/atoms/Forms/EditNoteForm';
import EditPopupForm from '../../../../components/Popups/EditPopupForm'




function ContentSection({notes, tags, filterTags, toggleTags, mode}) {

    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

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
                            <ItemNote key={note.id}>
                                {mode.mode == 'edit' &&
                                <Icon fontSize="18px" margin={'0 5px 0 0'} color={ EditIcons.pen.color} icon={EditIcons.pen.icon} 
                                funOnClick={() => {
                                setIsOpen(true);
                                setShowForm(true);}}
                            ></Icon>}
                                <TimeTag>{note.time}</TimeTag>
                                <TitleTag>{note.title} </TitleTag>
                                <ContextText>{parse(note.content)}</ContextText>
                            </ItemNote>
                        );
                    })
                }
            </ListNotes>
            {
                showForm &&  
                <EditPopupForm note={notes[0]} addNote={console.log(`add`)} open={isOpen} onClose={() => {
                    setIsOpen(false);
                    setShowForm(false);
                }}>
                    {/* <EditNoteForm></EditNoteForm> */}
                </EditPopupForm>
            }
            
        </ViewSummaryContext>
        
    )
}

export default ContentSection
