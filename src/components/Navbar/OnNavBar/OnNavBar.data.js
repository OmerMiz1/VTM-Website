// icons
import {useState} from 'react';
import {faPlus, faUser, faBell} from '@fortawesome/free-solid-svg-icons';

export const DataLeftLinks = page => {
    return ([
        {
            title:'My Summaries',
            link: '/myHome/mySummaries',
            boarder: (page === 'mySummaries') ? 'true' : undefined,
        },
        {
            title:'Discover',
            link: '/myHome/Discover',
            boarder: (page === 'Discover') ?  'true' : undefined,

        }
    ])
}


function OnNavBarData() {
    //TODO DELETE
    const [showForm, setShowForm] = useState(false);
    //TODO DELETE
    const toggleShow  = () => {
        setShowForm(!showForm);
    }

    const mockFun = () => {
        console.log(`item clicked -> `)
    }


    // Operations Data
    const DataIcons = [
    {
        toolTipText:'Add',
        icon: faPlus,
        function: toggleShow,
    }, 
    {
        toolTipText:'Notifications',
        icon: faBell,
        function: mockFun,

    },
    {
        icon: faUser,
        toolTipText:'User',
        separator:true, 
        function: mockFun,
        }
    ]


    return {
        DataIcons, showForm , toggleShow
    }
}

export default OnNavBarData




