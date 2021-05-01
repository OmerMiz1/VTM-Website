import * as yup from 'yup';


// Schema validation - username required , valid email, confirmPassword
// and password Contain 6 characters one Uppercase and One Lowercase..
export const useLoginSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("Please Enter your Email"),
    password: yup
    .string()
    .required('Please Enter your Password')
    .min('6')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
      "Invalid password"
    )
});