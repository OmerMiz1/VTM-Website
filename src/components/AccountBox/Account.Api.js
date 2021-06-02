import Amplify, {Auth} from 'aws-amplify';
import {useHistory} from 'react-router-dom';

const crypto = require('crypto');
Amplify.configure({
    "aws_user_pools_id": "eu-central-1_gxX97wEqr",
    "aws_user_pools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o"
})

const AccountApi = () => {
	const history = useHistory();
	const mySummariesPath = "/myHome/mySummaries";
	const homePath = "/home";
	const newPasswordChallenge = 'NEW_PASSWORD_REQUIRED';

	const Signup =  (data, setSuccess) => {
		console.log('sign up:' ,data); //DELETEME
		if (data.password !== data.confirmPassword) {
			console.log('error: password confirmation must match')
			return
		}

		const params = {
			username: data.userName,
			password: data.password,
			attributes: {
				email: data.email,
			}
		}
		Auth
		.signUp(params)
		.then(user => {
			console.log('signup response:', user); // DELETEME
			if (user.challengeName === newPasswordChallenge)
				CompleteNewPassword(user, data.username, data.pass)
			setSuccess(true);
		})
		.catch(error => {
			alert('error:', error.code);
			console.log('error signup:', error); // DELETEME
		})
	}
	
	const Login = (data) => {
		console.log('request data:' ,data);  // DELETEME
		let username = data.email;
		let password = data.password;
		
		Auth.signIn(username, password)
		.then(user => {
			alert("Logged in"); //DELETEME
			console.log('response data:', user); //DELETEME

			if(user.challengeName === newPasswordChallenge) {
				console.log('complete new password challenge')
				CompleteNewPassword(user, username, password);
			}

			history.push(mySummariesPath);
		})
		.catch(e => {
			alert('Error:' + e.message);
			console.log('Login Error:', e); // DELETEME
			if (e.code == "UserNotConfirmedException") {
				//TODO redirect to "account confirm page"
			}
		}) 
	}
	
	const Logout = () => {
		if(Auth.currentUserInfo == undefined)
			console.log('error: you must login first');
		
		Auth.signOut()
		.then(_ => {
			alert("Logged out successfully"); //DELETEME
			history.push(homePath);
		})
		.catch(e => {
			alert('Logout Error:\n' + e.message); //DELETEME
		})
	}
	
	const ConfirmSignUpSubmit = (code) => { //FIXME username
		console.log('ConfirmSignup: code:', code)
		
		Auth.currentUserCredentials()
		.then(credentials => {
			console.log('currentUserCredentials:', credentials)
			// Auth.confirmSignUp(credentials.attributes.username, code)
			Auth.confirmSignUp('omermiz', code) // FIXME
			.then(response => {
				console.log('confirm sign up response:', response)
				history.push(mySummariesPath)
			})
			.catch(error => {
				console.log(`error confirm signup:`, error);
				if (error.code === "ExpiredCodeException") {
					alert('Verification code resent to your username')
					Auth.resendSignUp(credentials.attributes.username)
				}
			})
		})
		.catch(error => console.log('currentAuthUser error:', error));

		
		
		
				
		
		
	}
	
	const ForgotPassword = (username) => {
		Auth.
		Auth.forgotPassword(username)
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}

	const ConfirmForgotPassword = (username, code, new_password) => {
		Auth.forgotPasswordSubmit(username, code, new_password)
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}

	const CompleteNewPassword = (user, username, newPassword) => {
		console.log('CompleteNewPassword'); //DELETEME
	
		Auth.completeNewPassword(
			user,
			newPassword,
			{
				username: username,
			}
		).then(user => {
			console.log(user);
		}).catch(e => {
			console.log(e);
		});
	}

	const RefreshUserSession = () => {
		Auth.currentSession()
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}

	return {Signup, Login, Logout, ConfirmSignUpSubmit, ForgotPassword, ConfirmForgotPassword};
}

export default AccountApi;
