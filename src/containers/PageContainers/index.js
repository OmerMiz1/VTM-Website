import React from 'react'
import { PageWrapper } from './PageContainers.style'


function PageContainer({children}) {
	return (
		<PageWrapper>{children}</PageWrapper>
	)
}

export default PageContainer;
