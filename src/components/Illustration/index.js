import React from 'react';
import { IllustrationImage } from './Illustration.style';

function index(props) {

    const {size, src} = props
    return (
            <IllustrationImage size={size} src={src}>
                <img src={src} alt='Illustration'></img>
            </IllustrationImage>

    );

}

export default index