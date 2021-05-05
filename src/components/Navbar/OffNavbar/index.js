import React from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';

import {NavbarSection, NavLogoContainer, NavMenu,
    NavLeftList, NavRightList,  NavItem, NavLink } from '../Navbar.style';

import {DataLinks, DataRightLinks} from './OffNavBarData'
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';


function OffNavBar(props) {
    const {useTransparent} = props;
    const {clickedOnMenu, toggleMenuClicked,
        closeMobileMenu, useOutsideCloseMenu ,wrapperRef} = NavbarLogic()

    // onclick out of the var hide the vbar
    useOutsideCloseMenu(wrapperRef);


    return (
        <NavbarSection useTransparent={useTransparent} ref={wrapperRef}>
            <NavLogoContainer onClick={closeMobileMenu}>
                <BrandLogo size={40} color={useTransparent? '#fff' : 'black'}></BrandLogo>
            </NavLogoContainer>
            <NavMenu onClick={toggleMenuClicked} useTransparent={useTransparent}>
                {clickedOnMenu ? <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBars}/>}
            </NavMenu>

            <NavLeftList active={clickedOnMenu} useTransparent={useTransparent}>
                {DataLinks.map((item, index) => {
                    return(
                        <NavItem key={index}>
                            <NavLink onClick={closeMobileMenu} to={item.link}
                             useTransparent={useTransparent}>{item.title}</NavLink>
                        </NavItem>
                    )
                })}    
            </NavLeftList>

            <NavRightList position='end' width='auto'  onClick={closeMobileMenu}>
                {DataRightLinks.map((item, index) => {
                    return (
                        <NavItem key={index}>
                            <NavLink to={item.link} useTransparent={useTransparent}>{item.title}</NavLink>
                        </NavItem>
                    );
                })}
            </NavRightList>

        </NavbarSection>
    )
}

export default OffNavBar
