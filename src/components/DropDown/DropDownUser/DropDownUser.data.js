// icons
import { faUserCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AccountApi from '../../AccountBox/Account.Api';
import { useHistory } from 'react-router-dom';

const DropDownSummaryData = () => {
	const { Logout } = AccountApi();
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

