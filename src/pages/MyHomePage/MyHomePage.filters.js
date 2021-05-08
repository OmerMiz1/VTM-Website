

const MyHomePageFilters = (mySummaries, setMyFilterSummaries)  => {


    // Filter summaries by all the data in the object
    const SearchFillterData = value => {
    
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
        console.log(`false - lowerCaseValue`, lowerCaseValue);
        setMyFilterSummaries(mySummaries);
    } else {
        const fillteredData = mySummaries.filter( item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            });
        });
        setMyFilterSummaries(fillteredData);
    }

}
    

    return {
        SearchFillterData
    }
} 


export default MyHomePageFilters;