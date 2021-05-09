import {Auth} from 'aws-amplify';
const AccountApi = () => {
  
  const PostSingupForm = async (data) => {
    console.log('sign up:' ,data); //DELETEME
    data.preventDefault();

    try {
      await Auth.signIn(userName, password)
        .then(user => {
          alert("Logged in");
          props.login(user);
          history.push("/myHome");
          console.log(user.getUsername()); //DELETEME
        });
    } catch (e) {
      alert(e.message);
    }
  }

  const PostLoginForm = async (data) => {
    console.log('login:' ,data);  // DELETEME

    data.preventDefault();
        let username = email;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                },
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
            return;
        }
        console.log("Register succses email: " + email + "password: " + password);  // DELETEME
        props.login(email);  // TODO signin with Auth.signIn and update userObject (instead of email)
        history.push("/myHome")
  }

  return {PostSingupForm, PostLoginForm};
}


export default AccountApi;
