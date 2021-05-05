// icons
import {faShare, faTrash ,faInfo, faEdit } from '@fortawesome/free-solid-svg-icons';
import DropDownSummaryLogic from './DropDownSummary.logic'

const {deleteSummary, editSummary, ShareSummary} = DropDownSummaryLogic();

//TODO cahge icons
export const DropDownMenuData =  [
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
    },
    {
        title:'Info',
        icon: faInfo,
        function: editSummary
    }
]