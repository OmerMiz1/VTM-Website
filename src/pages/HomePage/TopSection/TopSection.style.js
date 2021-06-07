import styled from 'styled-components';
import imageBackground from '../../../images/backgrounds/summaryBackgroungImage.jpg'

// top section container style - image 600px screen 
export const TopSectionContainer = styled.section`
    background: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${imageBackground});
    height: 600px;
    background-position: 60%;
    background-size: cover;
`;
// top section context style - left of the screen
export const TopSectionContent = styled.div`
    height: 400px;
    max-height: 100%;
    width: 100%;
    padding: 0rem calc((100%-1300px) / 6); 
`;

// top items in the section style - center all and choose size
// mubile full of the screen
export const TopSectionItems = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    height:600px;
    /* height: 100vh; */
    max-height: 100%;
    padding: 0 2rem;
    width: 550px;
    color: #fff;
    /* text-transform: uppercase; */
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 550px) {
        width: 100%;
        padding: 0;
    }
`;

// top H1 style - choose size and margin
export const TopSectionH1 = styled.h1`

    font-size: ${props => props.theme.fontSizes.header};
    margin-bottom: ${props => props.theme.spacers.medium};
    letter-spacing: 3px;
    text-align: center;
    font-family: serif;
    
`;


// top p style - center and margin each ohter
// props margin and cursor
export const TopSectionP = styled.p`
    display:inline;
    font-size: ${props => props.theme.fontSizes.autoFitMedium};

    cursor: ${({ cursor }) => (cursor ? cursor : "default")};
    margin-left: ${({ marginleft }) => (marginleft ? marginleft : "0px")};
    font-weight: 700;

    /* margin-bottom: 2rem; */
    @media screen and (max-width: 550px) {
        width: 100%;
        display: block;
        margin-left:auto;
        margin-right:auto;
        text-align: center;
        margin-bottom: 0.5rem;

    }
`;

// top continer p style - center and margin
export const ContainerP = styled.div`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
`;

