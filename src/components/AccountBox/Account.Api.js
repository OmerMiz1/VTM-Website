import {useContext} from 'react';
import {Auth} from 'aws-amplify';
import {UserContext} from '../../utils/context/UserContext';
import {useHistory} from 'react-router-dom';

const AccountApi = () => {
  const {user, setUser} = useContext(UserContext);
  const {history} = useHistory();

  const AccountSignup = async (data) => {
    console.log('sign up:' ,data); //DELETEME
    // data.preventDefault(); // FIXME

    let username = data.email  // TODO change to username?
    let password = data.password
    let email = data.email
    try {
      const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
              email,
          },
      });
      console.log(user);  //DELETEME
    } catch (error) {
      console.log('error signing up:', error);
      return;
  }

  }

  const AccountLogin = async (data) => {
    console.log('login:' ,data);  // DELETEME
    // data.preventDefault();  // FIXME

    try {
      await Auth.signIn(data.userName, data.password)
        .then(user => {
          setUser(user);
          console.log(user); //DELETEME
          alert("Logged in");
          history.push("/myHome");
        });
    } catch (e) {
      alert(e.message);
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
  return {AccountSignup, AccountLogin, AccountLogout};
}

export default AccountApi;
