import React from 'react';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';


import {MyHomePageContainer} from './MyHomePage.style';


function MyHomePage() {
    
    return (
        <>
            <OnNavbar useTransparent ={false} />
            <MyHomePageContainer>
                <SideNavBar/>
                


            </MyHomePageContainer>
       </>
    )
}

export default MyHomePage;


