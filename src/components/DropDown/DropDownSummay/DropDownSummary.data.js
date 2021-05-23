import {useContext} from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';

import { useHistory, useParams } from "react-router-dom";


// icons
import {faShare, faTrash , faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

const DropDownSummaryData = () => {

    const {deleteSummary, updateSummary, ShareSummary} = useContext(SummariesContext);
    
    let history = useHistory();
    let {page} = useParams();

    
    const viewSummary = (sid) => {
        history.push('/myHome/' + page +'/view/' + sid, sid);    
    }


    //TODO ceate styled one and move to util *2
    const confirmDelete = (sid) => {
        var ans = window.confirm("Are you sure you want to delete this summary?");
        if (ans === true) {
            deleteSummary(sid);
        }
    }

    return [
        {
            title:'Share',
            icon: faShare,
            function: ShareSummary
        }, 
        {
            title:'View',
            icon: faEye,
            function: viewSummary
        },
        {
            title:'Edit',
            icon: faEdit,
            function: updateSummary
        },
        {
            title:'Delete',
            icon: faTrash,
            function: confirmDelete
        }
    ];

}

export default DropDownSummaryData

