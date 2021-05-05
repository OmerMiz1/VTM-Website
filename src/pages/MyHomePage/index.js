import React from 'react';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummarys from './MySummarys'
import { useParams } from 'react-router-dom';


import {MyHomePageContainer}from './MyHomePage.style';


function MyHomePage() {
    const {action} = useParams();

    
    return (
        <>
            <OnNavbar useTransparent ={false} />
            <MyHomePageContainer>
                <SideNavBar/>
                {action ==='mySummarys' ? <MySummarys/> : <h1>Dis</h1>}
            </MyHomePageContainer>
       </>
    )
}

export default MyHomePage;


