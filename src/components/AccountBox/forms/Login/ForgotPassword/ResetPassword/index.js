import React from 'react';
import {
	BoxContainer, FormContainer, ValidationWarning, BoldLink,
	Input, SubmitButton, MarginSpanHeight
} from '../../../AccountForms.style';
import UserApi from '../../../../../../api/User';

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from '../../../../../../validation/LoginValidation';


export default function ResetPassword({ setResetPassword, setChangePassword, setUserData }) {
	const { ResetPassword } = UserApi();

	// Valdation state from useSignupSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ResetPasswordSchema),
	});

	// FIXME data.username?
	const submitSendPassword = (data) => {
		console.log('submitSendPassword'); //DELETEME
		setUserData(data);
		setChangePassword(1);
		ResetPassword(data);
	}

	return (
		<BoxContainer>
			<MarginSpanHeight height='30px' />
			<FormContainer onSubmit={handleSubmit(submitSendPassword)}>
				{/* <Input type='text' placeholder='user name' name='user' {...register("user")}/>
					<ValidationWarning> {errors.user?.message} </ValidationWarning>
					<MarginSpanHeight height='6px'/> */}

				{/* FIXME? type = email, username */}
				<Input type='email' placeholder='email' name='email' {...register("email")} />
				<ValidationWarning> {errors.email?.message} </ValidationWarning>
				<MarginSpanHeight height='20px' />
				<SubmitButton type='submit'>Reset Password</SubmitButton>
			</FormContainer>
			<MarginSpanHeight height='10px' />
			<BoldLink onClick={() => setResetPassword(0)}>
				Back To Login
	  		</BoldLink>
		</BoxContainer>
	);
}

