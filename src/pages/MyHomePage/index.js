import React from 'react';
import {SummariesContext} from '../../utils/context/SummariesContext';
import {FilterMySummariesContext} from '../../utils/context/FilterMySummariesContext';
import {Route} from 'react-router-dom';

import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries'
import Footer from '../../components/Footer'

import { useParams } from 'react-router-dom';

import MyHomePageData from './MySummary.data'
import MyHomePageApi from './MyHomePage.Api';
import MyHomePageFilters  from './MyHomePage.filters';

import {MyHomePageContainer}from './MyHomePage.style';
import Discover from './Discover';
import MyTags from './MySummaries/MyTags'


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
                <OnNavbar useTransparent ={false} PositionMarker={action}/>
                <MyHomePageContainer>
                    <SideNavBar/>

                    <Route exact path='/myHome/mySummaries/:myTags' component={MyTags}/>
                    <Route exact path='/myHome/mySummaries' component={MySummaries}/>
                    <Route exact path='/myHome/Discover' component= {Discover}/>   
                    <Route exact path='/myHome/SharedWithMe'>
                        <h1>Shared With Me</h1>
                    </Route>
                    <Route exact path='/myHome/MyFrinds'>
                        <h1>My Frinds</h1>
                    </Route>
                    <Route exact path='/myHome/Setting'>
                        <h1>Setting</h1>
                    </Route>


                </MyHomePageContainer>
                <Footer/>
            </FilterMySummariesContext.Provider>
       </SummariesContext.Provider>
    )
}

export default MyHomePage;


