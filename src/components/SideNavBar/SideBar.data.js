// icons
import {faBookOpen, faGifts ,faGlobe, faUserFriends, faTools,
faTags, faStar, faExclamationCircle, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// Operations Data
export const DataOperations = [
    {
        title:'My Summaries',
        icon: faBookOpen,
        link: '/myHome/mySummaries'
    }, 
    {
        title:'Discover',
        icon: faGlobe,
        link: '/myHome/Discover'
    },
    {
        title:'Shared With me',
        icon: faGifts,
        link: '/myHome/SharedWithMe'
    },
    {
        title:'My Frinds',
        icon: faUserFriends,
        link: '/MyFrinds'
    },

    {
        spanText:'Fillters',
        link: '#'

    },

    {
        title:'Settings',
        icon: faTools,
        link: '/Settings'
    },
    
    {
        title:'My Tags',
        icon: faTags,
        link: '/myHome/Mytags'
    }, 
    {
        title:'Favorites',
        icon: faStar,
        link: '/myHome/filter/Favorites'
    },
    {
        title:'Important',
        icon: faExclamationCircle,
        link: '/myHome/filter/Important'
    },
    {
        title:'To do',
        icon: faCheckSquare,
        link: '/myHome/filter/Todo'
    }
]
