import React, { useContext } from "react";
import { SummariesContext } from '../../../utils/context/SummariesContext';
import ViewSummaryLogic from './ViewSummary.logic';
import ViewSummaryApi from './ViewSummary.Api'
import Loading from '../Loading';
import HeaderSection from './HeaderSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import { ViewSummaryContainer } from './ViewSummary.style';


function ViewSummary() {
	const { isLoading, setLoading, mySummaries, updateSummary, deleteSummary } = useContext(SummariesContext);
	const { notes, viewSummary, allTagsNotes, filterTagsNotes, toggleFilterNote,
		toggleMode, mode, setNotes } = ViewSummaryLogic(setLoading, mySummaries);
	const { updateNote, addNote, deleteNote } = ViewSummaryApi(notes, setNotes, setLoading);
	
	return (
		<ViewSummaryContainer>
			<Loading />
			{ (viewSummary !== undefined) && !isLoading &&
				<>
					<HeaderSection viewSummary={viewSummary} deleteSummary={deleteSummary} updateSummary={updateSummary} mode={{ toggleMode, mode }} />
					<ContentSection notes={notes} tags={allTagsNotes} mode={{ toggleMode, mode }} sid={viewSummary.sid}
						filterTags={filterTagsNotes} toggleTags={toggleFilterNote}
						updateNote={updateNote} addNote={addNote} deleteNote={deleteNote} />
					<FooterSection viewSummary={viewSummary} />
				</>
			}
		</ViewSummaryContainer>
	)
}

export default ViewSummary;
