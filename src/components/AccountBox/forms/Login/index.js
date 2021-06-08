import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../AccountBox.logic'
import {
	BoldLink, BoxContainer, FormContainer, ValidationWarning,
	Input, MutedLink, SubmitButton, MarginSpanHeight
} from '../AccountForms.style';
import UserApi from '../../../../api/User';

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginSchema } from '../../../../validation/LoginValidation'


export default function LoginForm({ setResetPassword }) {
	const { switchToSignUp } = useContext(AccountContext);
	const { Login } = UserApi();

	// Valdation state from useSignUpSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(useLoginSchema),
	})

	const resetPasswordConfirm = () => {
		console.log('resetPasswordConfirm'); //DELETEME
		setResetPassword(1);
	}

	return (
		<BoxContainer>
			<MarginSpanHeight height='30px' />
			<FormContainer onSubmit={handleSubmit(Login)}>
				<Input type='text' placeholder='email' name='email' {...register("email")} />
				<ValidationWarning> {errors.email?.message} </ValidationWarning>
				<MarginSpanHeight height='12px' />
				<Input type='password' placeholder='password' name='password' {...register("password")} />
				<ValidationWarning> {errors.password?.message} </ValidationWarning>
				<MarginSpanHeight height='4px' />
				<MutedLink onClick={() => resetPasswordConfirm()} href='#'>Forget your password?</MutedLink>
				<MarginSpanHeight height='15px' />
				<SubmitButton type='submit'>Login</SubmitButton>
			</FormContainer>
			<MarginSpanHeight height='5px' />
			<MutedLink href='#'>
				Don't have an account?
				<BoldLink href='#' onClick={switchToSignUp}>
					Sign Up
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}

