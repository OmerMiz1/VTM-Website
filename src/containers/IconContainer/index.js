import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    justify-content: ${({ justContent }) => justContent ? justContent : 'center'};
    display:flex;
`

function IconContainer({justContent, children}) {
	return (
		<Container justContent={justContent}>{children}</Container>
	)
}

export default IconContainer;
