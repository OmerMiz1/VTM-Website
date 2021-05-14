import React from 'react';

import {VeiwSummaryHeaderContainer, VeiwSummaryH1,
    LinksContainer, VideoLink} from '.././VeiwSummary.style';

import AttributText from '../../../../components/atoms/Texts/AttributText';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';


function HeaderSection({viewSummary}) {
    return (
        <VeiwSummaryHeaderContainer>
            <VeiwSummaryH1>{viewSummary.title}</VeiwSummaryH1>
                <AttributText attribution='Create By'
                    textValue={viewSummary.autorName}></AttributText>
            <LinksContainer>
                <VideoLink href={viewSummary.url} target="_blank" rel="noopener noreferrer">Link to Video!</VideoLink>
                <ListOfButtonsTags>
                    {viewSummary.tags.map((tag, index) => {
                        return(
                            <TagsButton key={index} keyId={index} text={tag}
                            link={'/myHome/mySummaries/filter/tags/' + tag } />
                        );
                    })}
                </ListOfButtonsTags>
            </LinksContainer>
        </VeiwSummaryHeaderContainer>
    )
}

export default HeaderSection
