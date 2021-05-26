// icons
import {faUserCircle ,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';

const DropDownSummaryData = () => {
    const mockFunction = title => {
        console.log(`mock! ---> clicked on - `, title)
    }

    let history = useHistory();



    return [
        {
            title:'Profile',
            icon: faUserCircle,
            function: () => history.push('/myHome/Profile')
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

