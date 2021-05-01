import styled from 'styled-components';

// Info Section Container style- color and size
// small screen 800px
export const BottomSectionContainer = styled.section`
    width: 100%;
    height: 370px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display:block;
`;

// Info Section content style- size, padding
export const BottomSectionContent = styled.section`
    background: linear-gradient(30deg, #374142 ,#0f1312);
    /* background-color: #171d1d; */    

    @media screen and (min-width: 1600px) {
        padding: 0rem calc((100%-1300px) / 8); 

    }
    width: 100%;
    height: 300px;
    
`;

//H1 style - choose size and margin
export const BottomSectionH1 = styled.h1`
    font-size: ${props => props.theme.fontSizes.header};

    color: #eee;
    padding-top: 15px;
    letter-spacing: 3px;
    text-align: center;
    /* font-family: serif; */
`;

export const BottomItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    padding: 3rem 1.46rem;
`;

export const  BottomItem = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 330px;
`;

export const Border = styled.div`
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;

`



// info p style 
export const BottomSectionP = styled.p`
    display: block;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 700;
    text-align: center;
    line-height: 1.3;
    color: #eee;
`;
