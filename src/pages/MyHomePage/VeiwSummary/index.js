import React, {useContext} from "react";
import {SummariesContext} from '../../../utils/context/SummariesContext';
import VeiwSummaryLogic from './VeiwSummary.logic';

import Loading from '../Loading';

import HeaderSection from './HeaderSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import {VeiwSummaryContainer} from './VeiwSummary.style';

// import {faShare, faTrash , faEdit, faPrint } from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function VeiwSummary() {
    const {isLoading, setLoading , mySummaries } = useContext(SummariesContext);
    const {notes, viewSummary, allTagsNotes,
        filterTagsNotes, toggleFilterNote} = VeiwSummaryLogic(setLoading , mySummaries);
    
    return (
        <VeiwSummaryContainer>
            <Loading/> 
            { (viewSummary !== undefined)  && !isLoading &&
                <>
                    <HeaderSection viewSummary={viewSummary} />
                    <ContentSection notes={notes} tags={allTagsNotes}
                    filterTags= {filterTagsNotes} toggleTags= {toggleFilterNote}/>
                    <FooterSection viewSummary={viewSummary}/>
                        {/* <FontAwesomeIcon color="black" icon={faPrint}></FontAwesomeIcon>
                        <FontAwesomeIcon color="black" icon={faShare}></FontAwesomeIcon>
                        <FontAwesomeIcon color="black" icon={faEdit}></FontAwesomeIcon>
                        <FontAwesomeIcon color="black" icon={faTrash}></FontAwesomeIcon> */}

                </>
            }
        </VeiwSummaryContainer>
    )
}

export default VeiwSummary
