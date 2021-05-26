
const AccountApi = () => {
  
  //MOCK ->post to the server (signup) 
  const PostSingupForm = (data) => {
    console.log('sign up:' ,data);
  }

  //MOCK ->post to the server (signup) 
  const PostLoginForm = (data) => {
    console.log('login:' ,data);
  }

   //MOCK ->post to the server (signup) 
   const PostConfirmForm = (data) => {
    console.log('confirm:' ,data);
  }

   //MOCK ->edit profile (signup) 
   const EditUesrProfile = (data) => {
    console.log('confirm:' ,data);
  }

    return {PostSingupForm, PostLoginForm, PostConfirmForm, EditUesrProfile};
}


export default AccountApi;
