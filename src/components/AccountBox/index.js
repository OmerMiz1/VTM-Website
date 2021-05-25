import React from 'react';
import AccountBoxLogic, {AccountContext} from './AccountBox.logic'
import {BoxContainer, BackDrop, TopContainer, ContentContainer,
    backdropVariants, expandingTransition } from './AccountBox.style';
import {LoginForm} from './AccountForms/LogInForm';
import {SignupForm} from './AccountForms/SignupForm';
import {ConfirmSignUp} from './AccountForms/ConfirmSignUp';



import  HeaderContext from './HeaderContext';


function AccountBox(props) {
    // logic of the animation and the Context (context and values)
    const {expandedAnimation, isConfirm, setIsConfirm,
         constextValue, isRegistered} = AccountBoxLogic(props);



    return (
        <AccountContext.Provider value={constextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop 
                    initial={false}
                    animate={expandedAnimation ? 'expanded': 'collapsed'}
                    variants= {backdropVariants}
                    transition= {expandingTransition}/>
                    <HeaderContext isRegistered={isRegistered} isConfirm={isConfirm}/>                 
                </TopContainer>
                <ContentContainer>
                    {isRegistered ? <LoginForm/> :
                    isConfirm ? <ConfirmSignUp/> : <SignupForm setIsConfirm={setIsConfirm}/>}
                </ContentContainer>
            </BoxContainer>
        </AccountContext.Provider>

    )
}

export default AccountBox
