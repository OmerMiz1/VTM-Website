import React from 'react';
import { ViewSummaryFooter, SpaceAroundContainer } from '../ViewSummary.style'
import AuthorName from '../../../../components/atoms/Texts/AttributeText';
import { TimeStringFormat } from '../../../../utils/function/TimeFormat';


function FooterSection({ viewSummary }) {
	return (
		<ViewSummaryFooter>
			<SpaceAroundContainer >
				<AuthorName attribution='Created:'
					textValue={TimeStringFormat(viewSummary.createTime)} color='black'></AuthorName>

				<AuthorName attribution='Modified:'
					textValue={TimeStringFormat(viewSummary.editTime)} color='black'></AuthorName>
			</SpaceAroundContainer>
		</ViewSummaryFooter>
	)
}

export default FooterSection;