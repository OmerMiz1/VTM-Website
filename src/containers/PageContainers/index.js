import React from 'react'
import { PageWrapper } from './PageContainers.style'


function PageContainer(props) {
	return (
		<PageWrapper>{props.children}</PageWrapper>
	)
}
export default PageContainer
