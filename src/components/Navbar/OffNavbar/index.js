import React, {useState} from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';

import {NavbarSection, NavLogoContainer, NavMenu,
    NavLeftList, NavRightList,  NavItem, NavLink } from '../Navbar.style';
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';



function OffNavBar(props) {
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
                    <NavLink onClick={closeMobileMenu} to='/' useTransparent={useTransparent}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={closeMobileMenu} to='/About' useTransparent={useTransparent}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={closeMobileMenu} to='/GetStart' useTransparent={useTransparent}>Get Start</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={closeMobileMenu} to='/Download' useTransparent={useTransparent}>Downloads</NavLink>
                </NavItem>     
            </NavLeftList>

            <NavRightList position='end' width='auto'>
            <NavItem>
                <NavLink to='/access/login' useTransparent={useTransparent}>Log In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/access/signup' useTransparent={useTransparent}>Sign Up</NavLink>
            </NavItem>
            </NavRightList>

        </NavbarSection>
    )
}

export default OffNavBar
