import * as yup from 'yup';

// 
// 
export const ProfileUserSchema = yup.object().shape({
	firstName: yup.string()
		.required("Please Enter Your First Name")
		.matches(/^[A-Za-z_]+[a-zA-Z_ ]*$/, 'Please Enter Valid Name'),

	lastName: yup.string()
		.required("Please Enter Your Last Name")
		.matches(/^[A-Za-z ]+[a-zA-Z_ ]*$/, 'Please Enter Valid Name'),

	country: yup.string()
		.required("Please Enter Your Country")
		.matches(/^\w+[\s+\w]*$/, 'Please Enter Valid Country'),

	city: yup.string()
		.required("Please Enter Your City")
		.matches(/^\w+[\s+\w]*$/, 'Please Enter Valid City Name'),

	age: yup.string()
		.required("Please Enter Your Age"),

	education: yup.string()
		.required("Please Enter Your Education")
		.matches(/^\w+[\s+\w]*$/, 'Please Enter Valid Education'),

	interests: yup.string()
		.required("Please Enter Your Interests")
		.matches(/^\w+[\s+\w]*$/, 'Please Enter Interests'),
});