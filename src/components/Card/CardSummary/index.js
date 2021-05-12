import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faHeart, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {stringLength} from '../../../utils/function/Strings';

import DropDownSummary from '../../DropDown/DropDownSummay';
import CardSummaryLogic from './CardSummary.logic'

import {CradContainer, TopContainer, CardH1, CardImgContainer, IconContaner,
     DetailsContainer, Taglist, TagItem,DateSection, CradLink, LinkTag,
     BottomContainer, RatingContainer, AutorContainer, CreateBy,
     DateContainer, LeftContainer, CardTextInput} from './CardSummary.style';



function CardSummary(props) {
    const {summaryId ,imgUrl, title, createdTime,
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
                        <CreateBy>Last Change:</CreateBy>
                        <CardTextInput color='black'>{editTime}</CardTextInput>
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
                <AutorContainer>
                    <CreateBy>Create By</CreateBy>
                    <CardTextInput>{autorName}</CardTextInput>
                </AutorContainer>
            </BottomContainer>
        </CradContainer>
        )
}

export default CardSummary
