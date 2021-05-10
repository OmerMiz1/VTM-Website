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
        link: '/myHome/MyFrinds'
    },
    {
        title:'Settings',
        icon: faTools,
        link: '/myHome/Settings'
    },

    {
        spanText:'Fillters',
        link: '#'

    },
    
    {
        title:'My Tags',
        icon: faTags,
        link: '/myHome/mySummaries/myTags'
    }, 
    {
        title:'Favorites',
        icon: faStar,
        link: '/myHome/filter/favorites'
    },
    {
        title:'Important',
        icon: faExclamationCircle,
        link: '/myHome/filter/important'
    },
    {
        title:'To do',
        icon: faCheckSquare,
        link: '/myHome/filter/todo'
    }
]
