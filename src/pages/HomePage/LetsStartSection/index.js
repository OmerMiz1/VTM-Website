import React from 'react';
import { LetsStartSectionContainer, LetStartContent, LetStartH1 } from './LetsStartSection.style';
import { SignUpBtn } from '../../../components/atoms/Buttons/Buttons.style';
import HomePageLogic from '../HomePage.logic'


// LetsStartSection - container, header, button and text //DELETEME
function LetsStartSection() {
	const { routeToSignUp } = HomePageLogic()

	return (
		<LetsStartSectionContainer>
			<LetStartContent>
				<LetStartH1>So go ahead, Start summarizing with us</LetStartH1>
				<SignUpBtn onClick={routeToSignUp} fontSize='1.3rem' padding='0.6rem 2.6rem'>Sign Up Now</SignUpBtn>
			</LetStartContent>
		</LetsStartSectionContainer>
	)
}

export default LetsStartSection;