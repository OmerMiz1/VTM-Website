import styled from 'styled-components';

export const VeiwSummaryContainer = styled.section`
    display: block;
    line-height: 1.5;
    width: 100%;
    grid-column: 3/-1;
    justify-content: center;
    align-items: center;
    text-align: center;

`;

export const VeiwSummaryHeaderContainer = styled.div`
    line-height: 1.5;
    font-size: ${props=> props.theme.fontSizes.medium};
    padding: 0 10% 1em;
    position: relative;
`;

export const VeiwSummaryH1 = styled.h1`
    margin-top: ${props => props.theme.spacers.medium};
    color: ${props=> props.theme.colors.header};
    font-size: ${props=> props.theme.fontSizes.headerMobile};
    font-weight: 800;
    display: inline-flex;
    margin-right: 10px;
    
`;
export const InputH1 = styled.input`
    margin-top: ${props => props.theme.spacers.medium};
    color: ${props=> props.theme.colors.nav};
    font-size: ${props=> props.theme.fontSizes.headerMobile};
    font-weight: 600;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    
`;
export const VeiwSummaryH1Edit = styled.div`
    margin-top: ${props => props.theme.spacers.medium};
    color: ${props=> props.theme.colors.header};
    font-size: ${props=> props.theme.fontSizes.headerMobile};
    font-weight: 800;
    display: unset;
    margin-right: 10px;
    
`;

//todo change
export const LinksContainer = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid black;

    
`;

export const VideoLink = styled.a`
    color: ${props=> props.theme.colors.second};
    font-size: ${props=> props.theme.fontSizes.nav};
    cursor: pointer;
    text-decoration: none;

    font-weight: 600;
    line-height: 2;
`;


export const ViewSummaryContext = styled.section`
    display: block;
    padding: 0 8%;
    text-align: start;
`;

export const TimeTag = styled.p`
    margin-left: 0;
    color: gray;
    font-size: 17px;

`;

export const TitleTag = styled.p`
    margin-left: 10px;
    color: blue;
    font-weight:800;
    font-size: 18px;

`;

export const ContextText = styled.div`
    margin-left: 10px;
    color: black;
    font-weight: 500;
    font-size: 17px;

    p{
        color:black;
    };

    h1 {
        font-size: 22px;
        font-weight: 900;

    };

    h2 {
        font-size: 20px;
        font-weight: 800;

    };

    h3 {
        font-size: 18px;
        font-weight: 700;

    };
    
`;

export const ItemNote = styled.li`
    display: flex;
    text-align: center;
    align-items: center;


`;
export const ListNotes = styled.ul`
    display: block;
    line-height: 2;
    justify-content: center;
    text-align: center;
`;


export const ViewSummaryFooter = styled.footer`
    display: block;
    padding: 0 10%;
    
`;
export const SpaceAroundContainer  = styled.div`
    display: flex;
    border-top: 1px solid black;
    /* border-bottom: 1px solid black; */
    justify-content: space-around;
    padding: 15px 30px;
`;


export const AddContainer = styled.li`
    position: relative;
    display: inline-block;
    margin: 0.5rem;
    list-style-type: none;


    input[type="text"] {
    width: 200px;
    height: 20px;
    padding-right: 50px;
    }

    input[type="submit"] {
    position:absolute;
    height: 20px;
    width: 50px;
    background: #578457;
    color: white;
    border: 0;
    -webkit-appearance: none;
    top:45px;
    right:0;
    }    
`;

export const InputAddTag = styled.input`
    display: block;
    position:absolute;
    top:45px;
    right:0;
    font-weight:700;
    
`;

