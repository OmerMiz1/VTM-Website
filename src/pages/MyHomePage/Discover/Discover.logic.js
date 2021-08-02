import React, { useEffect, useContext, useState} from 'react';
import SummaryApi from '../../../api/Summary';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import { FilterMySummariesContext } from '../../../utils/context/FilterMySummariesContext';
import { useParams } from 'react-router-dom';


function DiscoverLogic() {

    const { attribute, name } = useParams();

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

    useEffect(() => {
        if (attribute && name) {
            return;
        }
        getPublicSummaries()
	}, []);


    const [urlSearchText, setUrlSearchText] = useState("");


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

    useEffect(() => {
        if (attribute && name) {
            return
        }
        if (urlSearchText !== "") {
            getPublicSummariesFromUrl(urlSearchText);
        } else {
            UnFilter();
        }
    }, [urlSearchText])


    const UnFilter = () => {

        setPublicFilterSummaries(publicSummaries);
    }



    
    // Filter summaries by attribute and value
	const FilterDataByAttribute = (attribute, value) => {
		const lowerCaseValue = value.toLowerCase().trim();
		
		if (!lowerCaseValue) {
			UnFilter()
		} else {
			const fillteredData = publicSummaries.filter(item => {
				return Object.keys(item).some(_ => {
					return item[attribute].toString().toLowerCase().includes(lowerCaseValue);
				});
			});
			setPublicFilterSummaries(fillteredData);
		}
	}

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
        if (attribute && name) {
            return;
        }
        if (filterText !== "") {
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
				setPublicSummaries(summaries);
				setPublicFilterSummaries(summaries);
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
			// setPublicSummaries(summaries);
            setPublicFilterSummaries(summaries);

			setLoading(false);
		})
		.catch(error => {
			console.log(`error:`, error);
			setLoading(false);
		});
	}



    return ( {setUrlSearchText, attribute , name} )
}

export default DiscoverLogic