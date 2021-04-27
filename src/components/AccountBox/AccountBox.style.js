import styled from 'styled-components';

export const BoxContainer = styled.section`

    width: 400px;
    min-height: 680px;
    display:flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: red;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 500px) {
        width: 280px;
        min-height: 550px;
    }
    
`;


export 