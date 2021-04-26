import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FooterConatainer, FooterLink, FooterContent, FooterIcon, FooterP} from './Footer.style';
import {faFacebook, faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';



//TODO on click -> git chrome  
function index(props) {

    return (
        <FooterConatainer>
            <FooterContent>
                <FooterLink to='/'>Video Tag <br/> Mannger</FooterLink>
                <FooterP>&#169; All Rights reserved, 2021</FooterP>
            </FooterContent>
            <FooterContent float="right" marginTop="9px">
                <FooterIcon>
                    < FontAwesomeIcon icon={faChrome}/>
                </FooterIcon>
                <FooterIcon>
                    < FontAwesomeIcon icon={faGithub}/>
                </FooterIcon>
            </FooterContent>
            
        </FooterConatainer>
    
    )
}
export default index
