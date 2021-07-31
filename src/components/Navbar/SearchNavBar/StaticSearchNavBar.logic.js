import { useState, useContext, useEffect } from 'react';


const StaticSearchNavBarLogic = (setUrlSearchText) => {
	const [searchText, setSearchText] = useState('');

	;

	const handleChange = value => {
        setSearchText(value);
    }

	const startSearch = () => {
        setUrlSearchText(searchText);
	}

	return {
		handleChange, startSearch
	}
};

export default StaticSearchNavBarLogic;