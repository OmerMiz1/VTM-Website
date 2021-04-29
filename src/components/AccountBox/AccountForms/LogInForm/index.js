import React from 'react';
import { useContext } from 'react';
import {AccountContext} from '../../AccountBox.logic'
import {BoldLink, BoxContainer, FormContainer,
  Input, MutedLink, SubmitButton, MrginSpanHeight} from '../AccountForms.style';

export function LoginForm(props) {

  const {swichToSingUp} = useContext(AccountContext)
  
  return (
    <BoxContainer>
      <MrginSpanHeight height='30px'/>
      <FormContainer>
        <Input type='email' placeholder='Email' name='email'/>
        <MrginSpanHeight height='12px'/>
        <Input type='password' placeholder='Password' name='password'/>
        <MrginSpanHeight height='4px'/>
        <MutedLink href='#'>Forget your password?</MutedLink>
        <MrginSpanHeight height='15px'/>
        <SubmitButton type='submit'>Signin</SubmitButton>
      </FormContainer>
        <MrginSpanHeight height='5px'/>
        <MutedLink href='#'>
        Don't have an accoun?
        <BoldLink href='#' onClick={swichToSingUp}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

