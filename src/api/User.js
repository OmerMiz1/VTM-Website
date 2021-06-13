import Amplify, { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

Amplify.configure({
	"aws_userPools_id": "eu-central-1_gxX97wEqr",
	"aws_userPools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o"
})

const UserApi = () => {
	const history = useHistory();
	const mySummariesPath = "/myHome/mySummaries";
	const loginPath = "/access/login"
	const homePath = "/home";
	const newPasswordChallenge = 'NEW_PASSWORD_REQUIRED';

	// FIXME name: SignUp
	const Signup = (data, setSuccess) => {
		console.log('sign up:', data); //DELETEME
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
		Auth.signUp(params)
			.then(user => {
				console.log('signup response:', user); // DELETEME
				if (user.challengeName === newPasswordChallenge)
					CompleteNewPassword(user, data.username, data.pass)
				setSuccess(true);
			})
			.catch(error => {
				alert('error:', error.message);
				console.log('error signup:', error); // DELETEME
			})
	}

	const Login = (data) => {
		console.log('request data:', data);  // DELETEME
		let username = data.email;
		let password = data.password;

		Auth.signIn(username, password)
			.then(user => {
				alert("Logged in"); //DELETEME
				console.log('response data:', user); //DELETEME

				if (user.challengeName === newPasswordChallenge) {
					console.log('complete new password challenge')
					CompleteNewPassword(user, username, password);
				}

				history.push(mySummariesPath); // TODO debug
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
		if (Auth.currentUserInfo == undefined)
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

	const ConfirmSignUpSubmit = (data) => { //FIXME username ?
		console.log('ConfirmSignup: data:', data)

		Auth.confirmSignUp(data.username, data.code) // FIXME ?
			.then(response => {
				console.log('confirm sign up response:', response) //DELETEME
				history.push(mySummariesPath)
			})
			.catch(error => {
				console.log(`error confirm signup:`, error); //DELETEME
				if (error.code === "ExpiredCodeException") {
					alert('Verification code resent to your username')
					Auth.resendSignUp(data.username)
				}
			})

	}

	const ResetPassword = (username) => {
		Auth.forgotPassword(username)
			.then(data => console.log(data)) //DELETEME
			.catch(err => console.log(err));//DELETEME
	}

	const ConfirmResetPassword = (username, code, newPassword) => {
		Auth.forgotPasswordSubmit(username, code, newPassword)
			.then(data => console.log(data)) //DELETEME
			.catch(err => console.log(err)); //DELETEME
	}

	// FIXME Complete -> Confirm
	const CompleteNewPassword = (user, username, newPassword) => {
		console.log('CompleteNewPassword'); //DELETEME

		Auth.completeNewPassword(
			user,
			newPassword,
			{
				username: username,
			}
		).then(user => {
			console.log(user); //DELETEME
		}).catch(e => {
			console.log(e); //DELETEME
		});
	}

	const RefreshUserSession = () => {
		Auth.currentSession()
			.then(data => console.log(data)) //DELETEME
			.catch(err => console.log(err)); //DELETEME
	}

	// TODO
	const ResendConfirmSignUp = () => { };
	const EditProfile = () => { }; // const UpdateUserAttributes = () => {}; //TODO disable email change (for now)
	const ResendResetPassword = (data) => { };
	const ChangePassword = () => { }; // TODO & confirm it
	const CurrentUserAttributes = () => { };
	const IsLoggedIn = () => {
		Auth.currentAuthenticatedUser()
			.then(response => true)
			.catch(error => false);
	};

	// FIXME
	// return {PostSingupForm, PostLoginForm,
	// 	PostConfirmRestPasswordForm: SendNewPsswordToEmail, PostConfirmSignUpForm,
	// 	EditUesrProfile};
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
		EditProfile
	};
}

export default UserApi;
