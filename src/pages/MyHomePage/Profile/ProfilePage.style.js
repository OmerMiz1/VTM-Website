import styled from "styled-components";

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
