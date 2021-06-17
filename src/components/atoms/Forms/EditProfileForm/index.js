import React from 'react';
import { TiltleProfile, ColumeFrom, SectionForm, ValidationWarning, SectionFormSubmit } from './EditProfileForm.style';

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileUserSchema } from '../../../../validation/ProfileEditValidation';

import Amplify, {Auth} from 'aws-amplify';

Amplify.configure({
	"aws_userPools_id": "eu-central-1_gxX97wEqr",
	"aws_userPools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o"
});

function EditProfileForm({ setChangePassword, userAttributes, EditProfile }) {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ProfileUserSchema),
	});
	
	const emailKey = "email";
	const usernameKey = "username";
	const firstNameKey = "name";
	const lastNameKey = "family_name";
	const ageKey = "custom:age";
	const birthdayKey = "birthdate";
	const phoneKey = "phone_number";
	const genderKey = "gender";
	const countryKey = "custom:country";
	const cityKey = "custom:city";
	const educationKey = "custom:education";
	const interestsKey = "custom:interests";

	const nicknameKey = "nickname";
	const prefferedUsernameKey = "preferred_username";
	
	const valueOrEmpty = (attr) => {
		// console.log(`attr:`, attr); //DELETEME
		return attr;
	}

	const submitEditProfile = (data) => {
		console.log('submitEditProfile', data); //DELETEME

		EditProfile(data); //FIXME
	}

	// FIXME dont force name OR family name, user can decide to just add age.
	return (
		<form onSubmit={handleSubmit(submitEditProfile)}>
			<TiltleProfile>Profile</TiltleProfile>

			<SectionForm displayFlexColume={1} border={1}>
				<p>Email: <strong> { userAttributes[emailKey] } </strong></p>
				<p>Username: <strong> {userAttributes[usernameKey]} </strong></p>
				<a onClick={() => setChangePassword(1)}>Change password</a>
			</SectionForm>

			<SectionForm>
				<ColumeFrom margin='0 -15px'>
					<label>First Name</label>
					<input defaultValue={userAttributes[firstNameKey]} type="text"
					 name={firstNameKey} {...register(firstNameKey)}></input>
					<ValidationWarning> {errors.firstName?.message} </ValidationWarning>
				</ColumeFrom>

				<ColumeFrom margin='0 0 0 30px'>
					<label>Last Name</label>
					<input defaultValue={valueOrEmpty(userAttributes[lastNameKey])} type="text"
					 name={lastNameKey} {...register(lastNameKey)}></input>
					<ValidationWarning> {errors.lastName?.message} </ValidationWarning>
				</ColumeFrom>
			</SectionForm>

			<SectionForm>
				<label>Age</label>
				<input defaultValue={valueOrEmpty(userAttributes[ageKey])} type="number"
				 name={ageKey} {...register(ageKey)}></input>
				<ValidationWarning> {errors.age?.message} </ValidationWarning>
			</SectionForm>

			<SectionForm>
				<ColumeFrom margin='0 -15px'>
					<label>Country</label>
					<input defaultValue={valueOrEmpty(userAttributes[countryKey])} type="text"
					 name={countryKey} {...register(countryKey)}></input>
					<ValidationWarning> {errors.country?.message} </ValidationWarning>
				</ColumeFrom>

				<ColumeFrom margin='0 0 0 30px'>
					<label>City</label>
					<input defaultValue={valueOrEmpty(userAttributes[cityKey])} type="text"
					 name={cityKey} {...register(cityKey)}></input>
					<ValidationWarning> {errors.city?.message} </ValidationWarning>
				</ColumeFrom>
			</SectionForm>

			<SectionForm>
				{/* TODO change to select list */}
				<label>Education</label>
				<input defaultValue={valueOrEmpty(userAttributes[educationKey])} type="text"
				 name={educationKey} {...register(educationKey)}></input>
				<ValidationWarning> {errors.education?.message} </ValidationWarning>
			</SectionForm>
			

			{/* TODO change to select list */}
			<SectionForm>
				<label>Interests</label>
				<select defaultValue={valueOrEmpty(userAttributes[interestsKey])} name={interestsKey}
				 {...register(interestsKey)}>
					<option> Catan </option>
					<option> Boten </option>
					<option> Cola </option>
				</select>
				<ValidationWarning> {errors.interests?.message} </ValidationWarning>
			</SectionForm>

			<>
				<SectionFormSubmit>
					{/* <input type="submit" value="Reset All" name="reset"/> */}
					<input type="submit" value="Save Changes" name="reset" />
				</SectionFormSubmit>
			</>
		</form>
	)
}

export default EditProfileForm;
