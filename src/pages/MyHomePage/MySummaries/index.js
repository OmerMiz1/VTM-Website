import React, { useContext} from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';
import MySummariesLogic from './MySummaries.logic';

import CardSummary from '../../../components/Card/CardSummary';
import {MainPageContainer, MyHomePageH1, WarningText, CardSummariesContainers,
    CardItemContainer, Lodaing, LodaingContanir, LoadingConainer,
    BottomContainer, ViewMoreButton,
    loadingCircleVariants, loadingCircleTransition, loadingContainerVariants} from '../MyHomePage.style';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyTags from './MyTags'


function MySummaries() {
    // logic of my home page
    const {ShowMoreSummaries, amountSummariesShow} = MySummariesLogic();

    // context from api
    const {isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);

    return (
        <MainPageContainer>
            <MyHomePageH1>My Summary:</MyHomePageH1>

            {isMySummaryEmpty && !isLoading && (
                    <WarningText>No Summaries are published yet!</WarningText>
                )}

            {myFilterSummaries.length === 0 && !isLoading && (
                    <WarningText>Not found!!</WarningText>
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

            <Router>
                <Switch>
                    <Route exact path='/myHome/mySummaries/myTags' component={MyTags}/>
                </Switch>
            </Router>
                   
        </MainPageContainer>
    )
}

export default MySummaries;


