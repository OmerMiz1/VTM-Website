import {useState, useEffect} from 'react';


const MyHomePageFilters = (mySummaries, setMyFilterSummaries)  => {

    const [myFilterSummariesTags, setMyFilterSummariesTags] = useState([]);



    useEffect(() => {
        getAllFilterTags(mySummaries);
    }, [mySummaries])

    const getAllFilterTags = (summaries) => {
        console.log(`getAllFilterTags called`);
        const allTags = new Set();
        summaries.forEach((summary) => {
            summary.tags.forEach((tag) => {
                allTags.add(tag)
            })
        })
        setMyFilterSummariesTags(allTags)
    }




    // Filter summaries by all the data in the object
    const SearchFillterData = value => {
    
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
        setMyFilterSummaries(mySummaries);
    } else {
        const fillteredData = mySummaries.filter( item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            });
        });
        getAllFilterTags(fillteredData);
        setMyFilterSummaries(fillteredData);
    }

}
    

    return {
        SearchFillterData, myFilterSummariesTags
    }
} 


export default MyHomePageFilters;