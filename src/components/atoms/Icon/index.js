import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const IconItem = styled.div`
    margin: ${({margin}) => margin ? margin : '0'};
    font-size: ${({fontSize}) => fontSize ? fontSize : '25px'};
    cursor: pointer;
    display: inline-table;
    &:hover {
        filter: contrast(0.6)
    }
`


function Icon({className, margin, color, icon, fontSize, funOnClick}) {

    return (
    <IconItem className={className} margin ={margin} fontSize={fontSize} onClick={funOnClick}>
        <FontAwesomeIcon color={color} icon={icon}></FontAwesomeIcon>
    </IconItem>
    )
}

export default Icon
