import React from 'react';
// import { useContext } from 'react';
// import {AccountContext} from '../../AccountBox.logic'
import {BoldLink, BoxContainer, FormContainer, ValidsionWarnnig,
  Input, MutedLink, SubmitButton, MrginSpanHeight} from '../../../AccountForms.style';
import AccountApi from '../../../../Account.Api';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {ChangePasswordSchema} from '../../../../../../validation/ChangePasswordValidation';



export default function ChangePassword() {
  
  // account api - confirm:
  const {SendNewPsswordToEmail} = AccountApi();

  // Valdation state from useSignupSchema (schema)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  })

  // const resendPassword = () => {
  //   console.log(`resend password`);
  // }

  const submitConfirm = (data) => {
    console.log('post reset passwod (send to mail confirm password)');
    SendNewPsswordToEmail(data);
  }

  
  
  return (
    <BoxContainer>
      <MrginSpanHeight height='30px'/>
      <FormContainer onSubmit={handleSubmit(submitConfirm)}>
        <Input type='text' placeholder='user name' name='user' {...register("user")}/>
        <ValidsionWarnnig> {errors.user?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='6px'/>
        <Input type='email' placeholder='email' name='email' {...register("email")}/>
        <ValidsionWarnnig> {errors.email?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='20px'/>
        <SubmitButton type='submit'>Send Password</SubmitButton>
      </FormContainer>
        <MrginSpanHeight height='10px'/>
        {/* <MutedLink href='#'>
        Lost your password? 
        <BoldLink onClick={ () => resendPassword()}>
          Resend Password
        </BoldLink>
      </MutedLink> */}
    </BoxContainer>
  );
}

