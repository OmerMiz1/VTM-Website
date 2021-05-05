import {useState} from 'react';


const DropDownSummaryLogic = () => {

    const deleteSummary = (id) => {
        console.log(`delete id`, id)

    }

    const editSummary = (id) => {
        console.log(`edit id`, id)


    }

    const ShareSummary = (id) => {

        console.log(`sharing id`, id)

    }
    

    return {
        deleteSummary, editSummary, ShareSummary
    }

}

export default DropDownSummaryLogic

