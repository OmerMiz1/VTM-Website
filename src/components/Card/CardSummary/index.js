import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { stringLength } from '../../../utils/function/Strings';
import DropDownSummary from '../../DropDown/DropDownSummay';
import CardSummaryLogic from './CardSummary.logic';
import AuthorName from '../../atoms/Texts/AttributeText';
import {
	CradContainer, TopContainer, CardH1, CardImgContainer, IconContainer,
	DetailsContainer, Taglist, TagItem, DateSection, CradLink, LinkTag,
	BottomContainer, RatingContainer,
	DateContainer, LeftContainer
} from './CardSummary.style';
import { TimeStringFormat } from '../../../utils/function/TimeFormat';
// import SummaryApi from '../../../api/Summary';


function CardSummary(props) {
	const { sid, imgUrl, title, editTime, likes,
        authorName, url, tags, favorite, page, toggleLike } = props;
	
	// all the component logic
	const { isDropDown, toggleDropDown,
		useOutsideCloseMenu, wrapperRef,
		toggleIsFavorite, isFavorite } = CardSummaryLogic(favorite);

	// close when click outside
	useOutsideCloseMenu(wrapperRef);

	return (
		<CradContainer>
			<CradLink>
				<TopContainer>
					<CardH1 href={url} target="_blank" rel="noopener noreferrer">{title}</CardH1>
                    {
                        page === 'mySummaries' &&
                        <IconContainer favorite={isFavorite}>
						    <FontAwesomeIcon onClick={() => toggleIsFavorite(sid)} icon={faStar} />
					    </IconContainer>
                    }
					
				</TopContainer>
				<CardImgContainer href={url} target="_blank" rel="noopener noreferrer">
					<img src={imgUrl} alt={title}/>
				</CardImgContainer>
			</CradLink>
			
			<DetailsContainer>
				<Taglist>
					{
						tags.filter((_, i) => i < 4).map((tag, index) => {
							if (index === 3) {
								tag = ' ... ';
							}
							return (
								<LinkTag key={index} to={tag === ' ... ' ? `/myHome/${page}/myTags` :
									`/myHome/${page}/filter/tags/${tag}`}>
									<TagItem>{stringLength(tag, 10, true)}</TagItem>
								</LinkTag>
							)
						})
					}
				</Taglist>
				<DateSection >
					<DateContainer>
						<AuthorName attribution='Last Change'
							textValue={TimeStringFormat(editTime)} color='black'></AuthorName>
						<LeftContainer ref={wrapperRef}>
							<FontAwesomeIcon onClick={toggleDropDown} icon={faEllipsisV} />
							{isDropDown && <DropDownSummary sid={sid} />}
						</LeftContainer>
					</DateContainer>
				</DateSection>
			</DetailsContainer>

			<BottomContainer>
				<RatingContainer pointer={page !== 'mySummaries' ? 1 : 0}>
					<FontAwesomeIcon icon={faHeart} size="sm"
                    onClick={page !== 'mySummaries' ? () => toggleLike(sid) : () => {}} />
					{Object.keys(likes).length}
				</RatingContainer>
				<AuthorName attribution='Created By'
					textValue={authorName}></AuthorName>
			</BottomContainer>
		</CradContainer>
	);
}

export default CardSummary;