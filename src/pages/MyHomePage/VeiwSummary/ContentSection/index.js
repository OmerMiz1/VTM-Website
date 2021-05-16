import React from 'react';
import parse from 'html-react-parser';


import {ViewSummaryContext, ListNotes, ItemNote,
    TimeTag, TitleTag, ContextText} from '.././VeiwSummary.style';

import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';
 


function ContentSection({notes, tags, filterTags, toggleTags}) {
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
                                <TimeTag>{note.time}</TimeTag>
                                <TitleTag>{note.title} </TitleTag>
                                <ContextText>{parse(note.content)}</ContextText>
                            </ItemNote>
                        );
                    })
                }
            </ListNotes>
        </ViewSummaryContext>
        
    )
}

export default ContentSection
