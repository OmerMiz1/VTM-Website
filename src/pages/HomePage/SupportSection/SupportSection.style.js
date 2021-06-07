import styled from 'styled-components';


// Support Section Container style - 350px screen 
// fixed small screens bugs
export const SupportSectionContainer = styled.section`
    background-color: #f8f8f8f8;
    display: grid;
    height: 350px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 20% 80%;

    background-position: center ;
    background-size: cover;


    padding-top:15px;
    /* text-align: center; */
    
    @media screen and (max-width: 1244px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 520px;
    } 
`;

// Support H1 style - choose size and margin and fix small screen
export const SupportH1 = styled.h1`
    font-size: ${props => props.theme.fontSizes.header};
    letter-spacing: 3px;
    /* float: left; */
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1244px) {
        display:block;
        float:none;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 540px) {
        font-size: ${props => props.theme.fontSizes.headerMobile};
    }
`;

// Support P style - choose size and place in table 
// fix to small screen 
export const SupportP = styled.p`
    grid-column-start: 1;
    grid-row-start: 2; 
    font-size: ${props => props.theme.fontSizes.autoFitMedium};
    padding: 0rem calc((50%-1200px) / 3); 
    font-weight: 590;
    text-align: center;

    @media screen and (max-width: 1244px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 10px;
        padding: 0rem calc((100%-1200px) / 10); 
    } 

    @media screen and (max-width: 700px) {
        font-size: ${props => props.theme.fontSizes.autoFitMediumMubile};
    }

`;

// Support Container Imge style -  place in table and make it relative
export const SupportContainerImg = styled.div`
    grid-column-start: 2;
    grid-row-start: 1; 
    grid-row-end: 3; 

    width: 300px;
    height: 300px;
    margin: auto;
    position: relative;
    
    @media screen and (max-width: 1244px) {
        margin: 50px auto;    
        display:flex;
        flex-wrap:wrap;
        text-align: center;
        position: relative;
    }
`;

// Support app Img -, place it on the middel section (or prop the marging) 
export const SupportImg = styled.div`
    width: 350px;
    height: 250px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    top: ${({ top }) => top ? top : "0"};
    left: ${({ left }) => left ? left : "0"};
    z-index: 1;

    img{
        width: 100%;
        height:100%;
    }
`;


// Support icon all over the image -> prop the posision (marging) and size 
export const SupportIcon = styled.div`
        font-size: ${({ size }) => size ? size : "30px"};
        position: absolute;
        top: ${({ top }) => top ? top : "10px"};
        left: ${({ left }) => left ? left : "10px"};
        z-index: 2;
`

