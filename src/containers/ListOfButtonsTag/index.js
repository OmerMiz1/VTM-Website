import React from 'react';
import styled from 'styled-components';

export const ListButtons = styled.ul`
    list-style-type: none;
    margin: ${({ margin }) => margin ? margin : '0'};
    padding: 0;

`;

function ListOfButtonsTags({margin, children}) {
	return (
		<ListButtons margin={margin}>{children}</ListButtons>
	)
}

export default ListOfButtonsTags;
