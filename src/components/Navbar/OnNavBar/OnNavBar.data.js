// icons
import {faPlus, faUser, faBell} from '@fortawesome/free-solid-svg-icons'



// Operations Data
export const DataIcons = () => {

    const mockFun = (item) => {
        console.log(`print item -> `, item)
    }
    
    return ( 
        [
            {
                toolTipText:'Add',
                icon: faPlus,
                function: mockFun,
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
    )
} 

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

