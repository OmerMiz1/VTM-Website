import React from 'react';
import { StaticSearchLink, ContainerStaticSearchBar, StaticSearchBarInput } from './SearchNavBar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StaticSearchNavBarLogic from './StaticSearchNavBar.logic';


function StaticSearchBar({setUrlSearchText}) {
	const { handleChange, startSearch } = StaticSearchNavBarLogic(setUrlSearchText);
    
	return (
        <>
        <ContainerStaticSearchBar>
			<StaticSearchBarInput onChange={e => handleChange(e.target.value)} className="input" type="text" placeholder="search by URL"  defaultValue="" />
			<StaticSearchLink onClick={startSearch}  className="link">
			{/* <SearchLink onClick={startSearch} className="link"> */}
				<FontAwesomeIcon className="icon" icon={faSearch} />
			</StaticSearchLink>
		</ContainerStaticSearchBar>
        </>
		
	);
}

export default StaticSearchBar;
