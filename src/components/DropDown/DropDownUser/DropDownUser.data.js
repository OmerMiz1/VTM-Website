import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../utils/context/UserContext';

// icons
import { faUserCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const DropDownSummaryData = () => {
	const { Logout } = useContext(UserContext);
	let history = useHistory();

	const mockFunction = () => {
		console.log(`MOCK`)
	}

	return [
		{
			title: 'Profile',
			icon: faUserCircle,
			function: () => history.push('/myHome/profile')
		},
		{
			title: 'Setting',
			icon: faCog,
			function: mockFunction
		},
		{
			title: 'Log Out',
			icon: faSignOutAlt,
			function: Logout
		}
	];

}

export default DropDownSummaryData

