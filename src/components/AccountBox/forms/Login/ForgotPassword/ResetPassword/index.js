import React, { useContext } from 'react';
import {
	BoxContainer, FormContainer, ValidationWarning, BoldLink,
	Input, SubmitButton, MarginSpanHeight
} from '../../../AccountForms.style';
import { UserContext } from '../../../../../../utils/context/UserContext';

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from '../../../../../../validation/LoginValidation';


export default function ResetPassword({ setResetPassword, setChangePassword, setUserData }) {
	const { ResetPassword } = useContext(UserContext);

	// Valdation state from useSignupSchema (schema)
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(ResetPasswordSchema),
	});

	// FIXME data.username?
	const submitSendPassword = async (data) => {
		console.log('submitSendPassword, data:', data); //DELETEME
		
		setUserData(data);

		const isSuccess = await ResetPassword(data.username);
		setChangePassword(isSuccess);
	}

	return (
		<BoxContainer>
			<MarginSpanHeight height='30px' />
			<FormContainer onSubmit={handleSubmit(submitSendPassword)}>
				<Input type='text' placeholder='username' name='username' {...register("username")}/>
					<ValidationWarning> {errors.username?.message} </ValidationWarning>
					<MarginSpanHeight height='6px'/>
					
				{/* <Input type='text' placeholder='username' name='username' {...register("username")} />
				<ValidationWarning> {errors.email?.message} </ValidationWarning>
				<MarginSpanHeight height='20px' /> */}
				<SubmitButton type='submit'>Reset Password</SubmitButton>
			</FormContainer>
			<MarginSpanHeight height='10px' />
			<BoldLink onClick={() => setResetPassword(0)}>
				Back To Login
	  		</BoldLink>
		</BoxContainer>
	);
}

