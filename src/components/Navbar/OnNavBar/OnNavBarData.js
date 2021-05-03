// icons
import {faSearch, faPlus, faUser, faBell} from '@fortawesome/free-solid-svg-icons'



// Operations Data
export const DataIcons = [
    {
        toolTipText:'Search',
        icon: faSearch,
    }, 
    {
        toolTipText:'Add',
        icon: faBell,
    },
    {
        toolTipText:'Notifications',
        icon: faPlus,
    },
    {
        icon: faUser,
        toolTipText:'User',
        separator:true
        
    }
]

export const DataLeftLinks = [
    {
        title:'My Summaries',
        link: '/myHome',
    },
    {
        title:'Discover',
        link: '/Discover',
    }
]