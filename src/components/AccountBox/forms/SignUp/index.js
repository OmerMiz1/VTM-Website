import React, { useContext } from 'react';
import {
	BoldLink, BoxContainer, FormContainer, ValidationWarning,
	Input, MutedLink, SubmitButton, MarginSpanHeight
} from '../AccountForms.style'
import { AccountContext } from '../../AccountBox.logic'
import UserApi from '../../../../api/User';

// Validation 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupSchema } from '../../../../validation/SignupValidation'


export function SignupForm({ setIsConfirm, setUserData }) {
	const { switchToLogin } = useContext(AccountContext);
	const { Signup } = UserApi();

	// Valdation state from useSignupSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(useSignupSchema),
	});

	const submitSignup = (data) => {
		console.log(`submitSingUp`);
		Signup(data, setIsConfirm);
		setUserData(data);
		// setIsConfirm(true); // DELETEME: 'User' incharge
	}


	return (
		<BoxContainer>
			<MarginSpanHeight height='15px' />
			<FormContainer onSubmit={handleSubmit(submitSignup)}>
				<Input type='text' placeholder='username' name='userName' {...register("userName")} />
				<ValidationWarning> {errors.userName?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='email' placeholder='email' name='email' {...register("email")} />
				<ValidationWarning> {errors.email?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='password' placeholder='password' name='password' {...register("password")} />
				<ValidationWarning> {errors.password?.message} </ValidationWarning>
				<MarginSpanHeight height='6px' />
				<Input type='password' placeholder='confirm password' name='confirmPassword' {...register("confirmPassword")} />
				<ValidationWarning> {errors.confirmPassword?.message} </ValidationWarning>
				<MarginSpanHeight height='15px' />
				<SubmitButton type='submit'>Sign Up</SubmitButton>
			</FormContainer>
			<MarginSpanHeight height='5px' />
			<MutedLink href='#'>
				Already have an account?
				<BoldLink onClick={switchToLogin}>
					Sign in
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

