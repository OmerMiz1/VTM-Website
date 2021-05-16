// icons
import {faShare, faTrash , faEdit, faPrint } from '@fortawesome/free-solid-svg-icons';

const HeaderIconsData = () => {
    
    const mockFunction = title => {
        console.log(`mock! ---> clicked on - `, title)
    }

    return [
        {
            icon: faPrint,
            color:'gray',
            margin:'0 10px',
            title: 'print',
            function: mockFunction
        }, 
        {
            icon: faShare,
            color:'gray',
            margin:'0 10px',
            title: 'share',
            function: mockFunction
        }, 
        {
            icon: faEdit,
            color:'gray',
            margin:'0 10px',
            title: 'edit',
            function: mockFunction
        }, 
        {
            icon: faTrash,
            color:'gray',
            margin:'0 10px',
            title: 'remove',
            function: mockFunction
        }
    ];

}

export default HeaderIconsData


