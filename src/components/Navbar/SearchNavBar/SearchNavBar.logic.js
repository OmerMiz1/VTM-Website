import { useState, useContext, useEffect } from 'react';
import { FilterMySummariesContext } from '../../../utils/context/FilterMySummariesContext';
import { useParams } from 'react-router-dom';


const SearchNavBarLogic = (setFilterText) => {
	const params = useParams();
	const { SearchFilterData } = useContext(FilterMySummariesContext);
	const [isHidden, setIsHidden] = useState(0);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		setIsHidden(['settings', 'profile'].includes(params.page) ? 1 : 0)
	}, [params]);

	const handleChange = value => {
        setSearchText(value);
        startSearch();
    }

	const startSearch = () => {
		switch (params.page) {
			case 'mySummaries':
				SearchFilterData(searchText);
				break;
			case 'sharedWithMe':
                setFilterText(searchText);
				break;
			case 'discover':
                setFilterText(searchText);
				break;
		}
	}

	return {
		searchText, handleChange, startSearch, isHidden
	}
};

export default SearchNavBarLogic;