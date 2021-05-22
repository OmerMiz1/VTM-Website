import React, { useContext} from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';
import MySummariesLogic from './MySummaries.logic';
import LoadingComponent from '../Loading'

import CardSummary from '../../../components/Card/CardSummary';
import {MainPageContainer, MyHomePageH1, CardSummariesContainers,
    CardItemContainer,BottomContainer, ViewMoreButton,} from '../MyHomePage.style';



function MySummaries() {
    // logic of my home page
    const {ShowMoreSummaries, amountSummariesShow} = MySummariesLogic();

    // context from api
    const {isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);


    return (
        <MainPageContainer>
            <MyHomePageH1>My Summary:</MyHomePageH1>
            <LoadingComponent></LoadingComponent>

            {!isMySummaryEmpty && !isLoading &&
                <CardSummariesContainers>
                    {myFilterSummaries.slice(0,amountSummariesShow).map((card) => {
                        return(
                            <CardItemContainer key={card.sid}>
                                <CardSummary
                                sid = {card.sid}
                                imgUrl= {card.imgUrl}
                                title= {card.title}
                                createdTime= {card.createdTime}
                                editTime= {card.editTime}
                                likes = {card.likes}
                                autorName= {card.autorName}
                                url= {card.url}
                                tags = {card.tags}
                                favorite = {card.favorite}
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


