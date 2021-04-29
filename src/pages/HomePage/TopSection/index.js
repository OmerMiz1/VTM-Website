import React from 'react'
import Navbar from '../../../components/Navbar'
import {TopSectionContainer, TopSectionContent, TopSectionItems,
     TopSectionH1, TopSectionP, ContainerP} from './TopSection.style';
import {SingUpBtn} from '../../../components/Buttons/Buttons.style';
import HomePageLogic from '../HomePage.logic'

function TopSection() {
    
    // Routing to SignUp and Login
    const {routeToSignUp, routeToLogin} = HomePageLogic() 
   
    return (
        <TopSectionContainer>
            <Navbar useTransparent/>
            <TopSectionContent>
                <TopSectionItems>
                    <TopSectionH1>Strat Tags Your Videos!</TopSectionH1>
                    <SingUpBtn onClick={routeToSignUp} >Sing Up Now</SingUpBtn>
                    <ContainerP>
                        <TopSectionP marginleft="0px">Already have an account?</TopSectionP>
                        <TopSectionP marginleft="30px" cursor="pointer"><u onClick={routeToLogin}>Log In</u></TopSectionP>
                    </ContainerP>
                </TopSectionItems>
            </TopSectionContent>
        </TopSectionContainer>
    )
}

export default TopSection
