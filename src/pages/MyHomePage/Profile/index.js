import React, {useState} from 'react'

import EditProfileForm from '../../../components/atoms/Forms/EditProfileForm';
import {ProfileContainer} from './ProfilePage.style';


//TODO ADD all the user and put in the input
function ProfilePage() {

    const [isChangePassword, setIsChangePassword] = useState(0);

    return (
        <ProfileContainer>
            {isChangePassword ?
            <h1>bla</h1> : <EditProfileForm setChangePassword={setIsChangePassword}/>}
                
        </ProfileContainer>
    )
}

export default ProfilePage
