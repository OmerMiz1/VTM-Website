import React from 'react';
import CardSummary from '../../../components/Card/CardSummary';


//TODO change
import {MockData} from '../MySummary.data';

import {MainPageContainer, MyHomePageH1,
    CardSummarysContainers, CardItemContainer} from '../MyHomePage.style';


function MySummarys() {

    return (
        <> 
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
       </>
    )
}

export default MySummarys;


