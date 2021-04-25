import styled from 'styled-components';

// LogoImage , get size or default
export const IllustrationImage = styled.div`
    /* margin-top: 4px; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right:auto;

    width: ${({size}) => size ? size + "px": "1erm"};
    height: ${({size}) => size ? size + "px": "1erm"};

    img {
        width:100%;
        height:100%;
        display: flex;

        align-items: center;
        justify-content: center;
    }
`;

