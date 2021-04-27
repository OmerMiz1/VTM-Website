import styled from 'styled-components';


// Support Section Containe style - 350px screen 
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
    font-size: clamp(2.2rem, 6.2vw, 2.4rem);
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
        font-size: clamp(1.8rem, 5.8vw, 2rem);
    }
`;

export const SupportP= styled.p`
    grid-column-start: 1;
    grid-row-start: 2; 
    font-size: clamp(1.4rem, 4vw, 1.4rem);
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
        font-size: clamp(1.2rem, 3vw, 1.2rem);
    }

`;



export const SupportContainerImge = styled.div`
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


export const SupportImg = styled.div`
    width: 350px;
    height: 250px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    top: ${({top}) => top ? top: "0"};
    left: ${({left}) => left ? left: "0"};
    z-index: 1;

    img{
        width: 100%;
        height:100%;
    }
`;


export const SupportIcon = styled.div`
        font-size: ${({size}) => size ? size: "30px"};

        position: absolute;
        top: ${({top}) => top ? top: "10px"};
        left: ${({left}) => left ? left: "10px"};
        z-index: 2;
`

