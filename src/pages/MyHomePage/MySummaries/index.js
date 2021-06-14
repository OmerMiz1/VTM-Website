import React, { useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import MySummariesLogic from './MySummaries.logic';
import LoadingComponent from '../Loading'
import CardSummary from '../../../components/Card/CardSummary';
import {
	MainPageContainer, MyHomePageH1, CardSummariesContainers,
	CardItemContainer, BottomContainer, ViewMoreButton,
} from '../MyHomePage.style';


function MySummaries() {
	const { ShowMoreSummaries, amountSummariesShow } = MySummariesLogic();
	const { isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);

	return (
		<MainPageContainer>
			<MyHomePageH1>My Summaries</MyHomePageH1>
			<LoadingComponent></LoadingComponent>
            
			{!isMySummaryEmpty && !isLoading &&
				<CardSummariesContainers>
					{myFilterSummaries.slice(0, amountSummariesShow).map((card) => {
						return (
							<CardItemContainer key={card.sid}>
								<CardSummary
									sid={card.sid}
									imgUrl={card.imgUrl}
									title={card.title}
									createTime={card.createTime}
									editTime={card.editTime}
									likes={card.likes}
									authorName={card.authorName}
									url={card.url}
									tags={card.tags}
									favorite={card.favorite}
                                    page= 'mySummaries'
								></CardSummary>
							</CardItemContainer>
						)
					})}
				</CardSummariesContainers>
			}
			<BottomContainer>
				{!isMySummaryEmpty && !isLoading && amountSummariesShow < myFilterSummaries.length && (
					<ViewMoreButton onClick={ShowMoreSummaries}>View More</ViewMoreButton>
				)}
			</BottomContainer>
		</MainPageContainer>
	)
}

export default MySummaries;