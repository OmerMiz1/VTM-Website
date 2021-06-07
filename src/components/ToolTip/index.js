import React from "react";
import styled from "styled-components";

const ToolTipText = styled.span` 
    visibility: hidden;
    width: fit-content;
    font-size: ${props => props.theme.fontSizes.small};
    background-color: #000;
    color: #fff;
    border-radius: 6px;
    text-align: center;
    padding: 5px 8px;
    z-index: 1;

    position: absolute;
    left: 40px;
    margin-left: -60px;
    top: 35px;

`;

const ToolTipContainer = styled.div`
    display: inline-block;
    position: relative;


    &:hover span {
        visibility: visible;
    };
`

const ToolTip = ({ children, toolTipText }) => (
	<ToolTipContainer>
		{children}
		<ToolTipText>{toolTipText}</ToolTipText>
	</ToolTipContainer>
);

export default ToolTip;
