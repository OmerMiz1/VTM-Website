// icons
import {
	faBookOpen, faGifts, faGlobe, faUserFriends, faTools,
	faTags, faStar, faExclamationCircle, faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

// Operations Data
export const DataOperations = [
	{
		title: 'My Summaries',
		icon: faBookOpen,
		link: '/myHome/mySummaries'
	},
	{
		title: 'Discover',
		icon: faGlobe,
		link: '/myHome/discover'
	},
	{
		title: 'Shared With me',
		icon: faGifts,
		link: '/myHome/sharedWithMe'
	},
	{
		title: 'Friends',
		icon: faUserFriends,
		link: '/myHome/myFriends'
	},
	{
		title: 'Settings',
		icon: faTools,
		link: '/myHome/settings'
	},
	{
		spanText: 'Filters',
		link: '#'
	},
	{
		title: 'My Tags',
		icon: faTags,
		link: '/myHome/mySummaries/myTags'
	},
	{
		title: 'Favorites',
		icon: faStar,
		link: '/myHome/mySummaries/filter/favorite/true'
	},
	{
		title: 'Important',
		icon: faExclamationCircle,
		link: '/myHome/mySummaries/filter/tags/important'
	},
	{
		title: 'Todo',
		icon: faCheckSquare,
		link: '/myHome/mySummaries/filter/tags/todo'
	}
]
