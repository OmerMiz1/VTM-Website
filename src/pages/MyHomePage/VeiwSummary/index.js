import React, {useContext} from "react";
import {SummariesContext} from '../../../utils/context/SummariesContext';
import VeiwSummaryLogic from './VeiwSummary.logic';

import Loading from '../Loading';

import HeaderSection from './HeaderSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import {VeiwSummaryContainer} from './VeiwSummary.style';


function VeiwSummary() {
    const {isLoading, setLoading , mySummaries } = useContext(SummariesContext);
    const {notes, viewSummary, allTagsNotes, filterTagsNotes, toggleFilterNote,
        toggleMode , mode} = VeiwSummaryLogic(setLoading , mySummaries);
    
    return (
        <VeiwSummaryContainer>
            <Loading/> 
            { (viewSummary !== undefined)  && !isLoading &&
                <>
                    <HeaderSection viewSummary={viewSummary} mode={{toggleMode,  mode}}/>
                    <ContentSection notes={notes} tags={allTagsNotes}
                    filterTags= {filterTagsNotes} toggleTags= {toggleFilterNote}/>
                    <FooterSection viewSummary={viewSummary}/>

                </>
            }
        </VeiwSummaryContainer>
    )
}

export default VeiwSummary
