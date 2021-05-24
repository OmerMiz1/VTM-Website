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
    const {usetransparent} = props;
    const {clickedOnMenu, toggleMenuClicked,
        closeMobileMenu, useOutsideCloseMenu ,wrapperRef} = NavbarLogic()

    // onclick out of the var hide the vbar
    useOutsideCloseMenu(wrapperRef);


    return (
        <NavbarSection usetransparent={usetransparent} ref={wrapperRef}>
            <NavLogoContainer onClick={closeMobileMenu}>
                <BrandLogo size={40} color={usetransparent? '#fff' : 'black'}></BrandLogo>
            </NavLogoContainer>
            <NavMenu onClick={toggleMenuClicked} usetransparent={usetransparent}>
                {clickedOnMenu ? <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBars}/>}
            </NavMenu>

            <NavLeftList active={clickedOnMenu} usetransparent={usetransparent}>
                {DataLinks.map((item, index) => {
                    return(
                        <NavItem key={index}>
                            <NavLink onClick={closeMobileMenu} to={item.link}
                             usetransparent={usetransparent}>{item.title}</NavLink>
                        </NavItem>
                    )
                })}    
            </NavLeftList>

            <NavRightList position='end' width='auto'  onClick={closeMobileMenu}>
                {DataRightLinks.map((item, index) => {
                    return (
                        <NavItem key={index}>
                            <NavLink to={item.link} usetransparent={usetransparent}>{item.title}</NavLink>
                        </NavItem>
                    );
                })}
            </NavRightList>

        </NavbarSection>
    )
}

export default OffNavBar
