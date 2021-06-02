import * as yup from 'yup';

/** RX FROM:
 * https://stackoverflow.com/questions/58767980/aws-cognito-password-regex-specific-to-aws-cognito
*/

// Schema validation - username required , valid email, confirmPassword
// and password Contain 6 characters one Uppercase and One Lowercase..
export const useSignupSchema = yup.object().shape({
    userName: yup.string().required("Please Enter User Name"),
    email: yup.string().email("Email not valid").required("Please Enter your Email"),
    password: yup
    .string()
    .required('Please Enter your Password')
    .min('8')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/,
      "Must Contain Uppercase and Lowercase!"
    ),
    confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});


export const useConfirmSignupSchema = yup.object().shape({
  confirm: yup.string().required("Please Enter Confirm code ")
});