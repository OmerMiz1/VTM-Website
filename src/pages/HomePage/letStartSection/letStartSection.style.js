import styled from 'styled-components';

import imageBackground from '../../../images/backgrounds/b2.jpg'


// let start Section Container style- color and size
// small screen 400px
export const LetStartSectionContainer = styled.section`
    background: linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${imageBackground});
    /* background: url(${imageBackground}); */
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-position: center ;
    background-size: cover;
`;

// let start Section content style- size, padding
export const LetStartContent = styled.div`

    @media screen and (min-width: 1200px) {
        padding: 0rem calc((100% - 400px) / 2); 

    }
    justify-content: center;
    padding: 0rem calc((100% - 500px) / 2); 
`;


//let start H1 style - choose size and margin
export const LetStartH1 = styled.h1`
    font-size: clamp(2rem, 6vw, 2rem);
    color: #fff;
    padding-top: 15px;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 1000;
    margin-bottom: 18px;
`;


