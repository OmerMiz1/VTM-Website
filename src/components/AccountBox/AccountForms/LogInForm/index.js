import React from 'react';
import { useContext } from 'react';
import {AccountContext} from '../../AccountBox.logic'
import {BoldLink, BoxContainer, FormContainer, ValidsionWarnnig,
  Input, MutedLink, SubmitButton, MrginSpanHeight} from '../AccountForms.style';
import AccountApi from '../../Account.Api';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useLoginSchema} from '../../../../validation/LoginValidation'


export function LoginForm(props) {
    // context - swich to signup
  const {swichToSingUp} = useContext(AccountContext)

  // account api - post login:
  const {Login} = AccountApi();

  // Valdation state from useSignupSchema (schema)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(useLoginSchema),
  })
  
  return (
    <BoxContainer>
      <MrginSpanHeight height='30px'/>
      <FormContainer onSubmit={handleSubmit(Login)}>
        <Input type='text' placeholder='Email' name='email' {...register("email")}/>
        <ValidsionWarnnig> {errors.email?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='12px'/>
        <Input type='password' placeholder='Password' name='password' {...register("password")}/>
        <ValidsionWarnnig> {errors.password?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='4px'/>
        <MutedLink href='#'>Forget your password?</MutedLink>
        <MrginSpanHeight height='15px'/>
        <SubmitButton type='submit'>Sign In</SubmitButton>
      </FormContainer>
        <MrginSpanHeight height='5px'/>
        <MutedLink href='#'>
        Don't have an accoun?
        <BoldLink href='#' onClick={swichToSingUp}>
          Sign Up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

