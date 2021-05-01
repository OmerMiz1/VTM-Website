import React from 'react';
import NavBarLogic from '../Navbar/Navbar.logic';

import {SideBarContainer, SideBarList, SideBarItem, NavMenu, TitleItem, SpanSideBar } from './SideNavBar.style';

import {DataOperations} from './SideBarData';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';


function SideNavBar() {
    const {clickedOnMenu, toggleMenuClicked, closeMobileMenu } = NavBarLogic()

    return (
        <SideBarContainer>
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
