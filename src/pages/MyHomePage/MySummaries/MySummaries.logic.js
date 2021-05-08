import {useState } from 'react';

const MySummariesLogic = ()  => {
    // State how much summaries to show in the page..
    const [amountSummariesShow, setAmountSummariesShow] = useState(9);

    // Add more 9 summaries to the page
    const ShowMoreSummaries = () => {
        setAmountSummariesShow((prevValue) => prevValue + 9);
    };


    return {
        ShowMoreSummaries, amountSummariesShow,
    }
} 


export default MySummariesLogic;





