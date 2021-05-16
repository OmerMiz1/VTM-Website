import React from 'react';

import {ViewSummaryFooter, SpaceAroundContainer} from '../VeiwSummary.style'

import AttributText from '../../../../components/atoms/Texts/AttributText';

function FooterSection({viewSummary}) {
    return (
        <ViewSummaryFooter>
            <SpaceAroundContainer >
                <AttributText attribution='Create At:'
                    textValue={viewSummary.createdTime} color='black'></AttributText>

                <AttributText attribution='Last Change:'
                    textValue={viewSummary.editTime} color='black'></AttributText>
            </SpaceAroundContainer>
        </ViewSummaryFooter>
    )
}

export default FooterSection
