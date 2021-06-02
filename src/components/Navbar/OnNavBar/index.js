import React from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';
import SearchNavBar from '../SearchNavBar';
import DropDownUser from '../../DropDown/DropDownUser';
import OnNavBarLogic from './OnNavBar.logic';

import {NavbarSection, NavLogoContainer, SeparatorLine,
    NavLeftList, NavRightList,  NavItem, NavLink} from '../Navbar.style'

import OnNavBarData, {DataLeftLinks} from './OnNavBar.data';
import ToolTip from '../../ToolTip'
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


//TODO DELETE:
import AddForm from '../../../components/atoms/Forms/AddForm';


function NavBar(props) {
    const {usetransparent, PositionMarker} = props;
    const {clickedOnMenu, closeMobileMenu} = NavbarLogic()
    const {isUseDropDown, toggleUserDropDown, useOutsideCloseMenu,
        wrapperRef} = OnNavBarLogic();
    // close when click outside
    useOutsideCloseMenu(wrapperRef);

    const {DataIcons, showForm , toggleShow} = OnNavBarData();

    return (
        <NavbarSection usetransparent={usetransparent}>
            <NavLogoContainer onClick={closeMobileMenu}>
                <BrandLogo size={40} color={usetransparent? '#fff' : 'black'}></BrandLogo>
            </NavLogoContainer>
            
            <NavLeftList active={clickedOnMenu}> 
            {DataLeftLinks(PositionMarker).map((item,index) => {
                return(
                    <NavItem key={index}>
                        <NavLink onClick={closeMobileMenu} to={item.link} border={item.boarder}
                            usetransparent={usetransparent}>{item.title}</NavLink>
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
                                        <SeparatorLine ref={wrapperRef}>
                                            <FontAwesomeIcon onClick={ toggleUserDropDown} icon={item.icon}/>
                                            {isUseDropDown && <DropDownUser close={toggleUserDropDown} />}
                                        </SeparatorLine>:
                                        <>
                                            <FontAwesomeIcon onClick={() => item.function()} icon={item.icon}/>
                                            { item.toolTipText === 'Add' && showForm && <AddForm close={toggleShow}/>}
                                        </>
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

