import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WarningText = styled.h2`
  color: black;
  font-weight: 800;
  font-size: ${props => props.theme.fontSizes.header};
  display: flex;
  justify-content: center;
`;


export const Lodaing = styled(motion.span)`
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: black;
    border-radius: 0.5rem;
`;


export const LodaingContanirMotion = styled(motion.span)`
    display: flex;
    width: 2rem;
    height: 2rem;
    justify-content: space-around;
    margin: 50% 0;

`;

export const LoadingConainer = styled.div`
    display: flex;
    width: 4rem;
    height: 4rem;
    justify-content: space-around;
    margin: auto;

`;

//  *** animation style loading***//

export const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};


export const loadingCircleVariants = {
	start: {
		y: "0%",
	},
	end: {
		y: "100%",
	},
};


export const loadingCircleTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: "easeInOut",
};