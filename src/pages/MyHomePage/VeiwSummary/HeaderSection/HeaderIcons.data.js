// icons
import {faEye,  faShare, faTrash , faEdit, faPrint, faPlus, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const mockFunction = title => {
    console.log(`mock! ---> clicked on - `, title)
}

export const EditIcons = {
    plus:
    {
        icon: faPlus,
        color:'#578457', //TODO
        margin:'0 10px',
        title: 'add',
        function: mockFunction
    },
    pen:
    {
        icon: faPencilAlt,
        color:'darkslategrey', //TODO
        margin:'0 0 0 10px',
        title: 'pen',
        function: mockFunction
    },
    times:
    {
        icon: faTimes,
        color:'red',
        margin:'0 0 0 10px',
        title: 'Times',
        function: mockFunction
    }

};
    

const HeaderIconsData = (mode) => {
    
    if (mode.mode === 'edit') {
        return [
            {
                icon: faEye,
                color:'black',
                margin:'0 50px',
                title: 'view',
                function: mode.toggleMode
            }
        ]
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
            function: mode.toggleMode
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


