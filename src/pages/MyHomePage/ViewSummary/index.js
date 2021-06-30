import React, { useContext, useEffect } from "react";
import { SummariesContext } from '../../../utils/context/SummariesContext';
import ViewSummaryLogic from './ViewSummary.logic';
import Loading from '../Loading';
import HeaderSection from './HeaderSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import { ViewSummaryContainer } from './ViewSummary.style';


function ViewSummary() {
	const { isLoading, setLoading, mySummaries,
        updateSummary, deleteSummary, publicSummaries } = useContext(SummariesContext);

	const { notes, viewSummary, allTagsNotes, filterTagsNotes, toggleFilterNote,
		toggleMode, mode, updateNoteIn, addNoteIn, deleteNoteIn, access } = ViewSummaryLogic(setLoading, mySummaries, publicSummaries);


	return (
		<ViewSummaryContainer>
			<Loading />
			{ (viewSummary !== undefined) && !isLoading &&
				<>
					<HeaderSection viewSummary={viewSummary} deleteSummary={deleteSummary} updateSummary={updateSummary} mode={{ toggleMode, mode }} />
					<ContentSection notes={notes} tags={allTagsNotes} mode={{ toggleMode, mode }} sid={viewSummary.sid}
						filterTags={filterTagsNotes} access={access} toggleTags={toggleFilterNote}
						updateNote={updateNoteIn} addNote={addNoteIn} deleteNote={deleteNoteIn} />
					<FooterSection viewSummary={viewSummary} />
				</>
			}
		</ViewSummaryContainer>
	)
}

export default ViewSummary;
