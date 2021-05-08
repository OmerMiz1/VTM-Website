// icons
import {faUserCircle ,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const DropDownSummaryData = () => {
    const mockFunction = title => {
        console.log(`mock! ---> clicked on - `, title)
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
            function: mockFunction
        }
    ];

}

export default DropDownSummaryData

