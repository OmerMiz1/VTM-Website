import React, { useEffect } from 'react';
import UserData from './data/User.data';
import UserApi from './api/User';
import { UserContext } from './utils/context/UserContext';

export default function Root({children}) {
	const { userAttributes, setUserAttributes, history } = UserData();
	const { 
		EditProfile,
		ConfirmSignUpSubmit,
		ResendConfirmSignUp,
		Login,
		ConfirmResetPassword,
		ResendResetPassword,
		ResetPassword,
		Signup,
		ChangePassword,
		Logout,
	} = UserApi(userAttributes, setUserAttributes, history);

	return (
		<UserContext.Provider value={{ userAttributes, setUserAttributes, EditProfile, ConfirmSignUpSubmit,
									ResendConfirmSignUp, Login, ConfirmResetPassword, ResendResetPassword,
									ResetPassword, Signup, ChangePassword, Logout }}>
			{children}
		</UserContext.Provider>
	)
}
