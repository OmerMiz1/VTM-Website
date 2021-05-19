import {useContext} from 'react';
import Amplify, {Auth} from 'aws-amplify';
import {UserContext} from '../../utils/context/UserContext';
import {useHistory} from 'react-router-dom';

// FIXME take out hardcoded config!
const awsmobile = {
  "aws_project_region": "eu-central-1",
  "aws_cognito_identity_pool_id": "eu-central-1:086c2808-388a-4fa4-a4b6-187b9f7b2bec",
  "aws_cognito_region": "eu-central-1",
  "aws_user_pools_id": "eu-central-1_pry0ETHtR",
  "aws_user_pools_web_client_id": "6mss0vu7320s4fk1onch4eosmr",
  "oauth": {}
};
Amplify.configure(awsmobile)

const AccountApi = () => {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  const AccountSignup = async (data) => {
    console.log('sign up:' ,data); //DELETEME
    // data.preventDefault(); // FIXME

    let username = data.email;  // TODO change to username?
    let password = data.password;
    let email = data.email;

    try {
      const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
              email,
          },
      });
      console.log(user);  //DELETEME
      history.push('/myHome');
    } catch (error) {
      console.log('error signing up:', error);
      return;
  }

  }

  const AccountLogin = async (data) => {
    console.log('login:' ,data);  // DELETEME
    // data.preventDefault();  // FIXME

    try {
      await Auth.signIn(data.email, data.password)
        .then(user => {
          setUser(user);
          console.log(user); //DELETEME
          alert("Logged in");
          history.push("/myHome:mySummaries");
        });
    } catch (e) {
      alert('error loging in:', e.message);
    } 
  }

  const AccountLogout = async () => {
    if(user == null) {
      console.log('error: not logged-in log-out is impossible');
    }

    try {
      await Auth.signOut()
      .then(_ => {
        setUser(null);
        console.log('logout successfull');
        alert("Logged out successfully");
        history.push("/home");
      })
    } catch (e) {
      alert('error logging out:', e);
    }

  }

  // TODO implement, use link below:
  // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#configure
  const AccountForgotPassword = async () => {} 
  const AccountConfirmForgotPassword = async () => {} 
  return {AccountSignup, AccountLogin, AccountLogout};
}

export default AccountApi;
