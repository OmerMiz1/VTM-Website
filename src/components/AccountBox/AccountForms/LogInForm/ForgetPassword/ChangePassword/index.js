import React from 'react';

import {BoxContainer, FormContainer, ValidsionWarnnig, MutedLink, BoldLink,
  Input, SubmitButton, MrginSpanHeight} from '../../../AccountForms.style';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {ChangePasswordSchema} from '../../../../../../validation/ChangePasswordValidation';



export default function ChangePassword({userData}) {
  
  // Valdation state from useSignupSchema (schema)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  })

  const resendPassword = () => {
    console.log(`resend to : `, userData);


  }

  const submitConfirm = (data) => {
    console.log('Change password');
  }

  
  return (
    <BoxContainer>
      <MrginSpanHeight height='30px'/>
      <FormContainer onSubmit={handleSubmit(submitConfirm)}>
        <Input type='password' placeholder='Verification code' name='password' {...register("password")}/>
        <ValidsionWarnnig> {errors.password?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='6px'/>
        <Input type='password' placeholder='new password' name='newPassword' {...register("newPassword")}/>
        <ValidsionWarnnig> {errors.newPassword?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='6px'/>
        <Input type='confirm' placeholder='confirm password' name='confirm' {...register("confirm")}/>
        <ValidsionWarnnig> {errors.confirm?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='20px'/>
        <SubmitButton type='submit'>Change Password</SubmitButton>
      </FormContainer>
        <MrginSpanHeight height='10px'/>
        <MutedLink href='#'>
        You did not receive a verification code? 
        <BoldLink onClick={ () => resendPassword()}>
          Resend verification code
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

