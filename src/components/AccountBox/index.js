import React from 'react';
import AccountBoxLogic, {AccountContext} from './AccountBox.logic'
import {BoxContainer, BackDrop, TopContainer, ContentContainer,
    backdropVariants, expandingTransition } from './AccountBox.style';
import {LoginForm} from './AccountForms/LogInForm';
import {SigninForm} from './AccountForms/SigninForm';
import  HeaderContext from './HeaderContext'


function AccountBox(props) {
    // logic of the animation and the Context (context and values)
    const {expandedAnimation,
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
                    <HeaderContext isRegistered={isRegistered}/>                 
                </TopContainer>
                <ContentContainer>
                    {isRegistered ? <LoginForm/>: <SigninForm/>}
                </ContentContainer>
            </BoxContainer>
        </AccountContext.Provider>

    )
}

export default AccountBox
