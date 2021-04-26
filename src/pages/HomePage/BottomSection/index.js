import React from 'react';
import {InfoSectionContainer, InfoSectionContent, InfoSectionH1,
     InfoItem, InfoP} from './InfoSection.style';
import {InfoData} from './data';
import Illustration from '../../../components/Illustration'


// InfoSection - container, header, imge and text  
function InfoSection() {
    return (
        <InfoSectionContainer>
            <InfoSectionH1>What do we give?</InfoSectionH1>
            <InfoSectionContent>
                {InfoData.map((data, index) => {
                    return(
                        <InfoItem>
                            <Illustration key={index} src={data.img} size="150"></Illustration>
                            <InfoP>{data.text}</InfoP>        
                        </InfoItem>
                    )
                })}
            </InfoSectionContent>
        </InfoSectionContainer>
    )
}

export default InfoSection
