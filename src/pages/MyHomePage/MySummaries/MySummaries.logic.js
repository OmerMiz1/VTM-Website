import {useState, useContext, useEffect } from 'react';
import {useParams, useRouteMatch } from 'react-router-dom';
import {FilterMySummariesContext} from '../../../utils/context/FilterMySummariesContext';




const MySummariesLogic = ()  => {
    const { FillterDataByAttribute, UnFillter} = useContext(FilterMySummariesContext);


    // State how much summaries to show in the page..
    const [amountSummariesShow, setAmountSummariesShow] = useState(9);

    // Add more 9 summaries to the page
    const ShowMoreSummaries = () => {
        setAmountSummariesShow((prevValue) => prevValue + 9);
    };

    const {filter, name} = useParams();

    // const {url, path} = useRouteMatch();
    // console.log(`display, filter, name ->  `, display, filter, name); //TODO delet 
    // console.log(`111111111url , path ,->  `, url, path); //TODO delet


    useEffect(() => {
        if (filter && name) {
            try {
                console.log(`FillterDataByAttribute!!!!!!!!`)//TODO delete
                FillterDataByAttribute(filter, name);
            } catch(err) {
                UnFillter()
            }
        } else {
            console.log(`un fillter`) //TODO delete
            UnFillter()
        }
    }, [filter, name])


   

    return {
        ShowMoreSummaries, amountSummariesShow,
    }
} 


export default MySummariesLogic;





