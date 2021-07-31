import React, { useEffect, useContext} from 'react';
import SummaryApi from '../../../api/Summary';
import { SummariesContext } from '../../../utils/context/SummariesContext';


function DiscoverLogic() {
	const { 
		setLoading,
		setPublicSummaries,
	} = useContext(SummariesContext);
	
	const { getPublicSummariesRemote, getPublicSummariesFromUrlRemote } = SummaryApi();
	const getPublicSummaries = () => {
		setLoading(true);
		getPublicSummariesRemote()
			.then(summaries => {
				// TODO add to session storage
				setPublicSummaries(summaries);
				setLoading(false);
			})
			.catch(error => {
				console.log(`error:`, error);
				setLoading(false);
			});
	}

	const getPublicSummariesFromUrl = (url) => {
		setLoading(true);
		getPublicSummariesFromUrlRemote(url)
		.then(summaries => {
			// TODO add to session storage
			setPublicSummaries(summaries);
			setLoading(false);
		})
		.catch(error => {
			console.log(`error:`, error);
			setLoading(false);
		});
	}

	useEffect(() => {
        getPublicSummaries()
	}, []);


    return ( {} )
}

export default DiscoverLogic
