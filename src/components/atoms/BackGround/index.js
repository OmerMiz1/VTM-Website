import React from 'react';
import styled from 'styled-components';

const BackGroundComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({color}) => color ? color : 'rgba(0, 0, 0, .7)'};
    z-index: 1000;
`;


function BackGround({color}) {
    return (
        <BackGroundComponent color={color}/> 
    )
}

export default BackGround
