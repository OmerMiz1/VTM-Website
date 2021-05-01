import React, {useState} from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';

import {NavbarSection, NavLogoContainer, NavMenu,
    NavLeftList, NavRightList,  NavItem, NavLink } from '../Navbar.style'

// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars, faSearch, faPlus, faUser} from '@fortawesome/free-solid-svg-icons'


function NavBar(props) {
    const {useTransparent} = props;
    const {clickedOnMenu, toggleMenuClicked, closeMobileMenu,  } = NavbarLogic()

    return (
        <NavbarSection useTransparent={useTransparent}>
            <NavLogoContainer onClick={closeMobileMenu}>
                <BrandLogo size={40} color={useTransparent? '#fff' : 'black'}></BrandLogo>
            </NavLogoContainer>
            <NavMenu onClick={toggleMenuClicked} useTransparent={useTransparent}>
                {clickedOnMenu ? <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBars}/>}
            </NavMenu>
            <NavLeftList active={clickedOnMenu}> 
                <NavItem>
                    <NavLink onClick={closeMobileMenu} to='/GetStart' useTransparent={useTransparent}>Get Start</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={closeMobileMenu} to='/GetStart' useTransparent={useTransparent}>My Summaries</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={closeMobileMenu} to='/Download' useTransparent={useTransparent}>Discover</NavLink>
                </NavItem>
            </NavLeftList>

            <NavRightList position='end' width='auto'>
                <NavItem >
                    <FontAwesomeIcon onClick={closeMobileMenu} icon={faSearch}/>
                </NavItem>
                <NavItem>
                    < FontAwesomeIcon onClick={closeMobileMenu} icon={faPlus}/>                
                </NavItem>
                <NavItem>
                    <FontAwesomeIcon onClick={closeMobileMenu} icon={faUser}/>                
                </NavItem>
            </NavRightList>
        </NavbarSection>
    
    )
}

export default NavBar

