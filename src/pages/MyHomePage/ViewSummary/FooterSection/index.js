import React from 'react';
import { ViewSummaryFooter, SpaceAroundContainer } from '../ViewSummary.style'
import AuthorName from '../../../../components/atoms/Texts/AttributeText';

function FooterSection({ viewSummary }) {
	return (
		<ViewSummaryFooter>
			<SpaceAroundContainer >
				<AuthorName attribution='Created:'
					textValue={viewSummary.createTime} color='black'></AuthorName>

				<AuthorName attribution='Modified:'
					textValue={viewSummary.editTime} color='black'></AuthorName>
			</SpaceAroundContainer>
		</ViewSummaryFooter>
	)
}

export default FooterSection;