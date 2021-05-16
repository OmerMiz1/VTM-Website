import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faHeart, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {stringLength} from '../../../utils/function/Strings';

import DropDownSummary from '../../DropDown/DropDownSummay';
import CardSummaryLogic from './CardSummary.logic';
import AttributText from '../../atoms/Texts/AttributText';

import {CradContainer, TopContainer, CardH1, CardImgContainer, IconContaner,
     DetailsContainer, Taglist, TagItem,DateSection, CradLink, LinkTag,
     BottomContainer, RatingContainer,
     DateContainer, LeftContainer} from './CardSummary.style';



function CardSummary(props) {
    const {summaryId ,imgUrl, title,
        editTime, likes, autorName, url, tags, favorite} = props;

    // all the component logic
    const {isDropDown, toggleDropDown,
        useOutsideCloseMenu, wrapperRef,
        toggleIsFavorite, isFavorite} = CardSummaryLogic(favorite);

    // close when click outside
    useOutsideCloseMenu(wrapperRef);

    return (
        <CradContainer>
            <CradLink>
                <TopContainer>
                    <CardH1 href={url} target="_blank" rel="noopener noreferrer">{title}</CardH1>
                    <IconContaner favorite={isFavorite}>
                        <FontAwesomeIcon onClick={() => toggleIsFavorite(summaryId)} icon={faStar}/>
                    </IconContaner>
                
                </TopContainer>
                <CardImgContainer href={url} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} alt={title}></img>
                </CardImgContainer>
            </CradLink>
            <DetailsContainer>
                <Taglist>
                    {tags.filter((_, i) => i < 4 ).map((tag, index) => {
                        if (index === 3) {
                            tag = ' ... ';
                        }
                        return (
                            <LinkTag key={index} to={ tag === ' ... ' ? '/myHome/mySummaries/myTags' :
                            '/myHome/mySummaries/filter/tags/' + tag }>
                                <TagItem>{stringLength(tag, 10, true)}</TagItem>
                            </LinkTag>
                        )
                    })}
                </Taglist>

                <DateSection >
                    <DateContainer>
                        <AttributText attribution='Last Change'
                         textValue={editTime} color ='black'></AttributText>
                        <LeftContainer ref={wrapperRef}>
                            <FontAwesomeIcon onClick={toggleDropDown} icon={faEllipsisV}/>
                            {isDropDown && <DropDownSummary summaryId={summaryId}/>}

                        </LeftContainer>
                    </DateContainer>

                </DateSection>
            </DetailsContainer>
            <BottomContainer>
                <RatingContainer>
                   <FontAwesomeIcon icon={faHeart} size="sm" />
                   {likes}
                </RatingContainer>
                    <AttributText attribution='Create By'
                    textValue={autorName}></AttributText>
            </BottomContainer>
        </CradContainer>
        )
}

export default CardSummary
