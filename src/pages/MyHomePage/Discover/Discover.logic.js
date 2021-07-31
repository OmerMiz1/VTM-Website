import React, { useEffect, useContext, useState} from 'react';
import SummaryApi from '../../../api/Summary';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import { FilterMySummariesContext } from '../../../utils/context/FilterMySummariesContext';

function DiscoverLogic() {
	const { 
		setLoading,
		setPublicSummaries,
        publicSummaries
	} = useContext(SummariesContext);

    const { 
        filterText,
        publicFilterSummaries,
        setPublicFilterSummaries 
    } = useContext(FilterMySummariesContext);

    const [urlSearchText, setUrlSearchText] = useState("");

    useEffect(() => {
        if (urlSearchText !== "") {
            console.log(`search this Urls`, urlSearchText);
            
        } else {
            UnFilter();
        }
    }, [urlSearchText])


    const UnFilter = () => setPublicFilterSummaries(publicSummaries);


    	// Filter summaries by all the data in the object
	const SearchFilterData = value => {
		const lowerCaseValue = value.toLowerCase().trim();

		if (!lowerCaseValue) {
			UnFilter();
		} else {
			const fillteredData = publicSummaries.filter(item => {
				return Object.keys(item).some(key => {
					return item[key].toString().toLowerCase().includes(lowerCaseValue);
				});
			});
			setPublicFilterSummaries(fillteredData); // save
		}
	}


    useEffect(() => {
        if (filterText !== "") {
            console.log(`filllte`, filterText);
            
            SearchFilterData(filterText);
        } else {
            UnFilter();
        }
    }, [filterText])
	
	const { getPublicSummariesRemote, getPublicSummariesFromUrlRemote } = SummaryApi();
	const getPublicSummaries = () => {
		setLoading(true);
		getPublicSummariesRemote()
			.then(summaries => {
				// TODO add to session storage
				setPublicSummaries(summaries);
				setPublicFilterSummaries(summaries);
                console.log(`settttt`, summaries, "now ----" ,publicFilterSummaries )
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
