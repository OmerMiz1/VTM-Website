
const AccountApi = () => {
  
  //MOCK ->post to the server (signup) 
  const PostSingupForm = (data) => {
    console.log('sign up:' ,data);
  }

  //MOCK ->post to the server (login) 
  const PostLoginForm = (data) => {
    console.log('login:' ,data);
  }

   //MOCK ->post to the server (signup confirm ) 
   const PostConfirmSignUpForm = (data) => {
    console.log('Confirm SignUp data :' ,data);
  }

   //MOCK ->post to the server (send to new password (confirm)) 
   const SendNewPsswordToEmail = (data) => {
    console.log('send password to this user :' ,data);
  }

   //MOCK ->edit profile 
   const EditUesrProfile = (data) => {
    console.log('edit user profile to :' ,data);
  }

    return {PostSingupForm, PostLoginForm,
      PostConfirmRestPasswordForm: SendNewPsswordToEmail, PostConfirmSignUpForm,
      EditUesrProfile};
}


export default AccountApi;
