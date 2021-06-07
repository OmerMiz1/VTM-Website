import styled from 'styled-components';

// top section container style - image 600px screen 
export const MyHomePageContainer = styled.section`
    max-width: 1500px;
    /* padding:2.5rem;  */
    min-height: 100vh;
    height: 100%;
    display: grid;
    margin: 0 auto;

    align-items: start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    grid-column-gap: 5px; //Fix
    grid-row-gap: 10px; // Fix
    grid-template-columns: repeat(12,1fr); // 12 or 10?
    grid-auto-flow: dense;


    @media screen and (max-width: 700px) {
        grid-template-columns: none;
    }
`;

export const MainPageContainer = styled.div`
    grid-column: span 10;
    display: block;
    align-items: center;
    justify-content: center;

`
export const MyHomePageH1 = styled.h1`
    margin-left: ${props => props.theme.spacers.medium};
    margin-top: ${props => props.theme.spacers.medium};
    color: ${props => props.theme.colors.header};
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 800;
`;

export const CardSummariesContainers = styled.div`
    pointer-events: auto;
    padding-top: 0;

    display: grid;
    -ms-flex-align: start;
    align-items: start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    grid-template-columns: repeat(12,1fr);
    grid-auto-flow: dense;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: ${props => props.theme.spacers.small};
    margin: auto;


    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(8,1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(4,1fr);
    }
`;

export const CardItemContainer = styled.div`
    height: 345px;
    grid-column: span 4;
    margin: auto;
`;

export const ViewMoreButton = styled.button`
    /* background-color: ${props => props.theme.colors.main}; */
    background-color: #5d7793;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    color: white;
    font-size: ${props => props.theme.fontSizes.large};
    padding: 4px 10%;
    &:hover {
      /* background-color: ${props => props.theme.colors.darkMain}; */
      background-color: #38608c;
      filter: contrast(0.8);
    };
    margin-bottom: 5%
`;

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;;

`;
