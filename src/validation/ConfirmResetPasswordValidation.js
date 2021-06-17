import * as yup from 'yup';

// 
// 
export const ConfirmResetPasswordSchema = yup.object().shape({
	code: yup.string()
		.required("Please Enter Code Sent To Your Email"),

	newPassword: yup.string()
		.required("Please Enter New Password")
		.min('6')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
			"Invalid password"),

	confirmNewPassword: yup
		.string()
		.required("Repeat New Password")
		.oneOf([yup.ref("newPassword"), null], "Passwords must match")

});
