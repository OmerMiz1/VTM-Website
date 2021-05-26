import React from 'react';
import {SearcLink, ContainerSearchBar, SearchBar} from './SearchNavBar.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import SearchNavBarLogic from './SearchNavBar.logic';


function SearchNavBar() {


    const {handelChnge, startSearch, isHidden} = SearchNavBarLogic();

    return (
        <ContainerSearchBar hidden={isHidden}>
            <SearchBar onChange={e => handelChnge(e.target.value)} className="input" type="text" placeholder=" search !" />
            <SearcLink onClick={startSearch} className="link">
                <FontAwesomeIcon  className="icon" icon={faSearch}/>
            </SearcLink>
        </ContainerSearchBar>
    )
}

export default SearchNavBar
