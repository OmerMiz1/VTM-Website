// icons
import {faUserCircle ,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AccountApi from '../../AccountBox/Account.Api';

const DropDownSummaryData = () => {
    const {Logout} = AccountApi();

    const mockFunction = () => {
        console.log(`mock! ---> clicked on - `)
    }

    const logout = () => {
        console.log('logout');
        Logout();
    }

    return [
        {
            title:'Profile',
            icon: faUserCircle,
            function: mockFunction
        }, 
        {
            title:'Setting',
            icon: faCog,
            function: mockFunction
        },
        {
            title:'Log Out',
            icon: faSignOutAlt,
            function: logout
        }
    ];

}

export default DropDownSummaryData

