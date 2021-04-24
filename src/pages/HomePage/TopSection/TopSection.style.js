import styled from 'styled-components';
import imageBackground from '../../../images/backgrounds/summaryBackgroungImage.jpg'

// top section container style - image full screan 
export const TopSectionContainer = styled.section`
    background: linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${imageBackground});
    /* height:100vh; */
    height: 600px;
    /* background-position: 60%; */
    background-position: center ;
    background-size: cover;
`;

export const TopSectionContent = styled.div`
    /* display: block;
    position: absolute;
    top: 300px;
    left: 280px; */
    height: 400px;
    /* height: calc(100vh - 80px); */
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw-1300px) / 2); 
`;

export const TopSectionItems = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    height:600px;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    /* text-transform: uppercase; */
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const TopSectionH1 = styled.h1`
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: 1rem;
    /* box-shadow: 0px 3px #e9ba23; */
    letter-spacing: 3px;
    text-align: center;
    font-family: serif;
    
`;

export const TopSectionBtn = styled.button`
    font-size: 1.7rem;
    padding: 0.8rem 3rem;
    border: none;
    background-color: #eeeeee;
    color: blueviolet;
    font-weight: bold;
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:1rem;
    transition: 0.2s ease-out;
    border-radius: 5px;

    &:hover {
        background-color: #D3D3D3;
        transition: 0.2s ease-in;

    }



    

`;
export const TopSectionP = styled.p`
    display:inline;
    font-size: clamp(1.5rem, 2vw, 1.5rem);
    cursor: ${({cursor}) => (cursor? cursor: "none")};
    margin-left: ${({marginleft}) => (marginleft? marginleft: "0px")};
    /* margin-bottom: 2rem; */
    @media screen and (max-width: 650px) {
        width: 100%;
        display: block;
        margin-left:auto;
        margin-right:auto;
        text-align: center;
        margin-bottom: 0.5rem;

    }
`;

export const ContainerP = styled.div`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    
`;

