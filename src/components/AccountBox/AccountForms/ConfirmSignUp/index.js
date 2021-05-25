import React from 'react';
// import { useContext } from 'react';
// import {AccountContext} from '../../AccountBox.logic'
import {BoldLink, BoxContainer, FormContainer, ValidsionWarnnig,
  Input, MutedLink, SubmitButton, MrginSpanHeight} from '../AccountForms.style';
import AccountApi from '../../Account.Api';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useConfirmSignupSchema} from '../../../../validation/SignupValidation';


export function ConfirmSignUp(props) {
  //   // context - swich to signup
  // const {} = useContext(AccountContext)

  // account api - confirm:
  const {PostConfirmForm} = AccountApi();

  // Valdation state from useSignupSchema (schema)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(useConfirmSignupSchema),
  })

  const resendConfirmCode = () => {
    console.log(`resend`);
  }

  const submitConfirm = (data) => {
    console.log('ccccccccc');
    PostConfirmForm(data)
  }

  
  
  return (
    <BoxContainer>
      <MrginSpanHeight height='30px'/>
      <FormContainer onSubmit={handleSubmit(submitConfirm)}>
        <Input type='text' placeholder='Confirm Code' name='confirm' {...register("confirm")}/>
        <ValidsionWarnnig> {errors.confirm?.message} </ValidsionWarnnig>
        <MrginSpanHeight height='20px'/>
        <SubmitButton type='submit'>Confirm SignUp</SubmitButton>
      </FormContainer>
        <MrginSpanHeight height='10px'/>
        <MutedLink href='#'>
        Lost your code? 
        <BoldLink onClick={ () => resendConfirmCode()}>
          Resend Code
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

