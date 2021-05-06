import {useContext} from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';
// icons
import {faShare, faTrash ,faInfo, faEdit } from '@fortawesome/free-solid-svg-icons';

const DropDownSummaryData = () => {

    const {deleteSummary, editSummary, ShareSummary} = useContext(SummariesContext);

    return [
        {
            title:'Share',
            icon: faShare,
            function: ShareSummary
        }, 
        {
            title:'Delete',
            icon: faTrash,
            function: deleteSummary
        },
        {
            title:'Edit',
            icon: faEdit,
            function: editSummary
        }
    ];

}

export default DropDownSummaryData

