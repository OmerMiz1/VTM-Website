import React from 'react';
import { BrandLogoContainer, LogoImage, LogoTitle } from './BrandLogo.style';
import MyLogo from '../../images/logos/video_tag_icon_128.png'

function index({ size, color }) {
	return (
		<BrandLogoContainer>
			<LogoImage to='/' size={size}>
				<img src={MyLogo} alt='my logo'></img>
			</LogoImage>
			<LogoTitle to='/' size={size} color={color}>Video Tag<br />Manager</LogoTitle>
		</BrandLogoContainer>
	);

}

export default index;