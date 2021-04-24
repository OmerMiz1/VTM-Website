import styled from 'styled-components';

// Container of the logo style
export const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

// LogoImage , get size or default
export const LogoImage = styled.div`
    /* margin-top: 4px; */
    display: flex;

    align-items: center;
    justify-content: center;
    

    width: ${({size}) => size ? size + "px": "1erm"};
    height: ${({size}) => size ? size + "px": "1erm"};

    img {
        width:100%;
        height:100%;
        
    }
`;

// LogoTitle , get size and text color or default
export const LogoTitle = styled.h2`
    margin: 0px;
    font-size: ${({size}) => size ? Math.floor(size/3) + "px" : "25px" };
    color: ${({ color }) => (color ? color : "#fff")};
    font-weight:600;
    margin-left: 6px;
`;

