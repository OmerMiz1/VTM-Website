import React, { useContext} from 'react';
// import OnNavbar from '../../../../components/Navbar/OnNavBar';
// import SideNavBar from '../../../../components/SideNavBar';
// import {MyHomePageContainer} from '../../MyHomePage.style';
import { useParams } from 'react-router-dom';



function MyTags() {

    const {action} = useParams();
    console.log(`a`, action)

    return(
        <div>
                <div>
                    <h1> My tags</h1>
                    <ul>
                        <li>
                            <h2>shon1</h2>
                        </li>
                        <li>
                            <h2>shon2</h2>
                        </li>
                        <li>
                            <h2>shon3</h2>
                        </li>
                    </ul>
                </div>
                {/* </MyHomePageContainer> */}

        </div>
    )
   
}

export default MyTags;


