import React from 'react';
import {SummariesContext} from '../../utils/context/SummariesContext';
import {FilterMySummariesContext} from '../../utils/context/FilterMySummariesContext';

import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries'
import Footer from '../../components/Footer'

import { useParams } from 'react-router-dom';

import MyHomePageData from './MySummary.data'
import MyHomePageApi from './MyHomePage.Api';
import MyHomePageFilters  from './MyHomePage.filters';

import {MyHomePageContainer}from './MyHomePage.style';

function MyHomePage() {
    const {action} = useParams();

    const {mySummaries, setMySummaries, isMySummaryEmpty, myFilterSummaries, setMyFilterSummaries} = MyHomePageData();

    const {SearchFillterData} = MyHomePageFilters(mySummaries, setMyFilterSummaries);

    // api of my home page
    const {isLoading, deleteSummary, editSummary,
        ShareSummary, toggleFavorite} = MyHomePageApi(mySummaries, setMySummaries);


    
    return (
        <SummariesContext.Provider value={{isMySummaryEmpty, mySummaries, isLoading, myFilterSummaries,
        deleteSummary, editSummary, ShareSummary, toggleFavorite}}>
            <FilterMySummariesContext.Provider value= {{SearchFillterData}} >
                <OnNavbar useTransparent ={false} />
                <MyHomePageContainer>
                    <SideNavBar/>
                    {action ==='mySummaries' ? <MySummaries/> : <h1>Dis</h1>}
                </MyHomePageContainer>
                <Footer/>
            </FilterMySummariesContext.Provider>
       </SummariesContext.Provider>
    )
}

export default MyHomePage;


