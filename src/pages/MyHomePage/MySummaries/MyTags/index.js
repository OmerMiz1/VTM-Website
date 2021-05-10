import React, { useContext} from 'react';
import {SummariesContext} from '../../../../utils/context/SummariesContext';
import {FilterMySummariesContext} from '../../../../utils/context/FilterMySummariesContext';

import { useParams } from 'react-router-dom';

import {MainPageContainer, MyHomePageH1, LodaingContanirMotion, LoadingConainer,
    WarningText,Lodaing, loadingCircleVariants, loadingCircleTransition, loadingContainerVariants } from '../../MyHomePage.style'



function MyTags() {

    const {filter} = useParams();
    console.log(`url filter ->  `, filter); //TODO delet 


    const {isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);
    const { myFilterSummariesTags} = useContext(FilterMySummariesContext);


    return(
        <MainPageContainer>
            <MyHomePageH1>My Tags:</MyHomePageH1>
            {isMySummaryEmpty && !isLoading && (
                    <WarningText>No Summaries are published yet!</WarningText>
                )}

            {myFilterSummaries.length === 0 && !isLoading && (
                    <WarningText>Not found!!</WarningText>
                )}
                {isLoading &&
                <LoadingConainer>
                    <WarningText>Loading</WarningText>
                        <LodaingContanirMotion
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
                        </LodaingContanirMotion>   
                </LoadingConainer>}

            {!isMySummaryEmpty && !isLoading &&
                <ul>
                    {Array.from(myFilterSummariesTags).map( (tag) => {
                        return (
                            <li key={tag}>
                                <a>{tag}</a>
                            </li>   
                    )}) 
                    }
                </ul>
            }      
        </MainPageContainer>
    )
}

export default MyTags;


