import React from 'react';
import { TiltleProfile, ColumeFrom, SectionForm, ValidationWarning, SectionFormSubmit } from './EditProfileForm.style';
import UserApi from '../../../../api/User';

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileUserSchema } from '../../../../validation/ProfileEditValidation';

function EditProfileForm({ setChangePassword }) {
	const { EditProfile } = UserApi();
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ProfileUserSchema),
	})


	const submitEditProfile = (data) => {
		console.log('submitEditProfile', data);
		EditProfile(data); //FIXME
	}

	return (
		<form onSubmit={handleSubmit(submitEditProfile)}>
			<TiltleProfile>Profile</TiltleProfile>

			<SectionForm displayFlexColume={1} border={1}>
				<p>Email: <strong>shon4me@gmail.com</strong></p>
				<p>Username: <strong>shon4me</strong></p>
				<a onClick={() => setChangePassword(1)}>Change password</a>
			</SectionForm>

			<SectionForm>
				<ColumeFrom margin='0 -15px'>
					<label>First Name</label>
					<input defaultValue="temp" type="text" name='firstName' {...register('firstName')}></input>
					<ValidationWarning> {errors.firstName?.message} </ValidationWarning>
				</ColumeFrom>

				<ColumeFrom margin='0 0 0 30px'>
					<label>Last Name</label>
					<input defaultValue="temp" type="text" name='lastName' {...register('lastName')}></input>
					<ValidationWarning> {errors.lastName?.message} </ValidationWarning>
				</ColumeFrom>
			</SectionForm>

			<SectionForm>
				<label>Age</label>
				<input defaultValue="temp" type="number" name='age' {...register('age')}></input>
				<ValidationWarning> {errors.age?.message} </ValidationWarning>
			</SectionForm>

			<SectionForm>
				<ColumeFrom margin='0 -15px'>
					<label>Country</label>
					<input defaultValue="temp" type="text" name='country' {...register('country')}></input>
					<ValidationWarning> {errors.country?.message} </ValidationWarning>
				</ColumeFrom>

				<ColumeFrom margin='0 0 0 30px'>
					<label>City</label>
					<input defaultValue="temp" type="text" name='city' {...register('city')}></input>
					<ValidationWarning> {errors.city?.message} </ValidationWarning>
				</ColumeFrom>
			</SectionForm>

			<SectionForm>
				{/* TODO change to select list */}
				<label>Education</label>
				<input defaultValue="temp" type="text" name='education' {...register('education')}></input>
				<ValidationWarning> {errors.education?.message} </ValidationWarning>
			</SectionForm>
			

			{/* TODO change to select list */}
			<SectionForm>
				<label>Interests</label>
				<select name='interests' {...register('interests')}>
					<option> Sport</option>
					<option> Cs</option>
					<option> sdaf sadf</option>
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
