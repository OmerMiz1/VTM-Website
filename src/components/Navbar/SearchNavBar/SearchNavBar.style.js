import styled, { css } from 'styled-components';

export const SearchBar = styled.input`
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    font-weight: bold;

`;


export const StaticSearchBarInput = styled.input`
    border: none;
    background: #eee;
    outline: none;
    float: left;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 240px;
    font-weight: bold;
    padding: 0 30px;
    font-weight: 600;

`;

export const ContainerSearchBar = styled.div`
    
    position: absolute;
    top:10px;
    z-index:10;
    float:left;
    display:flex;
    z-index: 1;
    /* top: 50%;
    left: 50%; */
    transform: translate(-100%, 0%);
    background: ${(props) => props.theme.colors.secondLite};
    height: 40px;
    border-radius: 40px;
    padding: 0;
    opacity: 1;
    /* transition: visibility 0s, opacity 0.5s linear; */

    
    ${({ hidden }) => hidden && css`
        visibility: hidden ;
        z-index: 0;
        opacity: 0;

    `};
    
   
    
    &:hover {
        & .input {
            width: 240px;
            padding: 0 30px;
            font-weight: 600;

        };

        & .link {
            background: #eee;
            color:${(props) => props.theme.colors.second};
        };

    };

    input:not(:placeholder-shown) {
        width: 240px;
        padding: 0 30px;
        font-weight: 600;
    }
    
`;

export const ContainerStaticSearchBar = styled.div`
    float:right;
    display:flex;
    margin:20px;
    z-index: 1;
    /* top: 50%;
    left: 50%; */
    background: #eee;
    height: 40px;
    border-radius: 40px;
    padding: 0;
    opacity: 1;
    /* transition: visibility 0s, opacity 0.5s linear; */

`;


export const SearchLink = styled.a`
    color: #e84118;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.second};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    color: white;
    cursor: pointer;

    &:icon {
        color:white;
        font-size: 30px;
    }
   
`;

export const StaticSearchLink = styled.a`
    color: #e84118;
    width: 40px;
    height: 40px;
    /* background: ${(props) => props.theme.colors.second}; */
    background: #7f7676;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    color: white;
    cursor: pointer;

    &:icon {
        color:white;
        font-size: 30px;
    }
   
`;
