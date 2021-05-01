import styled from 'styled-components';

// top section container style - image 600px screen 
export const MyHomePageContainer = styled.section`
    height: 100vh;
    display: grid;

    align-items: start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    grid-column-gap: 5px; //Fix
    grid-row-gap: 10px; // Fix
    grid-template-columns: repeat(12,1fr); // 12 or 10?
    grid-auto-flow: dense;
`;

