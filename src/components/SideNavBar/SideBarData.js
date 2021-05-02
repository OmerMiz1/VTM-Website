// icons
import {faBookOpen, faGifts ,faGlobe, faUserFriends, faTools,
faTags, faStar, faExclamationCircle, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// Operations Data
export const DataOperations = [
    {
        title:'My Summaries',
        icon: faBookOpen,
        link: '/mySummaries'
    }, 
    {
        title:'Discover',
        icon: faGlobe,
        link: '/Discover'
    },
    {
        title:'Shared With me',
        icon: faGifts,
        link: '/SharedWithMe'
    },
    {
        title:'My Frinds',
        icon: faUserFriends,
        link: '/MyFrinds'
    },

    {
        spanText:'Fillters',
    },

    {
        title:'Settings',
        icon: faTools,
        link: '/Settings'
    },
    
    {
        title:'My Tags',
        icon: faTags,
        link: '/Mytags'
    }, 
    {
        title:'Favorites',
        icon: faStar,
        link: '/Favorites'
    },
    {
        title:'Important',
        icon: faExclamationCircle,
        link: '/SharedWithMe'
    },
    {
        title:'To do',
        icon: faCheckSquare,
        link: '/Todo'
    }
]
