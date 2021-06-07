import React from 'react';
import { LetStartSectionContainer, LetStartContent, LetStartH1 } from './letStartSection.style';
import { SignUpBtn } from '../../../components/atoms/Buttons/Buttons.style';
import HomePageLogic from '../HomePage.logic'


// LetStartSection - container, header, button and text
function LetStartSection() {
	const { routeToSignUp } = HomePageLogic()

	return (
		<LetStartSectionContainer>
			<LetStartContent>
				<LetStartH1>So go ahead, Start summarizing with us</LetStartH1>
				<SignUpBtn onClick={routeToSignUp} fontSize='1.3rem' padding='0.6rem 2.6rem'>Sing Up Now</SignUpBtn>
			</LetStartContent>
		</LetStartSectionContainer>
	)
}

export default LetStartSection
