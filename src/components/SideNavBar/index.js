import React from 'react';
import NavBarLogic from '../Navbar/Navbar.logic';

import {SideBarContainer, SideBarList, SideBarItem, NavMenu, TitleItem, SpanSideBar } from './SideNavBar.style';

import {DataOperations} from './SideBar.data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';


function SideNavBar() {
    const {clickedOnMenu, toggleMenuClicked, closeMobileMenu, useOutsideCloseMenu ,wrapperRef} = NavBarLogic();
    // onclick out of the var hide the vbar
    useOutsideCloseMenu(wrapperRef);


    return (
        <SideBarContainer ref={wrapperRef}>
            <NavMenu onClick={toggleMenuClicked}>
                {clickedOnMenu ? <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBars}/>}
            </NavMenu>
            <SideBarList active={clickedOnMenu}>
                {DataOperations.map((item, index)=>{ 
                    return (
                        
                    <SideBarItem key={index} onClick={closeMobileMenu}>
                        {index === 4 ? <SpanSideBar>{item.spanText}</SpanSideBar> :
                        <FontAwesomeIcon className='icon' key={index} icon={item.icon}></FontAwesomeIcon> 
                        }
                        {index === 4 ? <></> :
                         <TitleItem>{item.title}</TitleItem> }
     
                    </SideBarItem>
                    
                    );
                })}
            </SideBarList >
        


        </SideBarContainer>
        
    )
}

export default SideNavBar
