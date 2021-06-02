import React, {useState} from 'react';
import {SignupForm} from '../AccountForms/SignupForm';
import {ConfirmSignUp} from '../AccountForms/ConfirmSignUp';

function SingnUpMannger({isConfirm, setIsConfirm}) {
    
    const [userData, setUserData] = useState([]);

    return (
        <>
        {
            isConfirm ? <ConfirmSignUp userData={userData}/> :
            <SignupForm setUserData={setUserData} setIsConfirm={setIsConfirm}/>
        }
        </>
    )
}

export default SingnUpMannger
