import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ZoomIcon from  '../../../components/icons/ZoomIcon'
import {SupportSectionContainer, SupportH1, SupportImg, SupportIcon, SupportContainerImge} from './SupportSection.style'
import ImgScreenApp from './ImgScreenApp.jpg';

import {SupportData} from './data'

function SupportSection() {
    return (
        <SupportSectionContainer>
            <SupportH1>Support for all video sites.</SupportH1>
            <SupportContainerImge>
                {SupportData.map((data, index) => {
                    return(
                        <SupportIcon key={index} left={data.left} top={data.top} size={data.size}>
                            <FontAwesomeIcon key={index} color={data.color} icon={data.icon}></FontAwesomeIcon>
                        </SupportIcon>
                    )
                })} 
                <SupportIcon left='65%' top='-85px' size='100px'>
                    <ZoomIcon></ZoomIcon>
                </SupportIcon>
                <SupportImg>
                    <img src={ImgScreenApp}></img>
                </SupportImg>
            </SupportContainerImge>
        </SupportSectionContainer>
    )
}

export default SupportSection
