import React from 'react';
import {Navbar, NavLink, NavIcon} from './Navbar.style';
import BrandLogo from '../BrandLogo';


function index(props) {
    return (
        <>
            <Navbar>
                <NavIcon>
                    <BrandLogo size={60} color='#fff'></BrandLogo>
                </NavIcon>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/GetStart'>Get Start</NavLink>
                <NavLink to='/Downloads'>Downloads</NavLink>
            </Navbar>
        </>
    )
}

export default index
