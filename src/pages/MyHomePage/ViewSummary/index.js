import React, { useContext } from "react";
import { SummariesContext } from '../../../utils/context/SummariesContext';
import ViewSummaryLogic from './ViewSummary.logic';
import NoteApi from '../../../api/Note';
import Loading from '../Loading';
import HeaderSection from './HeaderSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import { ViewSummaryContainer } from './ViewSummary.style';
import SummaryApi from "../../../api/Summary";


function ViewSummary() {
	const { isLoading, setLoading, mySummaries,
        updateSummary, deleteSummary, publicSummaries } = useContext(SummariesContext);
	const { notes, viewSummary, allTagsNotes, filterTagsNotes, toggleFilterNote,
		toggleMode, mode, setNotes } = ViewSummaryLogic(setLoading, mySummaries, publicSummaries);
	const { updateNote, addNote, deleteNote } = NoteApi(notes, setNotes, setLoading);

    
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
