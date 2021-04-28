import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

// navbar style
export const Navbar = styled.nav`
    /* background: transparent; */
    background-color: ${({useTransparent}) => useTransparent? 'transparent': '#B3B7C8'};
    height: 65px;
    width:100%;
    display: block;
    /* justify-content: space-between; */
    padding: 0, 1.25rem;

    

`;

export const NavIcon = styled.div`
    cursor: pointer;
    color: #fff;
    margin: 8px 4px;

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
    margin-right: 22px;


    
`
// link style
export const NavLink = styled(Link)`
    color: #efefef;
    font-size: 20px;
    display: flex;
    align-items:center;
    text-decoration: none;
    cursor: pointer;
    margin: 4px 0px 0px 20px;
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


