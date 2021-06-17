import { useState } from 'react';
import { faPlus, faUser, faBell } from '@fortawesome/free-solid-svg-icons'; // Icons

export const DataLeftLinks = page => {
	return ([
		{
			title: 'My Summaries',
			link: '/myHome/mySummaries',
			border: (page === 'mySummaries') ? 'true' : undefined,
		},
		{
			title: 'Discover',
			link: '/myHome/discover',
			border: (page === 'discover') ? 'true' : undefined,

		}
	])
}

function OnNavBarData() {
	const [showForm, setShowForm] = useState(false); //DELETEME
	const toggleShow = () => {  //DELETEME
		setShowForm(!showForm);
	}

	const mockFun = () => { //DELETEME
		console.log(`MOCK`)
	}

	// Operations Data
	const DataIcons = [
		{
			toolTipText: 'Add',
			icon: faPlus,
			function: toggleShow,
		},
		{
			toolTipText: 'Notifications',
			icon: faBell,
			function: mockFun,
		},
		{
			icon: faUser,
			toolTipText: 'Account',
			separator: true,
			function: mockFun,
		}
	];

	return {
		DataIcons, showForm, toggleShow
	};
}

export default OnNavBarData;




