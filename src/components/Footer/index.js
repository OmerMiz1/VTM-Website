import React from 'react';
import { useHistory } from 'react-router-dom';
import { FooterConatainer, FooterLink, FooterContent, FooterP } from './Footer.style';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'; // add faFacebook??
import Icon from '../atoms/Icon';


function index() {
	const history = useHistory();

	return (
		<FooterConatainer>
			<FooterContent>
				<FooterLink to='/'>Video Tag <br /> Manager</FooterLink>
				<FooterP>&#169; All Rights reserved, 2021</FooterP>
			</FooterContent>
			<FooterContent float="right" marginTop="9px">
				<Icon margin='12px 6px' color='#3f423e' icon={faChrome} funOnClick={history.push("https://omermiz.atlassian.net/jira/software/projects/VNM/boards/1/backlog")}></Icon>
				<Icon margin='12px 6px' color='#3f423e' icon={faGithub} funOnClick={history.push("https://github.com/OmerMiz1/VTM-Website")}></Icon>
			</FooterContent>

		</FooterConatainer>

	)
}
export default index
