import Amplify, {Auth} from 'aws-amplify';
import {useHistory} from 'react-router-dom';

// FIXME take out hardcoded config!
const awsmobile = {
	"aws_project_region": "eu-central-1",
	"aws_cognito_identity_pool_id": "eu-central-1:086c2808-388a-4fa4-a4b6-187b9f7b2bec",
	"aws_cognito_region": "eu-central-1",
	"aws_user_pools_id": "eu-central-1_pry0ETHtR",
	"aws_user_pools_web_client_id": "6mss0vu7320s4fk1onch4eosmr",
	"oauth": {},
	"aws_dynamodb_all_tables_region": "eu-central-1",
	"aws_dynamodb_table_schemas": [
		{
			"tableName": "SummaryDB-staging",
			"region": "eu-central-1"
		}
	],
	"aws_cloud_logic_custom": [
		{
			"name": "SummaryAPI",
			"endpoint": "https://smzqyqgrt0.execute-api.eu-central-1.amazonaws.com/staging",
			"region": "eu-central-1"
		}
	]
};
Amplify.configure(awsmobile)

const AccountApi = () => {
	const history = useHistory();
	const mySummariesPath = "/myHome/mySummaries";
	const homePath = "/home";
	const newPasswordChallenge = 'NEW_PASSWORD_REQUIRED';

	const Signup =  (data) => {
		console.log('sign up:' ,data); //DELETEME
		// data.preventDefault(); // FIXME
		
		let username = data.email;  // TODO change to username?
		let password = data.password;
		let email = data.email;
		
		Auth
		.signUp({
			username,
			password,
			attributes: {
				email,
			},
		})
		.then(user => {
			console.log('signup response:', user); // DELETEME
			//TODO history.push('/confirmSignUp')
		})
		.catch(error => {
			alert('Error:\n' + error.message);
			console.log('Signup Error:', error); // DELETEME
		})
	}
	
	const Login = (data) => {
		console.log('request data:' ,data);  // DELETEME
		let email = data.email;
		let password = data.password;
		
		Auth.signIn(email, password)
		.then(user => {
			alert("Logged in");
			console.log('response data:', user); //DELETEME

			if(user.challengeName === newPasswordChallenge) {
				CompleteNewPassword(user, email, password);
			}

			history.push(mySummariesPath);
		})
		.catch(e => {
			alert('Error:\n' + e.message);
			console.log('Login Error:', e); // DELETEME
		}) 
	}
	
	const Logout = () => {
		if(Auth.currentUserInfo == undefined) {
			console.log('error: not logged-in log-out is impossible');
		}
		
		Auth.signOut()
		.then(_ => {
			console.log('logout successfull');
			alert("Logged out successfully");
			history.push(homePath);
		})
		.catch(e => {
			alert('Logout Error:\n' + e.message);
		})
	}
	
	const ConfirmSignUp = (username, code) => {
		Auth.confirmSignUp(username, code)
		.then(history.push(mySummariesPath))
		.catch(error => console.log(`error confirm signup: ${error.message}`));
	}
	
	const ForgotPassword = (username) => {
		Auth.forgotPassword(username)
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}

	const ConfirmForgotPassword = (username, code, new_password) => {
		Auth.forgotPasswordSubmit(username, code, new_password)
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}

	//======= Helper Methods =======//
	const CompleteNewPassword = (user, email, newPassword) => {
		console.log('CompleteNewPassword'); //DELETEME

		Auth.completeNewPassword(
			user,
			newPassword,
			{
				email: email,
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

	return {Signup, Login, Logout, ConfirmSignUp, ForgotPassword, ConfirmForgotPassword};
}

export default AccountApi;
