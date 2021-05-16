import React from 'react';
import styled from 'styled-components';

const TextValue = styled.div`
    margin-left: 3px;
    color: ${({color}) => color? color: 'green'};
    font-weight: 800;
`;

const AttributsText = styled.p`
    margin: 0;
    color: rgb(161, 161, 161);
    font-weight: 400;

`;

export const AttributTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

function AttributText({attribution, textValue, color}) {
    return (
        <AttributTextContainer>
            <AttributsText>{attribution}</AttributsText>
            <TextValue color={color}>{textValue}</TextValue>
        </AttributTextContainer>
    )
}

export default AttributText
