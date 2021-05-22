import React, {useContext} from "react";
import {SummariesContext} from '../../../utils/context/SummariesContext';
import VeiwSummaryLogic from './VeiwSummary.logic';
import ViewSummaryApi from './ViewSummary.Api'

import Loading from '../Loading';

import HeaderSection from './HeaderSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import {VeiwSummaryContainer} from './VeiwSummary.style';


function VeiwSummary() {
    const {isLoading, setLoading , mySummaries, editSummary } = useContext(SummariesContext);
    const {notes, viewSummary, allTagsNotes, filterTagsNotes, toggleFilterNote,
        toggleMode , mode, setNotes} = VeiwSummaryLogic(setLoading , mySummaries);

    const {editNote, addNote, deleteNote} = ViewSummaryApi(setNotes, notes);
    
    return (
        <VeiwSummaryContainer>
            <Loading/> 
            { (viewSummary !== undefined)  && !isLoading &&
                <>
                    <HeaderSection viewSummary={viewSummary} editSummary={editSummary} mode={{toggleMode,  mode}}/>
                    <ContentSection notes={notes} tags={allTagsNotes} mode={{toggleMode,  mode}} sid={viewSummary.sid}
                    filterTags= {filterTagsNotes} toggleTags= {toggleFilterNote}
                    editNote={editNote} addNote={addNote} deleteNote={deleteNote}/>
                    <FooterSection viewSummary={viewSummary}/>

                </>
            }
        </VeiwSummaryContainer>
    )
}

export default VeiwSummary
