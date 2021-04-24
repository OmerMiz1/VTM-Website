import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

// navbar style
export const Navbar = styled.nav`
    background: transparent;
    height: 80px;
    width:100%;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;


// link style
export const NavLink = styled(Link)`
    color:#fff;
    font-size: 2rem;
    display: flex;
    align-items:center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 20px;

    // for small screen:
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top:10px;
    left:20px;
    cursor: pointer;
    color: #fff;

    p {
        /* transform: translate(-175%, 100%); */
        font-weight: bold;
        color:red
    }
`;





