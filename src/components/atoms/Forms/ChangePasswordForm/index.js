import React from 'react';
import { TiltleProfile, SectionForm, ValidationWarning, SectionFormSubmit } from '../EditProfileForm/EditProfileForm.style';
import UserApi from '../../../../api/User';
// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordSchema } from '../../../../validation/ChangePasswordValidation';


function EditProfileForm({ setChangePassword }) {
	const { ChangePassword } = UserApi()
	// Valdation state from ProfileUserSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ChangePasswordSchema),
	})


	// TODO
	const submitChangePassword = (data) => {
		console.log('submitChangePassword', data);
		ChangePassword(data); //FIXME username, password
	}

	return (
		<form onSubmit={handleSubmit(submitChangePassword)}>
			<TiltleProfile>Change Your Password</TiltleProfile>

			<SectionForm displayFlexColume={1} border={1}>
				<p>If you want to change your current password,<br />
                       Enter the old password in the form and select a new password</p>
				<a onClick={() => setChangePassword(0)}>Back to my profile</a>
			</SectionForm>

			<SectionForm>
				<label>Current Password:</label>
				<input defaultValue="" type="password" name='password' {...register('password')}></input>
				<ValidationWarning> {errors.password?.message} </ValidationWarning>
				{/* TODO ADD reset password */}
				{/* <p>Forgot your password?</p> */}

			</SectionForm>
			<SectionForm>
				<label>New Password:</label>
				<input defaultValue="" type="password" name='newPassword' {...register('newPassword')}></input>
				<ValidationWarning> {errors.newPassword?.message} </ValidationWarning>
			</SectionForm>

			<SectionForm>
				<label>Confirm New Password:</label>
				<input defaultValue="" type="password" name='confirm' {...register('confirm')}></input>
				<ValidationWarning> {errors.confirm?.message} </ValidationWarning>
			</SectionForm>

			<>
				<SectionFormSubmit>
					<input type="submit" value="Save Changes" name="reset" />
				</SectionFormSubmit>
			</>
		</form>
	)
}

export default EditProfileForm;
