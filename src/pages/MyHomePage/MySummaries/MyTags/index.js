import React, { useContext} from 'react';
import {SummariesContext} from '../../../../utils/context/SummariesContext';
import {FilterMySummariesContext} from '../../../../utils/context/FilterMySummariesContext';

import LoadingComponent from '../../Loading';

import {MainPageContainer, MyHomePageH1} from '../../MyHomePage.style';
import {ListOfButtonsTags, ItemButtonTag, ButtonTag, LinkTag} from './MyTags.style';



function MyTags() {

    const {isMySummaryEmpty, isLoading } = useContext(SummariesContext);
    const { myFilterSummariesTags} = useContext(FilterMySummariesContext);


    return(
        <MainPageContainer>
            <MyHomePageH1>My Tags:</MyHomePageH1>
            <LoadingComponent/>
    
            {!isMySummaryEmpty && !isLoading &&
                <ListOfButtonsTags margin='2% 8%'>
                    {Array.from(myFilterSummariesTags).map( (tag) => {
                        return (
                            <ItemButtonTag key={tag}>
                                 <LinkTag to={'/myHome/mySummaries/filter/tags/' + tag }>
                                    <ButtonTag padding="5px 10px">{tag}</ButtonTag>
                                 </LinkTag>
                            </ItemButtonTag>                                
                    )}) 
                    }
                </ListOfButtonsTags>
            }
        
      
            
        </MainPageContainer>
    )
}

export default MyTags;


