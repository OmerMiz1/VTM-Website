import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ZoomIcon from  '../../../components/icons/ZoomIcon'
import {SupportSectionContainer, SupportH1, SupportP, SupportImg,
     SupportIcon, SupportContainerImge} from './SupportSection.style'
import ImgScreenApp from './ImgScreenApp.jpg';
import {SupportFaData, SupportSvgData} from './Support.data'

function SupportSection() {
    return (
        <SupportSectionContainer>
            <SupportH1>Support for all video sites</SupportH1>
            <SupportP> Tag your videos from any website.<br/>
            Manage and organize all your video content in one place.
            Not related to the site where it was published.
            </SupportP>
            <SupportContainerImge>
                {SupportFaData.map((data, index) => {
                    return(
                        <SupportIcon key={index} left={data.left} top={data.top} size={data.size}>
                            <FontAwesomeIcon key={index} color={data.color} icon={data.icon}></FontAwesomeIcon>
                        </SupportIcon>
                    )
                })} 
                <SupportIcon left={SupportSvgData.left} top={SupportSvgData.top}
                 size={SupportSvgData.size}>
                    <ZoomIcon/>
                </SupportIcon>
                <SupportImg>
                    <img src={ImgScreenApp} alt="ImgScreenApp"></img>
                </SupportImg>
            </SupportContainerImge>
        </SupportSectionContainer>
    )
}

export default SupportSection
