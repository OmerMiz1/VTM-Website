import React, {useState} from 'react'

import EditProfileForm from '../../../components/atoms/Forms/EditProfileForm';
import ChangePasswordForm from '../../../components/atoms/Forms/ChangePasswordForm';
import {ProfileContainer} from './ProfilePage.style';


//TODO ADD all the user and put in the input
function ProfilePage() {

    const [isChangePassword, setIsChangePassword] = useState(0);

    return (
        <ProfileContainer>
            {isChangePassword ?
            <ChangePasswordForm setChangePassword={setIsChangePassword}/> 
            : <EditProfileForm setChangePassword={setIsChangePassword}/>}
                
        </ProfileContainer>
    )
}

export default ProfilePage
