import {useState, useContext, useEffect} from 'react';
import {FilterMySummariesContext} from '../../../utils/context/FilterMySummariesContext';
import {useParams} from 'react-router-dom';


const SearchNavBarLogic = () => {
    const params = useParams()

    const {SearchFillterData} = useContext(FilterMySummariesContext)

    const [isHidden, seIsHidden] = useState(0);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        seIsHidden(['Settings', 'Profile'].includes(params.page)? 1 : 0)
    },[params])


    const handelChnge = value => {
        setSearchText(value);
    }

    const startSearch = () => {
        console.log(`params`, params); //TODO delete


        switch(params.page) {
            case 'mySummaries':
                console.log(`search.... `, searchText); //TODO delete
                SearchFillterData(searchText);
                break;
            case 'SharedWithMe':
                console.log(`search.... in SharedWithMe`, searchText); //TODO delete
                break;
            case 'Discover':
                console.log(`search.... in Discover`, searchText); //TODO delete
                break;
        } 
    }   
    

  
    return{
        searchText, handelChnge, startSearch, isHidden
       
    }
};

export default SearchNavBarLogic;