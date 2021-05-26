import styled, {css} from "styled-components";

export const ProfileContainer = styled.section`
    padding: 2% 10%;
    display: block;
    line-height: 1.8;
    width: 100%;
    grid-column: 3/-1;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(8,1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(4,1fr);
    }

    
`;

export const TiltleProfile = styled.h1`
    margin-top: ${props => props.theme.spacers.medium};
    color: ${props=> props.theme.colors.header};
    font-size: ${props=> props.theme.fontSizes.large};
    font-weight: 800;
    border-bottom: 1px solid #cacaca;
`;

export const SectionForm = styled.div`
    margin-bottom: ${props => props.theme.spacers.medium};
    margin-top: ${props => props.theme.spacers.medium};
    font-size: ${props=> props.theme.fontSizes.medium};
    border-bottom: ${({border}) =>  border ? '1px solid #cacaca': 'none'};
    display: flex;
    text-align: center;
    text-align: left;
    flex-wrap: wrap;
    


    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 0;
    };

    label {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 2px;
        display: block;
        width: 100%;
        line-height: 1.3;
    };

    input {
        display: block;
        width: 100%;
        border: 1px solid #ebebeb;
        padding: 11px 20px;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 14px;
    };
    select {
        display: block;
        width: 100%;
        border: 1px solid #ebebeb;
        padding: 11px 20px;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 14px;
    };

    

    ${({displayFlexColume}) => displayFlexColume && css`
        flex-direction: column;
        -webkit-flex-direction: column;
        text-align: start;
        padding: 0;
    `};


    a {
        color: blue;
        font-size: ${props=> props.theme.fontSizes.small};
        margin-left: ${props => props.theme.spacers.medium};
        cursor: pointer;
        width: fit-content;

        :hover {
            color: red;
    
        }
    };
`;

export const ColumeFrom = styled.div`
    padding: 15px ;
    width: 50%;
    margin: ${({margin}) => margin ? margin : '0'};

`;

export const SectionFormSubmit = styled.div`
    justify-content: center;
    display: flex;
    font-size: 13px;
    padding: 10px;
    border: none;
    cursor: pointer;
    justify-content: space-evenly;
    margin: 0 20%;
    

    input {
        padding: 4px 20px;
        font-weight: 800;

        :hover {
            background-color: ${props=> props.theme.colors.secondLite};
        };

    };
    
`;

export const ValidsionWarnnig = styled.p`
  color:red;
  font-weight:600;
  font-size: ${props => props.theme.fontSizes.smallMobile};
`;

