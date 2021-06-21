import * as yup from 'yup';

/** RX FROM:
 * https://stackoverflow.com/questions/58767980/aws-cognito-password-regex-specific-to-aws-cognito
*/
const usernameRx = /^[a-zA-Z0-9]+(_[a-zA-Z0-9]+)?$/;

// Schema validation - username required , valid email, confirmPassword
// and password Contain 6 characters one Uppercase and One Lowercase..
export const useSignupSchema = yup.object().shape({
	userName: yup
		.string()
		.required("Please enter username")
		.min('4', "Username must be at least 4 characters long")
		.matches(/^[a-zA-Z0-9]+(_[a-zA-Z0-9]+)?$/, "Only english alphabet, numbers and underscore allowed"),
	email: yup.string().email("Email not valid").required("Please enter your email"),
	password: yup
		.string()
		.required('Please enter your password')
		.min('8')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/,
			"Password must contain uppercase, lowercase, a number and a special character!"
		),
	confirmPassword: yup
		.string()
		.required()
		.oneOf([yup.ref("password"), null], "Passwords must match")
});


export const useConfirmSignupSchema = yup.object().shape({
	confirm: yup.string().required("Please enter confirmation code")
});