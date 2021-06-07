import React, { useState } from 'react'
import EditProfileForm from '../../../components/atoms/forms/EditProfileForm';
import ChangePasswordForm from '../../../components/atoms/forms/ChangePasswordForm';
import { ProfileContainer } from './ProfilePage.style';


function ProfilePage() {
	const [isChangePassword, setIsChangePassword] = useState(0);

	return (
		<ProfileContainer>
			{isChangePassword ?
				<ChangePasswordForm setChangePassword={setIsChangePassword} />
				: <EditProfileForm setChangePassword={setIsChangePassword} />}
		</ProfileContainer>
	)
}

export default ProfilePage;