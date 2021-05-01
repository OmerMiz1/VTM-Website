import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

// Footer Conatainer - display, size 
export const FooterConatainer = styled.nav`
    background-color: rgba(228,223,223,10);
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display:block;
    padding: 0rem calc((100%-1300px) / 8); 

    @media screen and (max-width: 600px) {
        padding: 0rem 20px; 
    }
`;

// Footer icon - color  size and hover
export const FooterIcon = styled.div`
    cursor: pointer;
    color: #3f423e;
    font-size: ${props => props.theme.fontSizes.icon};
    margin: 12px 6px;
    text-align: center;

    &:not(:last-of-type) {
        margin-right: 7px;
    }

    &:hover {
        filter: contrast(0.6)
    }
`;

// Footer div of content style - display , size and margin
export const FooterContent = styled.div`
    display: flex;
    font-weight: 600;
    float: ${({float}) => float ? float: "left"};
    margin-top: ${({ marginTop}) => marginTop ? marginTop: "0px"};
    margin-right: 22px;
`;

// Footer link style -> posision , cursor size marging hover...
export const FooterLink = styled(Link)`
    line-height: 1.2;
    text-align: center;
    color: black;
    font-size: ${props => props.theme.fontSizes.nav};
    align-items:center;
    text-decoration: none;
    cursor: pointer;
    margin: 10px 0px 0px 20px;
    transition: all 200ms ease-in-out;
    &:hover {
        filter: contrast(0.6)
    }

    // for small screen:
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

// Footer p style -> size, margin 
export const FooterP = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    margin: 26px 0px 0px 35px;

    @media screen and (max-width: 500px) {
        visibility:hidden; 
    }

`;

