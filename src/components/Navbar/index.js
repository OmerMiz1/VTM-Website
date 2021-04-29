import React from 'react';
import {Navbar, NavLink, NavSectionContent, NavIcon} from './Navbar.style';
import BrandLogo from '../BrandLogo';


function NavBar(props) {

    const {useTransparent} = props;

    return (
        <Navbar useTransparent={useTransparent}>
            <NavSectionContent>
                <NavIcon>
                    <BrandLogo size={40} color='#fff'></BrandLogo>
                </NavIcon>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/GetStart'>Get Start</NavLink>
                <NavLink to='/Download'>Downloads</NavLink>
            </NavSectionContent>
            <NavSectionContent float="right" marginTop="9px">
                <NavLink to='/access/login'>Log In</NavLink>
                <NavLink to='/access/signup'>Sign Up</NavLink>
            </NavSectionContent>
            
        </Navbar>
    
    )
}

export default NavBar
