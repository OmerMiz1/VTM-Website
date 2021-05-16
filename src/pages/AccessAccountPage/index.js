import React from 'react';
import OffNavbar from '../../components/Navbar/OffNavbar';
import Footer from '../../components/Footer'
import AccountBox from '../../components/AccountBox'
import PageContainer from '../../containers/PageContainers';
import { InnerPageContainer } from '../../containers/PageContainers/PageContainers.style';
import { useParams } from 'react-router-dom';


function AccessAccountPage() {

    const {action} = useParams();
    
    return (
        <PageContainer>
            <OffNavbar useTransparent ={false} />
            <InnerPageContainer>
                <AccountBox initRegistered = {action === 'login'? true: false}/>
            </InnerPageContainer>
            <Footer/>
        </PageContainer>
            
    )
}

export default AccessAccountPage
