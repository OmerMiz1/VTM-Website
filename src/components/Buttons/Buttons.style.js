import styled from 'styled-components';

// Sing Up Button style -> get padding, font size, color, bg-color
export const SingUpBtn = styled.button`
font-size: ${({fontSize}) => fontSize ? fontSize: '1.4rem'};
padding: ${({padding}) => padding ? padding: '0.7rem 2.8rem'};
color: ${({color}) => color? color:'rgb(30,138,255)'};
background-color: ${({backgroundColor}) => backgroundColor? backgroundColor:'#d1d5e8'};
border: none;
font-weight: bold;
display:block;
margin-left: auto;
margin-right: auto;
transition: 0.2s ease-out;
border-radius: 5px;
outline: none;
font-weight: 1000;
cursor: pointer;
margin-bottom: 6px;

&:hover {
    background-color: ${({backgroundColorHover}) => backgroundColorHover? backgroundColorHover:'#b3b7c8'};
    transition: 0.2s ease-in;
    outline: none;

}
`;
