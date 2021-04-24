import React from 'react'
import Navbar from '../../components/Navbar'
import TopSection from './TopSection'
import {TopSectionContainer, TopSectionContent, TopSectionItems,
     TopSectionH1, TopSectionBtn, TopSectionP, ContainerP} from './TopSection/TopSection.style'

function index() {
    return (
        <TopSectionContainer>
            <Navbar></Navbar>
            <TopSectionContent>
                <TopSectionItems>
                    <TopSectionH1>Strat Tags Your Videos!</TopSectionH1>
                    <TopSectionBtn>Sing Up Now</TopSectionBtn>
                    <ContainerP>
                        <TopSectionP marginleft="0px">Already have an account?</TopSectionP>
                        <TopSectionP marginleft="30px" cursor="pointer"><u>Log In</u></TopSectionP>
                    </ContainerP>
                </TopSectionItems>
            </TopSectionContent>
        </TopSectionContainer>
    )
}

export default index
