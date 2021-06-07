import React from 'react'
import OffNavbar from '../../../components/Navbar/OffNavbar'
import {
	TopSectionContainer, TopSectionContent, TopSectionItems,
	TopSectionH1, TopSectionP, ContainerP
} from './TopSection.style';
import { SignUpBtn } from '../../../components/atoms/Buttons/Buttons.style';
import HomePageLogic from '../HomePage.logic'

function TopSection() {

	// Routing to SignUp and Login
	const { routeToSignUp, routeToLogin } = HomePageLogic()

	return (
		<TopSectionContainer>
			<OffNavbar usetransparent={1} />
			<TopSectionContent>
				<TopSectionItems>
					<TopSectionH1>Strat Tags Your Videos!</TopSectionH1>
					<SignUpBtn onClick={routeToSignUp} >Sing Up Now</SignUpBtn>
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
