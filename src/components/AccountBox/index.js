import React from 'react';
import AccountBoxLogic, {AccountContext} from './AccountBox.logic'
import {BoxContainer, BackDrop, TopContainer, ContentContainer,
    backdropVariants, expandingTransition } from './AccountBox.style';
import LoginForm from './AccountForms/LogInForm';
import {SignupForm} from './AccountForms/SignupForm';
import {ConfirmSignUp} from './AccountForms/ConfirmSignUp';
import ForgetPassword from './AccountForms/LogInForm/ForgetPassword';



import  HeaderContext from './HeaderContext';


function AccountBox(props) {
    // logic of the animation and the Context (context and values)
    const {expandedAnimation,constextValue, isRegistered,
         isConfirm, setIsConfirm, isRestPassword, setRestPassword} = AccountBoxLogic(props);



    return (
        <AccountContext.Provider value={constextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop 
                    initial={false}
                    animate={expandedAnimation ? 'expanded': 'collapsed'}
                    variants= {backdropVariants}
                    transition= {expandingTransition}/>
                    <HeaderContext isRegistered={isRegistered} isConfirm={isConfirm} isRestPassword={isRestPassword}/>                 
                </TopContainer>
                <ContentContainer>
                   {
                       isRegistered ?
                        isRestPassword ? <ForgetPassword setResetPassword={setRestPassword}/>
                            : <LoginForm setResetPassword={setRestPassword}/>
                        : isConfirm ? <ConfirmSignUp/> : <SignupForm setIsConfirm={setIsConfirm}/>
                   }
                </ContentContainer>
            </BoxContainer>
        </AccountContext.Provider>

    )
}

export default AccountBox
