import React from 'react';
import styled from 'styled-components';

const TextValue = styled.div`
    margin-left: 3px;
    color: ${({color}) => color? color: 'green'};
    font-weight: 800;
`;

const AttributesText = styled.p`
    margin: 0;
    color: rgb(161, 161, 161);
    font-weight: 400;

`;

export const AttributeTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

function AttributeText({attribution, textValue, color}) {
    return (
        <AttributeTextContainer>
            <AttributesText>{attribution}</AttributesText>
            <TextValue color={color}>{textValue}</TextValue>
        </AttributeTextContainer>
    )
}

export default AttributeText