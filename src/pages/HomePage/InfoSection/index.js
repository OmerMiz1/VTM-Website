import React from 'react'
import {InfoSectionContainer, InfoSectionContent, InfoSectionH1,
    InfoRow ,InfoItem, InfoP} from './InfoSection.style'

import Illustration from '../../../components/Illustration'

import IllustrationOrganizationData from '../../../images/illustrations/Organization_data.png'
import IllustrationTackingNote from '../../../images/illustrations/Tacking_note1.png'
import IllustrationMassesWisdom from '../../../images/illustrations/MassesWisdom.png'
import IllustrationSendSummarys from '../../../images/illustrations/SendSummarys.png'


// TODO
function InfoSection() {
    return (
        <InfoSectionContainer>
            <InfoSectionH1>What do we give?</InfoSectionH1>
            <InfoSectionContent>
                    <InfoItem>
                        <Illustration src={IllustrationTackingNote} size="150"></Illustration>
                        <InfoP>A simple and easy option for summarizing videos</InfoP>        
                    </InfoItem>
                    <InfoItem>
                        <Illustration src={IllustrationOrganizationData} size="150"></Illustration>

                        <InfoP>Manage and organize your videos and summaries in one place</InfoP>        
                    </InfoItem>

                    <InfoItem>
                      <Illustration src={IllustrationMassesWisdom} size="150"></Illustration>

                        <InfoP>Learning from the wisdom of the masses</InfoP>        
                    </InfoItem>
                    <InfoItem>
                    <Illustration src={IllustrationSendSummarys} size="150"></Illustration>
                        <InfoP>Share your summaries with friends</InfoP>        
                    </InfoItem>
            </InfoSectionContent>
        </InfoSectionContainer>
    )
}

export default InfoSection
