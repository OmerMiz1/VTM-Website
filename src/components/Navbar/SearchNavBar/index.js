import React from 'react';
import { SearchLink, ContainerSearchBar, SearchBar } from './SearchNavBar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchNavBarLogic from './SearchNavBar.logic';


function SearchNavBar({setFilterText}) {
	const { handleChange, startSearch, isHidden } = SearchNavBarLogic(setFilterText);
    
    // console.log(window.location.pathname);

	return (
        <>
        <ContainerSearchBar hidden={isHidden}>
			<SearchBar onChange={e => handleChange(e.target.value)} className="input" type="text" placeholder=" search !"  defaultValue="" />
			<SearchLink onClick={startSearch} className="link">
				<FontAwesomeIcon className="icon" icon={faSearch} />
			</SearchLink>
		</ContainerSearchBar>
        </>
		
	);
}

export default SearchNavBar;
