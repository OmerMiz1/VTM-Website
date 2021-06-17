import React, { useContext } from 'react';

import {
	BoxContainer, FormContainer, ValidationWarning, MutedLink, BoldLink,
	Input, SubmitButton, MarginSpanHeight
} from '../../../AccountForms.style';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ConfirmResetPasswordSchema } from '../../../../../../validation/ConfirmResetPasswordValidation';
import { UserContext } from '../../../../../../utils/context/UserContext';

export default function ChangePassword({ userData }) {
	const { ConfirmResetPassword, ResendResetPassword } = useContext(UserContext);

	// Valdation state from useSignupSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ConfirmResetPasswordSchema),
	})

	const resendPassword = () => {
		console.log(`resendPassword`, userData); //DELETEME

		ResendResetPassword(userData); //FIXME username
	}

	const submitConfirm = async (data) => {
		console.log('data:', data); //DELETEME
		console.log('userData:', userData); //DELETEME

		ConfirmResetPassword(userData.username, data.code, data.newPassword);
	}


	return (
		<BoxContainer>
			<MarginSpanHeight height='30px' />
			<FormContainer onSubmit={handleSubmit(submitConfirm)}>
				<Input type='text' placeholder='confirmation code' name='code' {...register("code")} />
				<ValidationWarning> {errors.password?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='password' placeholder='new password' name='newPassword' {...register("newPassword")} />
				<ValidationWarning> {errors.newPassword?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='password' placeholder='confirm new password' name='confirmNewPassword' {...register("confirmNewPassword")} />
				<ValidationWarning> {errors.confirm?.message} </ValidationWarning>
				<MarginSpanHeight height='20px' />
				<SubmitButton type='submit'>Confirm</SubmitButton>
			</FormContainer>
			<MarginSpanHeight height='10px' />
			<MutedLink href='#'>
				Did'nt receive a verification code?
				<BoldLink onClick={() => resendPassword()}>
					Resend verification code
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

