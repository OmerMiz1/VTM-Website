import styled, {css} from 'styled-components';

export const SideBarContainer = styled.section`
    height: 100vh;
    max-width: 1128px;
    background-color: #fff;
    box-sizing: content-box;
    grid-column: span 2;
    /* border-right: 1px solid black; */   
`;

export const SideBarList = styled.ul`
    width:100%;
    height:auto;
    padding: 0;

    @media screen and (max-width: 750px) {
        width: 75%;
        /* height: 90vh; */
        position: absolute;
        top: 65px;
        left: -100%;
        opacity: 1;
        transition: all 1s ease;

        ${({active}) => active && css`
            background: #fff;
            left: 0;
            transition: all 1s ease;

        `};
    };
`;

export const SideBarItem = styled.li`
    display:flex;
    width:100%;
    height:50px;
    list-style-type: none;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin:0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    &:hover {
        cursor: pointer;
        background-color: #eee;

    }

    .icon{
        flex: 30%;
        display: grid;
        place-items: center;
        font-size: ${props=> props.theme.fontSizes.nav};     
    }

    & h2 {
        flex: 70%;
        display: grid;
        place-items: left;
    }
`;

export const TitleItem = styled.h2`
    font-size: 100%;
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

export const SpanSideBar = styled.span`
    font-size: ${props=> props.theme.fontSizes.medium};
    display:flex;
    width:100%;
    height:50px;
    list-style-type: none;
    align-items: center;
    flex-direction: row;
    justify-content: left;
    padding-left: 5%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    &:hover {
        cursor: default;
        background-color: #fff;

    }
    @media screen and (max-width: 750px) {
        width: 100%;

    }
`
