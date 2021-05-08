import styled, {css} from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

// NavbarSection style - color border display.. 
export const NavbarSection = styled.nav`
    justify-content: center;
    align-items: center;
    height: 65px;
    width:100%;
    display: flex;
    box-shadow: #fff;
    white-space: nowrap;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    border-bottom: 1px solid #d9d9d9;
   
    ${({useTransparent}) => useTransparent && css`
        background-color: transparent;
        border-bottom: none;
        box-shadow: none;
    `}
`;

// Nav Logo Container style - cursor and postion
export const NavLogoContainer = styled.div`
    cursor: pointer;
    justify-self: start;
    margin-left: ${props => props.theme.spacers.medium};

    
    @media screen and (max-width: 750px) {
        position: absolute;
        top: -6px;
        left: 0;
        transform: translate(25%, 50%);
    }
`;


export const NavMenu = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.icon};
    
    @media (max-width: 750px) {
        display: block;
        position: absolute;
        top: -6px;
        left: 40px;
        transform: translate(-100%, 60%);
        cursor: pointer;
        color: ${({useTransparent}) => useTransparent? '#dfdce2': 'black'};

    };
`

export const NavLeftList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: ${({width}) => width? width : '70vw'};
    justify-content: ${({position}) => position? 'position': 'start'};
    margin-right: ${props => props.theme.spacers.large};


    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* height: 90vh; */
        position: absolute;
        top: 65px;
        left: -100%;
        opacity: 1;
        transition: all 1s ease;

        ${({active}) => active && css`
            background: ${({useTransparent}) => useTransparent? 'rgba(113, 113, 114, 0.7)': 'rgba(238, 238, 238, 0.9)'};
            font-weight: 800;
            left: 0;
            opacity: 1;
            transition: all 1s ease;
            z-index: 1;
        `};
    };
`;

export const NavItem = styled.li`
    text-align: center;
    padding: 0px 5px;
    width: 100%;
    display: table;
    cursor: pointer;

`;

// link style
export const NavLink = styled(Link)`

    /* border-bottom: 2px solid #2C7CD4; */
    color: ${({useTransparent}) => useTransparent? '#efefef': 'black'};
    font-size: ${props => props.theme.fontSizes.nav};
    display: flex;
    text-decoration: none;
    cursor: pointer;
    margin: 4px 0px 0px 10px;
    transition: all 200ms ease-in-out;
    
    &:hover {
        filter: ${({useTransparent}) => useTransparent? 'contrast(2)': 'contrast(0.4)'};
        color:${props => props.theme.colors.main};

        border-bottom: 2px solid ${props => props.theme.colors.main};
        /* background-color: #FFFFFF; */
        /* opacity: 0.3; */
        /* border-radius: 22px; */
        transition: all 0.2s ease-out;
    };

    @media screen and (max-width: 750px) {
        /* color: red; */
        &:hover {
            background: none;
            border-bottom: none;

        }
    };
    
`;

export const NavRightList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 5px;
    list-style: none;
    text-align: center;
    width: ${({width}) => width? width : '80vw'};
    justify-content: ${({position}) => position? 'position': 'start'};
    margin-right: 2rem;

    
    font-size: ${props => props.theme.fontSizes.icon};
    color: black;

    @media screen and (max-width: 750px) {
        position: absolute;
        right: 0;

    };
`;


export const SeparatorLine = styled.div`
    border-left: 4px solid;
    border-color: ${({color}) => color? color: props => props.theme.colors.darkGray};
    padding-left: 10px;
`;



