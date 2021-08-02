/* global chrome */

import Amplify, { Auth } from 'aws-amplify';
import { ObjectStr } from '../utils/function/Strings';

Amplify.configure({
	"aws_userPools_id": "eu-central-1_gxX97wEqr",
	"aws_userPools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o"
})

const UserApi = (userAttributes, setUserAttributes, history) => {
	const mySummariesPath = "/myHome/mySummaries";
	const loginPath = "/access/login";
	const homePath = "/home";
	const OK = false;
	const extensionIds = ['plemdgmijbjknnggfebbjdifoaemagkc', 'keohhbpcjlkoohpjpbeojdakdjlneebn'];

	/**
	 * 
	 * @param {*} data expecting userName, password and email fields (these names)
	 * @returns true if error, false if not
	 */
	const Signup = async (data) => {
		const invalidResponse = validateData(data);
		if (invalidResponse) {
			return;
		}

		const params = {
			username: data.userName,
			password: data.password,
			attributes: {
				email: data.email,
			}
		}

		try {
			var user = await Auth.signUp(params);
		}
		catch (error) {
			alert('error:', error.message);
			return !OK;
		}

		if (user.challengeName) return handleChallenge(user, data);

		return OK;
	}

	const Login = async (data) => {
		try {
			var user = await Auth.signIn(data.email, data.password);
		} catch (error) {
			alert('error:' + error.message);
			return handleError(error);
		}

		const attributes = user.attributes;
		attributes.username = user.username; // Add username to attrs
		delete attributes.sub; // Remove UID
		delete attributes.email_verified; // Remove bool

		setUserAttributes(attributes);
		// https://stackoverflow.com/questions/60244048/login-to-chrome-extension-via-website-with-aws-amplify
		//Get the current session from aws amplify
		const session = await Auth.currentSession();

		extensionIds.forEach(id => {
			chrome.runtime.sendMessage(id, session, function() {});
		});
		

		history.push(mySummariesPath);

		if (user.challengeName)
			return handleChallenge(user, data);
		return OK;
	}

	const Logout = () => {
		Auth.signOut()
			.then(_ => {
				history.push(homePath);
			})
			.catch(e => {
				alert('Logout Error:\n' + e.message);
			})
	}

	const ConfirmSignUpSubmit = (data) => {
		Auth.confirmSignUp(data.username, data.code) // FIXME ?
			.then(() => {
				history.push(loginPath)
			})
			.catch(error => {
				if (error.code === "ExpiredCodeException") {
					alert('Verification code resent to your username')
					Auth.resendSignUp(data.username)
				}
			});
	}

	const ResetPassword = async (username) => {
		let success = false;

		try {
			var response = await Auth.forgotPassword(username);
			success = true;
		} catch (error) {
			success = false;
		}

		return success;
	}

	const ConfirmResetPassword = async (username, code, newPassword) => {
		try {
			let response = await Auth.forgotPasswordSubmit(username, code, newPassword);
			history.push(loginPath);
		} catch (error) {
			console.log(error);
		}
	}

	const CompleteNewPassword = async (user, username, newPassword) => {
		try {
			var user = await Auth.completeNewPassword(user, newPassword, { username: username });
		} catch (error) {
			return !OK;
		}

		return OK;
	}

	const IsLoggedIn = () => {
		Auth.currentAuthenticatedUser()
			.then(response => true)
			.catch(error => false);
	};

	const ResendConfirmSignUp = async (username) => {
		try {
			await Auth.resendSignUp(username);
			return true;
		} catch (error) {
			return false;
		}
	};

	const EditProfile = async (data) => {
		try {
			var curUser = await Auth.currentAuthenticatedUser();
		} catch (error) {
			return !OK;
		}

		delete data.username;
		delete data.email;

		try {
			await Auth.updateUserAttributes(curUser, data);
		} catch (error) {
			return !OK;
		}
		setUserAttributes(data);
		history.push("/myHome/mySummaries");
		return OK;
	}

	const ChangePassword = async (data) => {
		if (data.newPassword !== data.confirm) {
			return !OK;
		}

		try {
			var user = await Auth.currentAuthenticatedUser();
		} catch (error) {
			return handleError(error);
		}
		
		try {
			await Auth.changePassword(user, data.password, data.newPassword);
		} catch (error) {
			return handleError(error);
		}
		
		return OK;
	};

	const GetCurrentSession = () => {
		return Auth.currentSession();
	}

	// TODO
	const ResendResetPassword = (data) => { };
	
	// ========== HELPER FUNCTIONS ==========
	const handleError = (error) => {
		switch (error.code) {
			case "UserNotConfirmedException":
				// TODO
				// history.push(confirmSignupPath)
				break;
		}
		return error.message;
	}

	const handleChallenge = (user, data) => {
		try {
			switch (user.challenge) {
				case "NEW_PASSWORD_REQUIRED":
					// history.push(changePasswordPath)
					// break;
					CompleteNewPassword(user, data.username, data.password); //FIXME change password page (no confirmation code)
					return OK;
					break;
				// case "SELECT_MFA_TYPE":
				// 	break;
				// case "PASSWORD_VERIFIER":
				// 	break;
				// case "SMS_MFA":
				// 	break;
				// default:
				// 	break;
			}
		} catch (error) {
			console.log(error);
			return !OK;
		}

		return !OK;
	}
	
	const validateData = (data) => {
		const usernameRx = /^[a-zA-Z0-9]+(_[a-zA-Z0-9]+)?$/;;

		if (data.password !== data.confirmPassword) {
			return 'Password confirmation must match';
		} else if (!usernameRx.test(data.username)) {
			return "Invalid username, must contain alphabet, numbers and underscore only";
		}
		return OK;
	}

	return {
		Signup,
		Login,
		Logout,
		ConfirmSignUpSubmit,
		ResetPassword,
		ConfirmResetPassword,
		ResendConfirmSignUp,
		ResendResetPassword,
		ChangePassword,
		IsLoggedIn,
		EditProfile,
		userAttributes,
		setUserAttributes,
		GetCurrentSession
	};
}

export default UserApi;
