import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NotFound404Containers = styled.section`
    display: block;
    text-align:center;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const NotFound404H1 = styled.h1`
    color: black;
    font-size: ${props => props.theme.fontSizes.header};
    font-weight: 800;
    margin: 10px, 0px;
`;

export const NotFound404Link = styled(Link)`
    color: rgb(30,138,255);
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 800;
`;