import React from 'react';
import CardSummary from '../../../components/Card/CardSummary';

import MyHomePageLogic from '../MyHomePage.logic';
import MyHomePageApi from '../MyHomePage.Api';

import {MainPageContainer, MyHomePageH1, WarningText, CardSummariesContainers,
    CardItemContainer, Lodaing, LodaingContanir, LoadingConainer,
    BottomContainer, ViewMoreButton,
    loadingCircleVariants, loadingCircleTransition, loadingContainerVariants} from '../MyHomePage.style';


function MySummaries() {


    const {ShowMoreSummaries, amountSummariesShow} = MyHomePageLogic();

    // TODO move to homepage and add usecontent 
    const {isMySummaryEmpty, mySummaries, isLoading,} = MyHomePageApi();

    return (
        <MainPageContainer>
            <MyHomePageH1>My Summary:</MyHomePageH1>

            {isMySummaryEmpty && !isLoading && (
                    <WarningText>No Summaries are published yet!</WarningText>
                )}
                {isLoading &&
                <LoadingConainer>
                    <WarningText>Loading</WarningText>
                        <LodaingContanir
                        variants={loadingContainerVariants}
                        initial="start"
                        animate="end">
                            <Lodaing
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}></Lodaing>
                            <Lodaing
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}></Lodaing>
                            <Lodaing
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}></Lodaing>

                        </LodaingContanir>   
                </LoadingConainer>}

            {!isMySummaryEmpty && !isLoading &&
                <CardSummariesContainers>
                    {mySummaries.slice(0,amountSummariesShow).map((card) => {
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
                {!isMySummaryEmpty && !isLoading && (
                    <ViewMoreButton onClick={ShowMoreSummaries}>View More</ViewMoreButton>
                )} 
            </BottomContainer>
                   
        </MainPageContainer>
    )
}

export default MySummaries;


