import React, { useState, useContext } from 'react'
import EditProfileForm from '../../../components/atoms/forms/EditProfileForm';
import ChangePasswordForm from '../../../components/atoms/forms/ChangePasswordForm';
import { ProfileContainer } from './ProfilePage.style';
import { UserContext } from '../../../utils/context/UserContext';


function ProfilePage() {
	const [isChangePassword, setIsChangePassword] = useState(0);
	const {userAttributes, setUserAttributes, EditProfile} = useContext(UserContext);

	return (
		<ProfileContainer>
			{isChangePassword ?
				<ChangePasswordForm setChangePassword={setIsChangePassword} />
				: <EditProfileForm 
				setChangePassword={setIsChangePassword}
				userAttributes={userAttributes}
				EditProfile={EditProfile} />}
		</ProfileContainer>
	)
}

export default ProfilePage;