//FIXME? atoms

import React from 'react';
import { IllustrationImage } from './Illustration.style';

function index({ size, src }) {
	return (
		<IllustrationImage size={size} src={src}>
			<img src={src} alt='Illustration'/>
		</IllustrationImage>
	);

}

export default index