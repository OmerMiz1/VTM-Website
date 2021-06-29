import React, { useEffect } from 'react';
import UserData from './data/User.data';
import UserApi from './api/User';
import { UserContext } from './utils/context/UserContext';
import { Auth } from 'aws-amplify';


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

	useEffect(()=> {
		console.log('fetching user attributes');
		Auth.currentAuthenticatedUser()
		.then(user => {
			const attributes = user.attributes; 
			attributes.username = user.username; // Add username to attrs
			delete attributes.sub; // Remove UID
			delete attributes.email_verified; // Remove bool
	
			setUserAttributes(attributes);
		})
		.catch(error => {
			console.log('error:', error); //DELETEME
		})
	}, [])

	return (
		<UserContext.Provider value={{ userAttributes, setUserAttributes, EditProfile, ConfirmSignUpSubmit,
									ResendConfirmSignUp, Login, ConfirmResetPassword, ResendResetPassword,
									ResetPassword, Signup, ChangePassword, Logout }}>
			{children}
		</UserContext.Provider>
	)
}
