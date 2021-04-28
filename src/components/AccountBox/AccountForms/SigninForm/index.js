import React, {useContext} from "react";
import {BoldLink, BoxContainer, FormContainer,
  Input, MutedLink, SubmitButton, MrginSpanHeight,
} from '../AccountForms.style'
import {AccountContext} from '../../AccountBox.logic'

export function SigninForm(props) {

    const {swichTosignin} = useContext(AccountContext)

    return (
        <BoxContainer>
          <FormContainer>
            <Input type="text" placeholder="User Name" />
            <MrginSpanHeight height='6px'/>
            <Input type="email" placeholder="Email" />
            <MrginSpanHeight height='6px'/>
            <Input type="password" placeholder="Password" />
            <MrginSpanHeight height='6px'/>
            <Input type="password" placeholder="Confirm Password" />
          </FormContainer>
          <SubmitButton type="submit">Signup</SubmitButton>
          <MutedLink href="#">
            Already have an account?
            <BoldLink href="#" onClick={swichTosignin}>
              Signin
            </BoldLink>
          </MutedLink>
        </BoxContainer>
    );
}

