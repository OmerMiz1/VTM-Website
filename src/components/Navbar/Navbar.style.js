import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

// navbar style
export const Navbar = styled.nav`
    background: transparent;
    height: 65px;
    width:100%;
    display: block;
    /* justify-content: space-between; */
    padding: 0, 1.25rem;
    

`;

export const NavIcon = styled.div`
    /* display: flex; */
    /* position: absolute; */
    /* top:10px;
    left:20px; */
    cursor: pointer;
    color: #fff;

    p {
        /* transform: translate(-175%, 100%); */
        font-weight: bold;
        color:red
    }
`;

export const NavSectionContent = styled.section`
    display: flex;
    font-weight: 600;
    float: ${({float}) => float ? float: "left"};
    margin-top: ${({ marginTop}) => marginTop ? marginTop: "0px"};
    margin-right: 10px;


    
`
// link style
export const NavLink = styled(Link)`
    color:#fff;
    font-size: 20px;
    display: flex;
    align-items:center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 20px;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: contrast(0.6)
    }

    // for small screen:
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;



