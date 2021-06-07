import React from 'react';

import { ViewSummaryFooter, SpaceAroundContainer } from '../VeiwSummary.style'

import AuthorName from '../../../../components/atoms/Texts/AttributeText';

function FooterSection({ viewSummary }) {
	return (
		<ViewSummaryFooter>
			<SpaceAroundContainer >
				<authorName attribution='Create At:'
					textValue={viewSummary.createdTime} color='black'></authorName>

				<authorName attribution='Last Change:'
					textValue={viewSummary.editTime} color='black'></authorName>
			</SpaceAroundContainer>
		</ViewSummaryFooter>
	)
}

export default FooterSection
