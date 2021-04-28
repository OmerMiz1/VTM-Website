import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


// Container of the logo style
export const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 8px;
    
`;

// LogoImage , get size or default
export const LogoImage = styled(Link)`
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
export const LogoTitle = styled(Link)`
    margin: 0px;
    font-size: ${({size}) => size ? Math.floor(size/2.5) + "px" : "20px" };
    color: ${({ color }) => (color ? color : "#fff")};
    font-weight:600;
    margin-left: 6px;
    line-height: 16px;
    text-align: center;
    text-decoration: none;

    
`;

