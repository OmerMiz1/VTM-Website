import React, {useContext} from "react";
import {SummariesContext} from '../../../utils/context/SummariesContext';
import parse from 'html-react-parser';


import VeiwSummaryApi from './ViewSummary.Api';
import Loading from '../Loading';

import {VeiwSummaryContainer, VeiwSummaryHeaderContainer, VeiwSummaryH1,
    LinksContainer, VideoLink, ViewSummaryContext, ListNotes, ItemNote,
    TimeTag, TitleTag, ContextText} from './VeiwSummary.style';

//TODO make global ...
import {AutorContainer, CreateBy, CardTextInput} from '../../../components/Card/CardSummary/CardSummary.style';
//TODO make global ...
import {ListOfButtonsTags, ItemButtonTag, LinkTag, ButtonTag} from '../MySummaries/MyTags/MyTags.style';


function VeiwSummary() {
    const {isLoading, setLoading , mySummaries } = useContext(SummariesContext);

    const {notes, viewSummary} = VeiwSummaryApi(setLoading , mySummaries);
    
    return (
        <VeiwSummaryContainer>
            <Loading/> 

            { (viewSummary !== undefined)  && !isLoading &&
                <>
                    <VeiwSummaryHeaderContainer>
                        <VeiwSummaryH1>{viewSummary.title}</VeiwSummaryH1>
                        <AutorContainer>
                            <CreateBy>Create By</CreateBy>
                            <CardTextInput>{viewSummary.autorName}</CardTextInput>
                        </AutorContainer>
                        <LinksContainer>
                            <VideoLink href={viewSummary.url} target="_blank" rel="noopener noreferrer">Link to Video!</VideoLink>
                            <ListOfButtonsTags>
                            {viewSummary.tags.map((tag, index) => {
                                return(
                                    <ItemButtonTag key={index}>
                                        <LinkTag to={'/myHome/mySummaries/filter/tags/' + tag }>
                                        <ButtonTag>{tag}</ButtonTag>
                                        </LinkTag>
                                    </ItemButtonTag>
                                );
                            })}
                            </ListOfButtonsTags>
                        </LinksContainer>
                    </VeiwSummaryHeaderContainer>

                    <ViewSummaryContext>
                        <ListNotes>
                            {
                                notes.map((note) => {
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
                
                </>
               
            }
               
            
            


            
        </VeiwSummaryContainer>
    )
}

export default VeiwSummary
