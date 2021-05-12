import React, {useContext} from "react";
import {SummariesContext} from '../../../utils/context/SummariesContext';
import parse from 'html-react-parser';
import VeiwSummaryLogic from './VeiwSummary.logic';

import Loading from '../Loading';
import AttributText from '../../../components/atoms/Texts/AttributText';
import TagsButton from '../../../components/atoms/Buttons/TagsButton';
import ListOfButtonsTags from '../../../containers/ListOfButtonsTag';

import {VeiwSummaryContainer, VeiwSummaryHeaderContainer, VeiwSummaryH1,
    LinksContainer, VideoLink, ViewSummaryContext, ListNotes, ItemNote, SpaceAroundContainer,
    TimeTag, TitleTag, ContextText, ViewSummaryFooter } from './VeiwSummary.style';


import {faShare, faTrash , faEdit, faPrint } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



function VeiwSummary() {
    const {isLoading, setLoading , mySummaries } = useContext(SummariesContext);
    const {notes, viewSummary} = VeiwSummaryLogic(setLoading , mySummaries);
    
    return (
        <VeiwSummaryContainer>
            <Loading/> 

            { (viewSummary !== undefined)  && !isLoading &&
                <>
                    <VeiwSummaryHeaderContainer>
                        <VeiwSummaryH1>{viewSummary.title}</VeiwSummaryH1>
                            <AttributText attribution='Create By'
                                textValue={viewSummary.autorName}></AttributText>
                        <LinksContainer>
                            <VideoLink href={viewSummary.url} target="_blank" rel="noopener noreferrer">Link to Video!</VideoLink>
                            <ListOfButtonsTags>
                                {viewSummary.tags.map((tag, index) => {
                                    return(
                                        <TagsButton key={index} keyId={index} text={tag}
                                        link={'/myHome/mySummaries/filter/tags/' + tag } />
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

                    <ViewSummaryFooter>
                        <SpaceAroundContainer >
                            <AttributText attribution='Create At:'
                                textValue={viewSummary.createdTime} color='black'></AttributText>

                            <AttributText attribution='Last Change:'
                                textValue={viewSummary.editTime} color='black'></AttributText>
                        </SpaceAroundContainer>

                        <FontAwesomeIcon color="black" icon={faPrint}></FontAwesomeIcon>
                        <FontAwesomeIcon color="black" icon={faShare}></FontAwesomeIcon>
                        <FontAwesomeIcon color="black" icon={faEdit}></FontAwesomeIcon>
                        <FontAwesomeIcon color="black" icon={faTrash}></FontAwesomeIcon>

                    </ViewSummaryFooter>
                </>
            }
               
            

            
        </VeiwSummaryContainer>
    )
}

export default VeiwSummary
