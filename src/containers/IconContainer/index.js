import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    justify-content: ${({ justContent }) => justContent ? justContent : 'center'};
    display:flex;
`


function IconContainer(props) {
	return (
		<Container justContent={props.justContent}>{props.children}</Container>
	)
}

export default IconContainer
