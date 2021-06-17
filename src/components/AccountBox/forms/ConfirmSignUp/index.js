import React, { useContext } from 'react';
import {
	BoldLink, BoxContainer, FormContainer, ValidationWarning,
	Input, MutedLink, SubmitButton, MarginSpanHeight
} from '../AccountForms.style';
import { UserContext } from '../../../../utils/context/UserContext';

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useConfirmSignupSchema } from '../../../../validation/SignupValidation';


export function ConfirmSignUp({ userData }) {
	const { ConfirmSignUpSubmit, ResendConfirmSignUp } = useContext(UserContext);

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
				<BoldLink onClick={() => ResendConfirmSignUp(userData.userName)}>
					Resend Code
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

