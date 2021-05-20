import React from 'react';
import {SummariesContext} from '../../utils/context/SummariesContext';
import {FilterMySummariesContext} from '../../utils/context/FilterMySummariesContext';
import {Switch ,Route, useParams, useRouteMatch} from 'react-router-dom';

import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries'
import Footer from '../../components/Footer'
import MyHomePageData from './MySummary.data'
import MyHomePageApi from './MyHomePage.Api';
import MyHomePageFilters  from './MyHomePage.filters';
import {MyHomePageContainer}from './MyHomePage.style';
import Discover from './Discover';
import MyTags from './MySummaries/MyTags';
import ViewSummary from './VeiwSummary';

import EditSummary from '../../components/EditForm';


function MyHomePage() {
    const {page} = useParams();
    const {mySummaries, setMySummaries, isMySummaryEmpty, myFilterSummaries,
        setMyFilterSummaries} = MyHomePageData();
    const {SearchFillterData, myFilterSummariesTags,
        FillterDataByAttribute, UnFillter} = MyHomePageFilters(mySummaries, setMyFilterSummaries);
    // api of my home page
    const {isLoading, setLoading, addSummary, deleteSummary, editSummary,
        ShareSummary, toggleFavorite} = MyHomePageApi(mySummaries, setMySummaries,
            myFilterSummaries, setMyFilterSummaries);



    const {path} = useRouteMatch();


    return (
        <SummariesContext.Provider value={{isMySummaryEmpty, mySummaries, isLoading, setLoading, myFilterSummaries, addSummary,
            deleteSummary, editSummary, ShareSummary, toggleFavorite}}>
            <FilterMySummariesContext.Provider value= {{SearchFillterData, myFilterSummariesTags,
                 FillterDataByAttribute, UnFillter}} >
                <OnNavbar useTransparent ={false} PositionMarker={page}/>
                <MyHomePageContainer>
                    <SideNavBar/>
                    
                    <Switch>
                        <Route exact path={`${path}/view/:id`} component={ViewSummary}/>
                        <Route exact path={`${path}/edit/:id`} component={EditSummary}/>
                        <Route exact path='/myHome/:page/:attribute' component={MyTags}/>
                        <Route exact path='/myHome/:page/:action/:attribute/:name' component={MySummaries}/>                    
                        <Route exact path='/myHome/:page'>
                        {
                            page === 'mySummaries' ? <MySummaries/>:
                            page === 'Discover' ? <Discover/> :
                            page === 'SharedWithMe' ? <h1>Shared With Me</h1> :
                            page === 'MyFrinds' ? <h1>My Frinds</h1> :
                            page === 'Settings' ? <h1>Settings</h1> :
                            <h1>ELSE</h1>

                        }
                        </Route>
                    </Switch>
                    


                </MyHomePageContainer>
                <Footer/>
            </FilterMySummariesContext.Provider>
       </SummariesContext.Provider>
    )
}

export default MyHomePage;


