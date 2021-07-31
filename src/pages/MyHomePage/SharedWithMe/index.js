import React, { useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import SharedWithMeLogic from './SharedWithMe.logic';
import MySummariesLogic from '../MySummaries/MySummaries.logic';
import LoadingComponent from '../Loading';
import CardSummary from '../../../components/Card/CardSummary';
import {
	MainPageContainer, MyHomePageH1, CardSummariesContainers,
	CardItemContainer, BottomContainer, ViewMoreButton,
} from '../MyHomePage.style';
import {WarningText} from '../Loading/Loading.style';


function SharedWithMe() {
	const { ShowMoreSummaries, amountSummariesShow } = MySummariesLogic();
	const { isLoading, sharedSummaries, isSharedSummariesEmpty } = useContext(SummariesContext);

	// Fetch shared summaries and sets state
	SharedWithMeLogic();
	
	return (
		<MainPageContainer>
			<MyHomePageH1>Shared</MyHomePageH1>
			<LoadingComponent page="Shared"></LoadingComponent>
			{!isSharedSummariesEmpty && !isLoading ?
				<CardSummariesContainers>
					{sharedSummaries.slice(0, amountSummariesShow).map((card) => {
						return (
							<CardItemContainer key={card.sid}>
								<CardSummary
									sid={card.sid}
									imgUrl={card.imgUrl}
									title={card.title}
									createTime={card.createTime}
									editTime={card.editTime}
									authorName={card.authorName}
									url={card.url}
									tags={card.tags}
									likes={card.likes}
									page='discover'
								></CardSummary>
							</CardItemContainer>
						)
					})}
				</CardSummariesContainers>: !isLoading ?
            <WarningText>No summaries Shared!</WarningText> : <></>
            }

			<BottomContainer>
				{!isSharedSummariesEmpty && !isLoading && amountSummariesShow < sharedSummaries.length && (
					<ViewMoreButton onClick={ ShowMoreSummaries }>View More</ViewMoreButton>
				)}
			</BottomContainer>
		</MainPageContainer>
	)
}

export default SharedWithMe;
