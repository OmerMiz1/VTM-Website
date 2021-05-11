import {useState, useEffect} from 'react';


const MyHomePageFilters = (mySummaries, setMyFilterSummaries)  => {

    const [myFilterSummariesTags, setMyFilterSummariesTags] = useState([]);

   useEffect(() => {
        getAllFilterTags(mySummaries);
    }, [mySummaries])

    const getAllFilterTags = (summaries) => {
        const allTags = new Set();
        summaries.forEach((summary) => {
            summary.tags.forEach((tag) => {
                allTags.add(tag)
            })
        })
        setMyFilterSummariesTags(allTags)
    }


    const UnFillter = () => {
        setMyFilterSummaries(mySummaries);
    }




    // Filter summaries by all the data in the object
    const SearchFillterData = value => {
    
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
        UnFillter();
    } else {
        const fillteredData = mySummaries.filter( item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            });
        });
        // save
        setMyFilterSummaries(fillteredData);
        }
    }

    // Filter summaries by attribute and value
    const FillterDataByAttribute = (attribute, value) => {

        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            UnFillter()
        } else {
            const fillteredData = mySummaries.filter( item => {
                return Object.keys(item).some( _ => {
                    return item[attribute].toString().toLowerCase().includes(lowerCaseValue);
                });
            });
            setMyFilterSummaries(fillteredData);
        }
    }
    

    return {
        SearchFillterData, myFilterSummariesTags, FillterDataByAttribute, UnFillter
    }
} 


export default MyHomePageFilters;