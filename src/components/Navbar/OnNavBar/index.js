import React from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';
import SearchNavBar from '../SearchNavBar';

import {NavbarSection, NavLogoContainer, SeparatorLine,
    NavLeftList, NavRightList,  NavItem, NavLink} from '../Navbar.style'

import {DataLeftLinks, DataIcons} from './OnNavBar.data';
import ToolTip from '../../ToolTip'
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function NavBar(props) {
    const {useTransparent} = props;
    const {clickedOnMenu, closeMobileMenu} = NavbarLogic()

    return (
        <NavbarSection useTransparent={useTransparent}>
            <NavLogoContainer onClick={closeMobileMenu}>
                <BrandLogo size={40} color={useTransparent? '#fff' : 'black'}></BrandLogo>
            </NavLogoContainer>
            
            <NavLeftList active={clickedOnMenu}> 
            {DataLeftLinks.map((item,index) => {
                return(
                    <NavItem key={index}>
                        <NavLink onClick={closeMobileMenu} to={item.link}
                            useTransparent={useTransparent}>{item.title}</NavLink>
                    </NavItem>
                    )
                })}
            
            </NavLeftList>
            

        
            <NavRightList position='end' width='auto'>
            <NavItem>
                <SearchNavBar/>
            </NavItem>
            
                {DataIcons.map((item, index) => {
                        return (
                            <NavItem key={index}>
                                    <ToolTip toolTipText={item.toolTipText}>
                                        { item.separator ?
                                        <SeparatorLine>
                                            <FontAwesomeIcon onClick={closeMobileMenu} icon={item.icon}/>
                                        </SeparatorLine>:
                                        <FontAwesomeIcon onClick={closeMobileMenu} icon={item.icon}/>
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

