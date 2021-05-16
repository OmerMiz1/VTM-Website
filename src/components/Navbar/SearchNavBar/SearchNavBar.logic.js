import {useState, useContext} from 'react';
import {FilterMySummariesContext} from '../../../utils/context/FilterMySummariesContext';


const SearchNavBarLogic = () => {

    const {SearchFillterData} = useContext(FilterMySummariesContext)


    const [searchText, setSearchText] = useState('');

    const handelChnge = value => {
        setSearchText(value);
    }

    const startSearch = () => {
        console.log(`search.... `, searchText) //TODO delete
        SearchFillterData(searchText);
    }   
    

  
    return{
        searchText, handelChnge, startSearch
       
    }
};

export default SearchNavBarLogic;