import React, { useContext} from 'react';
import {SummariesContext} from '../../../../utils/context/SummariesContext';
import {FilterMySummariesContext} from '../../../../utils/context/FilterMySummariesContext';

import LoadingComponent from '../../Loading';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';

import {MainPageContainer, MyHomePageH1} from '../../MyHomePage.style';



function MyTags() {

    const {isMySummaryEmpty, isLoading } = useContext(SummariesContext);
    const { myFilterSummariesTags} = useContext(FilterMySummariesContext);


    return(
        <MainPageContainer>
            <MyHomePageH1>My Tags:</MyHomePageH1>
            <LoadingComponent/>
    
            {!isMySummaryEmpty && !isLoading &&
                <ListOfButtonsTags margin='2% 8%'>
                    {Array.from(myFilterSummariesTags).map((tag, index) => {
                        return (
                            <TagsButton fontSize="22px" key={index} keyId={index} padding="5px 10px" text={tag} 
                            link={'/myHome/mySummaries/filter/tags/' + tag }/>
                    )}) 
                    }
                </ListOfButtonsTags>
            }
        </MainPageContainer>
    )
}

export default MyTags;


