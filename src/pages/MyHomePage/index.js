import React from 'react';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import CardSummary from '../../components/Card/CardSummary';
//TODO chge
import {MockData} from './MockData';

import {MyHomePageContainer, MainPageContainer, MyHomePageH1,
    CardSummarysContainers, CardItemContainer} from './MyHomePage.style';


function MyHomePage() {
    
    return (
        <>
            <OnNavbar useTransparent ={false} />
            <MyHomePageContainer>
                <SideNavBar/>
                <MainPageContainer>
                    <MyHomePageH1>My Summary:</MyHomePageH1>
                    <CardSummarysContainers>
                        {MockData.map((card) => {
                            return(
                                <CardItemContainer key={card.id}>
                                    <CardSummary
                                    imgUrl= {card.imgUrl}
                                    title= {card.title}
                                    createdTime= {card.createdTime}
                                    editTime= {card.editTime}
                                    likes = {card.likes}
                                    autorName= {card.autorName}
                                    url= {card.url}
                                    tags = {card.tags}
                                    ></CardSummary>
                                </CardItemContainer>
                            )
                        })}
                    </CardSummarysContainers>                    
                </MainPageContainer>
                


            </MyHomePageContainer>
       </>
    )
}

export default MyHomePage;


