import React from 'react';
import {SummariesContext} from '../../utils/context/SummariesContext';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries'
import Footer from '../../components/Footer'

import { useParams } from 'react-router-dom';

import MyHomePageApi from './MyHomePage.Api';

import {MyHomePageContainer}from './MyHomePage.style';

function MyHomePage() {
    const {action} = useParams();
    // api of my home page
    const {isMySummaryEmpty, mySummaries, isLoading,
        deleteSummary, editSummary, ShareSummary,
        toggleFavorite} = MyHomePageApi();


    
    return (
        <SummariesContext.Provider value={{isMySummaryEmpty, mySummaries, isLoading,
        deleteSummary, editSummary, ShareSummary, toggleFavorite}}>
            <OnNavbar useTransparent ={false} />
            <MyHomePageContainer>
                <SideNavBar/>
                {action ==='mySummaries' ? <MySummaries/> : <h1>Dis</h1>}
            </MyHomePageContainer>
            <Footer></Footer>
       </SummariesContext.Provider>
    )
}

export default MyHomePage;


