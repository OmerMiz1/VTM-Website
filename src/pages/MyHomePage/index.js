import React from 'react';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries'
import Footer from '../../components/Footer'

import { useParams } from 'react-router-dom';

import {MyHomePageContainer}from './MyHomePage.style';

function MyHomePage() {
    const {action} = useParams();

    
    return (
        <>
            <OnNavbar useTransparent ={false} />
            <MyHomePageContainer>
                <SideNavBar/>
                {action ==='mySummaries' ? <MySummaries/> : <h1>Dis</h1>}
            </MyHomePageContainer>
            <Footer></Footer>

       </>
    )
}

export default MyHomePage;


