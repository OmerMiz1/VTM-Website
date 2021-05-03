import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import {CradContainer, TopContainer, CardH1, CardImgContainer,
     DetailsContainer, Taglist, TagItem,DateSection, CradLink,
     BottomContainer, RatingContainer, AutorContainer, CreateBy,
     DateContainer, LeftContainer,
     CardTextInput} from './CardSummary.style'



function CardSummary(props) {

    const {imgUrl, title, createdTime, editTime, likes, autorName, url, tags} = props;
    console.log(`tags`, tags);
    return (
        <CradContainer>
            <CradLink href={url} target="_blank" rel="noopener noreferrer">
                <TopContainer>
                    <CardH1>{title}</CardH1>
                </TopContainer>
                <CardImgContainer>
                    <img src={imgUrl} alt={title}></img>
                </CardImgContainer>
            </CradLink>
            
            <DetailsContainer>
                <Taglist>
                    {tags.map((tag, index) => {
                        return (
                            <TagItem key={index}>{tag}</TagItem>
                        )
                    })}
                </Taglist>
                <DateSection>
                    <DateContainer>
                        <CreateBy>Last Change:</CreateBy>
                        <CardTextInput color='black'>{editTime}</CardTextInput>
                        <LeftContainer>
                            <FontAwesomeIcon icon={faEllipsisV}/>
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
