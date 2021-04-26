import React from 'react';
import {Navbar, NavLink, NavSectionContent, NavIcon} from './Navbar.style';
import BrandLogo from '../BrandLogo';


function index(props) {
    return (
        <Navbar>
            <NavSectionContent>
                <NavIcon>
                    <BrandLogo size={40} color='#fff'></BrandLogo>
                </NavIcon>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/GetStart'>Get Start</NavLink>
                <NavLink to='/Downloads'>Downloads</NavLink>
            </NavSectionContent>
            <NavSectionContent float="right" marginTop="9px">
                <NavLink to='/GetStart'>LogIn</NavLink>
                <NavLink to='/Downloads'>SingIn</NavLink>
            </NavSectionContent>
            
        </Navbar>
    
    )
}

export default index