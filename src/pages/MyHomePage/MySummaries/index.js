import React from 'react';
import CardSummary from '../../../components/Card/CardSummary';

import MyHomePageLogic from '../MyHomePage.logic';

import {MainPageContainer, MyHomePageH1, WarningText, CardSummariesContainers,
    CardItemContainer, Lodaing, LodaingContanir, LoadingConainer,
    BottomContainer, ViewMoreButton,
    loadingCircleVariants, loadingCircleTransition, loadingContainerVariants} from '../MyHomePage.style';







function MySummaries() {


    const {isMySummaryEmpty, mySummaries, isLoading,
        ShowMoreSummaries, amountSummariesShow} = MyHomePageLogic();


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
                                imgUrl= {card.imgUrl}
                                title= {card.title}
                                createdTime= {card.createdTime}
                                editTime= {card.editTime}
                                likes = {card.likes}
                                autorName= {card.autorName}
                                url= {card.url}
                                tags = {card.tags}
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


