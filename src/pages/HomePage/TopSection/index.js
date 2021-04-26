import React from 'react'
import Navbar from '../../../components/Navbar'
import {TopSectionContainer, TopSectionContent, TopSectionItems,
     TopSectionH1, TopSectionP, ContainerP} from './TopSection.style';
import {SingUpBtn} from '../../../components/Buttons/Buttons.style';

function TopSection() {
    return (
        <TopSectionContainer>
            <Navbar></Navbar>
            <TopSectionContent>
                <TopSectionItems>
                    <TopSectionH1>Strat Tags Your Videos!</TopSectionH1>
                    <SingUpBtn>Sing Up Now</SingUpBtn>
                    <ContainerP>
                        <TopSectionP marginleft="0px">Already have an account?</TopSectionP>
                        <TopSectionP marginleft="30px" cursor="pointer"><u>Log In</u></TopSectionP>
                    </ContainerP>
                </TopSectionItems>
            </TopSectionContent>
        </TopSectionContainer>
    )
}

export default TopSection
