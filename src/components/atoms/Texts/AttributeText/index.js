import React from 'react';
import styled from 'styled-components';

const TextValue = styled.div`
    margin-left: 3px;
    color: ${({ color }) => color ? color : 'green'};
    font-weight: 800;
`;

const AttributeText = styled.p`
    margin: 0;
    color: rgb(161, 161, 161);
    font-weight: 400;

`;

export const AuthorNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

function AuthorName({ attribution, textValue, color }) {
	return (
		<authorNameContainer>
			<AttributeText>{attribution}</AttributeText>
			<TextValue color={color}>{textValue}</TextValue>
		</authorNameContainer>
	)
}

export default AuthorName;
