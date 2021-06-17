import * as yup from 'yup';

// 
// 
export const ProfileUserSchema = yup.object().shape({
	name: yup.string()
		// .required("Please enter your first name")
		.matches(/^[A-Za-z_]+[a-zA-Z_ ]*$/, 'Please enter valid name'),

	family_name: yup.string()
		// .required("Please enter your last name")
		.matches(/^[A-Za-z ]+[a-zA-Z_ ]*$/, 'Please enter valid name'),

	country: yup.string()
		// .required("Please enter your country")
		.matches(/^\w+[\s+\w]*$/, 'Please enter valid country name'),

	city: yup.string()
		// .required("Please enter your city")
		.matches(/^\w+[\s+\w]*$/, 'Please enter valid city name'),

	age: yup.string(),
		// .required("Please enter your age"), // If uncomment: remove ',' at the end of the line above

	education: yup.string()
		// .required("Please enter your education")
		.matches(/^\w+[\s+\w]*$/, 'Please enter a valid education'),

	interests: yup.string()
		// .required("Please enter your interests")
		.matches(/^\w+[\s+\w]*$/, 'Please enter your interests'),
});