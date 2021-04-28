import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  
  /* box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19); */
`;

export const MutedLink = styled.div`
  font-size: 15px;
  color: #2C7CD4; //fix?
  font-weight: 590;
  text-decoration: none;
  @media screen and (max-width:500px) {
    font-size: 13px;
  }

`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: #2C7CD2;
  font-weight: 600;
  text-decoration: none;
  margin: 0 8px;
  @media screen and (max-width:500px) {
    font-size: 13px;
  }
`;


// input form style - size border hove and select 
export const Input = styled.input`
  width: 100%;
  height: 46px; 
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  //import for save style at all timr
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 18px;
  font-weight:600;
  margin: ${({margin})=> margin? margin: "0" };
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);

  &::placeholder {
    color: rgba(200, 200, 200, 21); 
  }
  /* &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  } */
  &:focus {
    outline: none;
    border-bottom: 2px solid #2C7CD4;
  }

  @media screen and (max-width:500px) {
    font-size: 16px;
    height: 42px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 18px; //fix
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #2B2E7F;
  background: linear-gradient(
    58deg,
    #2C7CD4 10%,
    #2B2E7F 100%
  );
  &:hover {
    filter: brightness(1.2);
  }
`;

export const MrginSpanHidth= styled.span`
    width: ${({width}) => width? width: '0px'};
`;

export const MrginSpanHeight= styled.span`
    height: ${({height}) => height? height: '0px'};
`

