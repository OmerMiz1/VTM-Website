import React from 'react';
import styled from 'styled-components';

export const ListButtons = styled.ul`
    list-style-type: none;
    margin: ${({margin}) => margin ? margin : '0' };
    padding: 0;

`;

function ListOfButtonsTags(props) {
    return (
        <ListButtons margin={props.margin}>{props.children}</ListButtons>         
    )
}

export default ListOfButtonsTags
