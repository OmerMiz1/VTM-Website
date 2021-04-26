import styled from 'styled-components';

// Info Section Container style- color and size
// small screen 800px
export const InfoSectionContainer = styled.section`
    background-color: #f2f2f2f2;
    width: 100%;
    height: 475px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    display:block;

    /* margin-bottom: 2rem; */
    @media screen and (max-width: 850px) {
        height: 800px;
        display: block;
        text-align: center;
    }

    @media screen and (min-width: 2120px) {
        height: 300px;


    }
`;

// Info Section content style- size, padding
export const InfoSectionContent = styled.section`

    @media screen and (min-width: 1600px) {
        padding: 0rem calc((100%-1300px) / 8); 

    }
    width: 100%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    padding: 0rem 1.46rem;
`;


// info H1 style - choose size and margin
export const InfoSectionH1 = styled.h1`
    font-size: clamp(2.2rem, 6.2vw, 2.4rem);
    padding-top: 15px;
    letter-spacing: 3px;
    text-align: left;
    margin-left: calc((100% -1000) / 10);
    /* font-family: serif; */
    @media screen and (max-width: 1244px) {
        text-align: center;
        margin: 0;
    }
    
    
`;

// info item style
export const InfoItem = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 330px;
`;

// info p style 
export const InfoP = styled.p`
       font-size: clamp(1rem, 1.5vw, 1.1rem);
       font-weight: 700;
       text-align: center;
       line-height: 1.3;
`;
