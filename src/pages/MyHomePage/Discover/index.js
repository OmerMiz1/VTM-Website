import React, { useContext, useEffect } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
// import DiscoverLogic from './Discover.logic';
import MySummariesLogic from '../MySummaries/MySummaries.logic';
import LoadingComponent from '../Loading'
import CardSummary from '../../../components/Card/CardSummary';
import {
	MainPageContainer, MyHomePageH1, CardSummariesContainers,
	CardItemContainer, BottomContainer, ViewMoreButton,
} from '../MyHomePage.style';


function Discover() {
	const { ShowMoreSummaries, amountSummariesShow } = MySummariesLogic();

	// TODO remove GetSharedSummaries...
	const { isLoading, toggleLike, getPublicSummaries, GetSummariesSharedWith,
        publicSummaries, setPublicSummaries, isPublicSummariesEmpty } = useContext(SummariesContext);

	//TODO add some fetch to get some (around 30 suummaries)
	//TODO move to logic
	useEffect(async () => {
        if (isPublicSummariesEmpty) {
            setPublicSummaries(await getPublicSummaries());
        }  
		console.log('publicSumaries:', publicSummaries); //TODO delete
	}, []);

	return (
		<MainPageContainer>
			<MyHomePageH1>Discover</MyHomePageH1>
			<LoadingComponent></LoadingComponent>
			{!isPublicSummariesEmpty && !isLoading &&
				<CardSummariesContainers>
					{publicSummaries.slice(0, amountSummariesShow).map((card) => {
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
				</CardSummariesContainers>
			}
			<BottomContainer>
				{!isPublicSummariesEmpty && !isLoading && amountSummariesShow < publicSummaries.length && (
					<ViewMoreButton onClick={ShowMoreSummaries}>View More</ViewMoreButton>
				)}
			</BottomContainer>
		</MainPageContainer>
	)
}

export default Discover;
