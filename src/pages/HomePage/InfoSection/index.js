import React from 'react';
import {
	InfoSectionContainer, InfoSectionContent, InfoSectionH1,
	InfoItem, InfoP
} from './InfoSection.style';
import InfoData from './Info.data';
import Illustration from '../../../components/Illustration'


// InfoSection - container, header, imge and text //DELETEME
function InfoSection() {
	return (
		<InfoSectionContainer>
			<InfoSectionH1>What we provide</InfoSectionH1>
			<InfoSectionContent>
				{InfoData.map((data, index) => {
					return (
						<InfoItem key={index}>
							<Illustration key={index} src={data.img} size="150"></Illustration>
							<InfoP>{data.text}</InfoP>
						</InfoItem>
					)
				})}
			</InfoSectionContent>
		</InfoSectionContainer>
	)
}

export default InfoSection;