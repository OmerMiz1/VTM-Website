import React from 'react';
import {
	BoldLink, BoxContainer, FormContainer, ValidationWarning,
	Input, MutedLink, SubmitButton, MarginSpanHeight
} from '../AccountForms.style';
import UserApi from '../../../../api/User';

//validastion
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useConfirmSignupSchema } from '../../../../validation/SignupValidation';


export function ConfirmSignUp({ userData }) {
	const { ConfirmSignUpSubmit, ResendConfirmSignUp } = UserApi();

	// Valdation state from useSignupSchema (schema)
	const { register, handleSubmit, formState: { errors } }
		= useForm({ resolver: yupResolver(useConfirmSignupSchema), })

	const submitConfirm = (data) => {
		console.log(`submitConfirm`, data, userData);
		ConfirmSignUpSubmit({
			code: data.confirm,
			username: userData.userName
		});
	}

	return (
		<BoxContainer>
			<MarginSpanHeight height='30px' />
			<FormContainer onSubmit={handleSubmit(submitConfirm)}>
				<Input type='text' placeholder='Enter confirmation code here...' name='confirm' {...register("confirm")} />
				<ValidationWarning> {errors.confirm?.message} </ValidationWarning>
				<MarginSpanHeight height='20px' />
				<SubmitButton type='submit'>Confirm SignUp</SubmitButton>
			</FormContainer>
			<MarginSpanHeight height='10px' />
			<MutedLink href='#'>
				Lost your code?
				<BoldLink onClick={() => ResendConfirmSignUp()}>
					Resend Code
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

