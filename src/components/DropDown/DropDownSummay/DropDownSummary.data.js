import {useContext} from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';

import { useHistory, useParams } from "react-router-dom";

// icons
import {faShare, faTrash , faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

const DropDownSummaryData = () => {

    const {deleteSummary, updateSummary, ShareSummary} = useContext(SummariesContext);
    
    let history = useHistory();
    let {page} = useParams();

    const viewSummary = (id) => {
        history.push('/myHome/' + page +'/view/' + id, id);    
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
            function: deleteSummary
        }
    ];

}

export default DropDownSummaryData

