import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CradContainer = styled.div`
    height: 345px;
    grid-column: span 4;
    overflow: hidden;
    z-index: 1;
    background-color: #fff;
    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.4); */
    max-width: 300px;
    position: relative;
`;

export const CradLink = styled.div`
    text-decoration: none;
    display: block;
`;

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`;

export const CardH1 = styled.a`
    color: black;
    color: ${props => props.theme.colors.darkMain}; //fix
    display: block;
    /* justify-content: center; */
    text-decoration: none;
    font-size:  ${props => props.theme.fontSizes.icon};
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover {
        white-space: pre-line;
        color: red;
        justify-content: center;
    }

`;

export const CardImgContainer = styled.a`
    width: 100%;
    height: 11em;
    display: block;
    img {
        width: 100%;
        height: 100%;
    }

`;
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    
`;
export const Taglist = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

export const IconContainer = styled.div`
    cursor:pointer;
    z-index:9;
    color: ${({ favorite }) => favorite ? '#F7D300' : 'rgba(219, 219, 208, 0.7)'};

`;
export const TagItem = styled.li`
    background-color: rgba(25, 125, 248, 0.2);
    padding: 2px 5px;
    list-style-type: none;
    margin: 0 ${props => props.theme.spacers.small};
    border-radius: 8px;
    cursor: pointer;
    
    /* overflow: hidden;
    white-space: nowrap; */
`;

export const DateSection = styled.div`
    margin: 5px;
    width: 100%;
`;


export const BottomContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(15, 15, 15, 0.19);
    padding: 0 10px;

`;
export const RatingContainer = styled.div`
    display: flex;
    color: red;
    cursor: ${({ pointer }) => pointer ? 'pointer' : 'default'};
`;

export const DateContainer = styled.div`
    display: flex;
    margin-top: 5px;
    width: 100%;
`;

export const LeftContainer = styled.div`
    color: black;
    float: right;
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
    
`;

export const LinkTag = styled(Link)`
    display: block;
    cursor: pointer;
    list-style-type: none;
    text-decoration: none;
`;