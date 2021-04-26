import styled from 'styled-components';


// Support Section Containe style - 350px screen 
// fixed small screens bugs
export const SupportSectionContainer = styled.section`
    background-color: #f8f8f8f8;
    padding-top:30px;
    display: flex;
    text-align: center;
    height: 350px;
    background-position: center ;
    background-size: cover;
    @media screen and (max-width: 1244px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 450px;
    }    
`;


// Support H1 style - choose size and margin and fix small screen
export const SupportH1 = styled.h1`
    font-size: clamp(2.2rem, 6.2vw, 2.4rem);
    letter-spacing: 3px;
    float: left;
    margin-left: calc((100% -1000) / 10);

    @media screen and (max-width: 1244px) {
        display:block;
        float:none;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const SupportContainerImge = styled.div`
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
`


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
`


export const SupportIcon = styled.div`
        font-size: ${({size}) => size ? size: "30px"};

        position: absolute;
        top: ${({top}) => top ? top: "10px"};
        left: ${({left}) => left ? left: "10px"};
        z-index: 2;



    /* display: flex;
    color: #3f423e;
    font-size: 50px;
    margin: 12px 6px;
    text-align: center; */
`

