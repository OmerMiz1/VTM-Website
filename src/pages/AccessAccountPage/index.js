import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import AccountBox from '../../components/AccountBox'
import PageContainer from '../../containers/PageContainers';
import { InnerPageContainer } from '../../containers/PageContainers/PageContainers.style';
import { useParams } from 'react-router-dom';

function AccessAccountPage() {

    const {action} = useParams();
    
    return (
        <PageContainer>
            <Navbar/>
            <InnerPageContainer>
                <AccountBox initRegistered = {action === 'login'? true: false}/>
            </InnerPageContainer>
            <Footer/>
        </PageContainer>
            
    )
}

export default AccessAccountPage
