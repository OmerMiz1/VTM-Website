import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ListOfButtonsTags = styled.ul`
    list-style-type: none;
    margin: ${({ margin }) => margin ? margin : '0'};
    padding: 0;

`

export const ItemButtonTag = styled.li`
    display: inline-block;
    margin: ${(props) => props.theme.spacers.small};
    list-style-type: none;
    text-align: -webkit-match-parent;
`;


export const ButtonTag = styled.button`
    width: 100%;
    cursor: pointer;
    padding: ${({ padding }) => padding ? padding : "5px 10px"};
    background: none;
    color: black;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 600;
    line-height: 1;
    border: 1.5px solid;
    border-color: ${(props) => props.theme.colors.gray};
    border-radius: 30px;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;

    &:hover {
        border-color: ${(props) => props.theme.colors.second};
        background-color: ${(props) => props.theme.colors.secondLite};
    }
`;

export const LinkTag = styled(Link)`
    display: block;
    color: gray;
    cursor: pointer;
    list-style-type: none;
`;