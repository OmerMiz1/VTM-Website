import {useState } from 'react';

const MyHomePageLogic = ()  => {

    const [amountSummariesShow, setAmountSummariesShow] = useState(9);

    //view more.. 
    const ShowMoreSummaries = () => {
        setAmountSummariesShow((prevValue) => prevValue + 9);
    };

    return {
        ShowMoreSummaries, amountSummariesShow
    }
} 


export default MyHomePageLogic;