import React, { useContext} from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';
import MySummariesLogic from './MySummaries.logic';
import LoadingComponent from '../Loading'

import CardSummary from '../../../components/Card/CardSummary';
import {MainPageContainer, MyHomePageH1, CardSummariesContainers,
    CardItemContainer,BottomContainer, ViewMoreButton,} from '../MyHomePage.style';


import {useParams, useRouteMatch } from 'react-router-dom';

function MySummaries() {
    // logic of my home page
    const {ShowMoreSummaries, amountSummariesShow} = MySummariesLogic();

    // context from api
    const {isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);

    const {display, filter, name} = useParams();

    const {url, path} = useRouteMatch()
    console.log(`display, filter, name ->  `, display, filter, name); //TODO delet 
    console.log(`url , path ,->  `, url, path); //TODO delet 

    return (
        <MainPageContainer>
            <MyHomePageH1>My Summary:</MyHomePageH1>
            <LoadingComponent></LoadingComponent>

            {!isMySummaryEmpty && !isLoading &&
                <CardSummariesContainers>
                    {myFilterSummaries.slice(0,amountSummariesShow).map((card) => {
                        return(
                            <CardItemContainer key={card.id}>
                                <CardSummary
                                summaryId = {card.id}
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


