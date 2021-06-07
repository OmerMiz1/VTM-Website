import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilterMySummariesContext } from '../../../utils/context/FilterMySummariesContext';


const MySummariesLogic = () => {
	const { FilterDataByAttribute, UnFilter } = useContext(FilterMySummariesContext);
	const [amountSummariesShow, setAmountSummariesShow] = useState(9);
	const { attribute, name } = useParams();

	// Shows 9 more summaries to the page
	const ShowMoreSummaries = () => setAmountSummariesShow((prevValue) => prevValue + 9);

	useEffect(() => {
		if (attribute && name) {
			try {
				FilterDataByAttribute(attribute, name);
			} catch (err) {
				UnFilter();
			}
		} else {
			UnFilter();
		}
	}, [attribute, name])

	return {
		ShowMoreSummaries, amountSummariesShow,
	}
}


export default MySummariesLogic;





