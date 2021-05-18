import React from 'react';

import {VeiwSummaryHeaderContainer, VeiwSummaryH1,
    LinksContainer, VideoLink} from '.././VeiwSummary.style';

import AttributText from '../../../../components/atoms/Texts/AttributText';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';

import HeaderIconsData, { EditIcons} from './HeaderIcons.data';
import Icon from '../../../../components/atoms/Icon';
import IconContainer from '../../../../containers/IconContainer';

function HeaderSection({viewSummary , mode}) {

    const IconData = HeaderIconsData(mode)

    return (
        <VeiwSummaryHeaderContainer>
            <VeiwSummaryH1>{viewSummary.title}</VeiwSummaryH1>
                {
                    mode.mode === 'edit' &&
                    <Icon color={ EditIcons.pen.color} icon={ EditIcons.pen.icon}
                     funOnClick={() => EditIcons.pen.function( EditIcons.pen.title)}/>
                }
                <AttributText attribution='Create By'
                    textValue={viewSummary.autorName}></AttributText>
            <LinksContainer>
                <VideoLink href={viewSummary.url} target="_blank" rel="noopener noreferrer">Link to Video!</VideoLink>
                <ListOfButtonsTags>
                    {viewSummary.tags.map((tag, index) => {
                        return(
                            <TagsButton key={index} keyId={index} text={tag} editMode={mode.mode}
                            link={mode.mode === 'edit' ? '#' : '/myHome/mySummaries/filter/tags/' + tag } />
                        );
                    })}
                {
                    mode.mode === 'edit' &&
                    <Icon color={ EditIcons.plus.color} icon={ EditIcons.plus.icon}
                     funOnClick={() => EditIcons.plus.function( EditIcons.plus.title)}/>
                }
                </ListOfButtonsTags>
                <IconContainer justContent="flex-end">
                    {IconData.map((data, index) => {
                        return(
                            <Icon key={index} margin={data.margin} funOnClick={ () => data.function(data.title)}
                            color={data.color} icon={data.icon}/>
                        )
                    })
                    }
                </IconContainer>
            </LinksContainer>
        
        </VeiwSummaryHeaderContainer>
    )
}

export default HeaderSection
