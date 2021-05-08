// icons
import {faPlus, faUser, faBell} from '@fortawesome/free-solid-svg-icons'

// Operations Data
export const DataIcons = [
    {
        toolTipText:'Add',
        icon: faPlus,
    }, 
    {
        toolTipText:'Notifications',
        icon: faBell,
    },
    
    {
        icon: faUser,
        toolTipText:'User',
        separator:true, 
        
    }
]

export const DataLeftLinks = [
    {
        title:'My Summaries',
        link: '/myHome/mySummaries',
    },
    {
        title:'Discover',
        link: '/myHome/Discover',
    }
]

