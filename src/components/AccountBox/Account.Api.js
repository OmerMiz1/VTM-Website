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

  const Signup = async (data) => {
    console.log('sign up:' ,data); //DELETEME
    // data.preventDefault(); // FIXME

    let username = data.email;  // TODO change to username?
    let password = data.password;
    let email = data.email;

    await Auth
    .signUp({
      username,
      password,
      attributes: {
          email,
      },
    })
    .then(response => {
      console.log('signup response:', response); // DELETEME
      Login({email, password})
    })
    .catch(error => {
      alert('Error:\n' + error.message);
      console.log('Signup Error:', error); // DELETEME
    })
  }

  const Login = async (data) => {
    console.log('request data:' ,data);  // DELETEME
    let email = data.email;
    let password = data.password;

    Auth.signIn(email, password)
    .then(async (user) => {
      alert("Logged in");
      history.push("/myHome/mySummaries");
      console.log('response data:', user); //DELETEME

      //TODO
      // if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      //   // the array of required attributes, e.g ['email', 'phone_number']
      //   // You need to get the new password and required attributes from the UI inputs
      //   // and then trigger the following function with a button click
      //   // For example, the email and phone_number are required attributes
        
      //   // const {email} = getInfoFromUserInput();
      //   console.log('user challenge NEW_PASSWORD_REQUIRED');
      //   await Auth.completeNewPassword(user, password, {email});
      // }
    })
    .catch(e => {
      alert('Error:\n' + e.message);
      console.log('Login Error:', e); // DELETEME
    }) 
  }

  const Logout = async () => {
    if(Auth.currentUserInfo == undefined) {
      console.log('error: not logged-in log-out is impossible');
    }

    await Auth.signOut()
    .then(_ => {
      console.log('logout successfull');
      alert("Logged out successfully");
      history.push("/home");
    })
    .catch(e => {
      alert('Logout Error:\n' + e.message);
    })
  }

  const getCurrentUserEmail = async () => {
    return (await Auth.currentUserInfo()).attributes['email'];
  }

  const getCurrentUserId = async () => {
    return (await Auth.currentUserInfo()).attributes['username'];
  }

  // TODO implement, use link below:
  // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#configure
  const AccountForgotPassword = async () => {} 
  const AccountConfirmForgotPassword = async () => {} 
  return {Signup, Login, Logout};
}

export default AccountApi;
