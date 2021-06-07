import React from 'react';

import {
	BoxContainer, FormContainer, ValidationWarning, MutedLink, BoldLink,
	Input, SubmitButton, MarginSpanHeight
} from '../../../AccountForms.style';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordSchema } from '../../../../../../validation/ChangePasswordValidation';
import AccountApi from '../../../../Account.Api';

export default function ChangePassword({ userData }) {
	const { ChangePassword, ResendResetPassword } = AccountApi()

	// Valdation state from useSignupSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ChangePasswordSchema),
	})

	const resendPassword = () => {
		console.log(`resendPassword`, userData); //DELETEME
		ResendResetPassword(userData); //FIXME username
	}

	const submitConfirm = (data) => {
		console.log('submitConfirm', data); //DELETEME
		ChangePassword(data) //FIXME username, password, password_confirm
	}


	return (
		<BoxContainer>
			<MarginSpanHeight height='30px' />
			<FormContainer onSubmit={handleSubmit(submitConfirm)}>
				<Input type='text' placeholder='confirmation code' name='password' {...register("password")} />
				<ValidationWarning> {errors.password?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='password' placeholder='new password' name='newPassword' {...register("newPassword")} />
				<ValidationWarning> {errors.newPassword?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='password' placeholder='confirm new password' name='confirm' {...register("confirm")} />
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

