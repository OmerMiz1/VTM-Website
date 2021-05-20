// icons
import {faEye,  faShare, faTrash , faEdit, faPrint,
    faCheck, faPlus, faPencilAlt, faTimes, faMinus } from '@fortawesome/free-solid-svg-icons';

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
    minus:
    {
        icon: faMinus,
        color:'gray', //TODO
        margin:'0 10px',
        title: 'minus',
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
        color:'#f25457',
        margin:'0 0 0 10px',
        title: 'Times',
        function: mockFunction
    },
    check:
    {
        icon: faCheck,
        color:'darkslategrey',
        margin:'0 0 0 10px',
        title: 'check',
        function: mockFunction
    }

};
    

const HeaderIconsData = (mode, modeToggle) => {
    
    if (mode === 'edit') {
        return [
            {
                icon: faEye,
                color:'black',
                margin:'0 50px',
                title: 'view',
                function: modeToggle
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
            function: modeToggle
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


