import React from 'react';
import {Navbar, NavLink, NavSectionContent, NavIcon} from '../Navbar.style';
import BrandLogo from '../../BrandLogo';


function NavBar(props) {

    const {useTransparent} = props;

    return (
        <Navbar useTransparent={useTransparent}>
            <NavSectionContent>
                <NavIcon>
                    <BrandLogo size={40} color={useTransparent? '#fff' : 'black'}></BrandLogo>
                </NavIcon>
                <NavLink to='/' useTransparent={useTransparent}>Home</NavLink>
                <NavLink to='/About' useTransparent={useTransparent}>About</NavLink>
                <NavLink to='/GetStart' useTransparent={useTransparent}>Get Start</NavLink>
                <NavLink to='/Download' useTransparent={useTransparent}>Downloads</NavLink>
            </NavSectionContent>
            <NavSectionContent float="right" marginTop="9px">
                <NavLink to='/access/login' useTransparent={useTransparent}>Log In</NavLink>
                <NavLink to='/access/signup' useTransparent={useTransparent}>Sign Up</NavLink>
            </NavSectionContent>
            
        </Navbar>
    
    )
}

export default NavBar
