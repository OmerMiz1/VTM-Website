import React, { useContext} from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import DiscoverLogic from './Discover.logic';
import MySummariesLogic from '../MySummaries/MySummaries.logic';
import LoadingComponent from '../Loading'
import CardSummary from '../../../components/Card/CardSummary';
import {
	MainPageContainer, MyHomePageH1, CardSummariesContainers,
	CardItemContainer, BottomContainer, ViewMoreButton, TiltleContainer
} from '../MyHomePage.style';
import {WarningText} from '../Loading/Loading.style';
import { FilterMySummariesContext } from '../../../utils/context/FilterMySummariesContext';
import  StaticSearchBar from '../../../components/Navbar/SearchNavBar/StaticSearchBar'




function Discover() {
	const { ShowMoreSummaries, amountSummariesShow } = MySummariesLogic();
	const { isLoading, isPublicSummariesEmpty } = useContext(SummariesContext);
	const {publicFilterSummaries} = useContext(FilterMySummariesContext);

	// Fetch public summaries and sets state
	const setUrlSearchText = DiscoverLogic();
	
	return (
		<MainPageContainer>
            <TiltleContainer>
                <MyHomePageH1>Discover</MyHomePageH1>
                <StaticSearchBar setUrlSearchText={setUrlSearchText}></StaticSearchBar>
            </TiltleContainer>

			<LoadingComponent page="Discover"></LoadingComponent>
			{publicFilterSummaries && !isLoading ?
				<CardSummariesContainers>

					{publicFilterSummaries.slice(0, amountSummariesShow).map((card) => {
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
				{publicFilterSummaries && !isLoading && amountSummariesShow < publicFilterSummaries.length && (
					<ViewMoreButton onClick={ShowMoreSummaries}>View More</ViewMoreButton>
				)}
			</BottomContainer>
		</MainPageContainer>
	)
}

export default Discover;
