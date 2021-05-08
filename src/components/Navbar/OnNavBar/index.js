import React from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';
import SearchNavBar from '../SearchNavBar';
import DropDownUser from '../../DropDown/DropDownUser';
import OnNavBarLogic from './OnNavBar.logic';

import {NavbarSection, NavLogoContainer, SeparatorLine,
    NavLeftList, NavRightList,  NavItem, NavLink} from '../Navbar.style'

import {DataLeftLinks, DataIcons} from './OnNavBar.data';
import ToolTip from '../../ToolTip'
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function NavBar(props) {
    const {useTransparent, PositionMarker} = props;
    const {clickedOnMenu, closeMobileMenu} = NavbarLogic()
    const {isUseDropDown, toggleUserDropDown, useOutsideCloseMenu,
        wrapperRef} = OnNavBarLogic();
    // close when click outside
    useOutsideCloseMenu(wrapperRef);


    return (
        <NavbarSection useTransparent={useTransparent}>
            <NavLogoContainer onClick={closeMobileMenu}>
                <BrandLogo size={40} color={useTransparent? '#fff' : 'black'}></BrandLogo>
            </NavLogoContainer>
            
            <NavLeftList active={clickedOnMenu}> 
            {DataLeftLinks(PositionMarker).map((item,index) => {
                return(
                    <NavItem key={index}>
                        <NavLink onClick={closeMobileMenu} to={item.link} border={item.boarder}
                            useTransparent={useTransparent}>{item.title}</NavLink>
                    </NavItem>
                    )
                })}
            
            </NavLeftList>
            

        
            <NavRightList position='end' width='auto'>
            <NavItem>
                <SearchNavBar/>
            </NavItem>
            
                {DataIcons().map((item, index) => {
                        return (
                            <NavItem key={index}>
                                    <ToolTip toolTipText={item.toolTipText}>
                                        { item.separator ?
                                        <SeparatorLine ref={wrapperRef}>
                                            <FontAwesomeIcon onClick={ toggleUserDropDown} icon={item.icon}/>
                                            {isUseDropDown && <DropDownUser summaryId={1}/>}
                                        </SeparatorLine>:
                                        <FontAwesomeIcon onClick={() => item.function(item.toolTipText)} icon={item.icon}/>
                                        }
                                    </ToolTip>
                            </NavItem>
                        );
                })}
            </NavRightList>
        </NavbarSection>
    
    )
}

export default NavBar

