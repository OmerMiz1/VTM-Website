import * as yup from 'yup';

// 
// 
export const ChangePasswordSchema = yup.object().shape({
	password: yup.string()
		.required("Please Enter Your Existing Password")
		.min('6')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
			"Invalid password"),

	newPassword: yup.string()
		.required("Please Enter New Password")
		.min('6')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
			"Invalid password"),

	confirm: yup
		.string()
		.required()
		.oneOf([yup.ref("newPassword"), null], "Passwords must match")

});
