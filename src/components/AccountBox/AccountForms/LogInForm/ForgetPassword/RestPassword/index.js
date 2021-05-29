import React, {useEffect} from 'react';
// import { useContext } from 'react';
// import {AccountContext} from '../../AccountBox.logic'
import {BoxContainer, FormContainer, ValidsionWarnnig, BoldLink, 
  Input, SubmitButton, MrginSpanHeight} from '../../../AccountForms.style';
import AccountApi from '../../../../Account.Api';

import { useHistory } from 'react-router-dom';


//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {RestPasswordSchema} from '../../../../../../validation/LoginValidation';


export default function RestPassword({setResetPassword}) {
  
  // account api - confirm:
  const {SendNewPsswordToEmail} = AccountApi();

  // Valdation state from useSignupSchema (schema)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RestPasswordSchema),
  })


  const submitConfirm = (data) => {
    console.log('post reset passwod (send to mail confirm password)');
    SendNewPsswordToEmail(data);
  }


  
  const history = useHistory() 
  // change the state to login when route from login 
  useEffect(() => {
      return history.listen((location) => { 
        setResetPassword(0);
        console.log(`You changed the page to: ${location.pathname}`) 
      }) 
  },[history]) 
  

  
  
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
        <BoldLink onClick={ () => setResetPassword(0)}>
          Back To LogIn
        </BoldLink>
    </BoxContainer>
  );
}

