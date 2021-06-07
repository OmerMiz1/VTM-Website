import { useState, useContext, useEffect } from 'react';
import { FilterMySummariesContext } from '../../../utils/context/FilterMySummariesContext';
import { useParams } from 'react-router-dom';


const SearchNavBarLogic = () => {
	const params = useParams();
	const { SearchFillterData } = useContext(FilterMySummariesContext);
	const [isHidden, setIsHidden] = useState(0);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		setIsHidden(['settings', 'profile'].includes(params.page) ? 1 : 0)
	}, [params]);

	const handleChange = value => setSearchText(value);

	const startSearch = () => {
		console.log(`startSearch`, params); //DELETEME

		switch (params.page) {
			case 'mySummaries':
				console.log(`search.... `, searchText); //DELETEME
				SearchFillterData(searchText);
				break;
			case 'sharedWithMe':
				console.log(`search.... in sharedWithMe`, searchText); //DELETEME
				break;
			case 'discover':
				console.log(`search.... in discover`, searchText); //DELETEME
				break;
		}
	}

	return {
		searchText, handleChange, startSearch, isHidden
	}
};

export default SearchNavBarLogic;