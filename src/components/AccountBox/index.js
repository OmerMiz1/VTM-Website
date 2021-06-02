import React from 'react';
import AccountBoxLogic, {AccountContext} from './AccountBox.logic'
import {BoxContainer, BackDrop, TopContainer, ContentContainer,
    backdropVariants, expandingTransition } from './AccountBox.style';

import SingnUpMannger from './Mannger/SingnUp';
import LoginMannger from './Mannger/Login';



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
                        <LoginMannger isRestPassword={isRestPassword} setResetPassword={setRestPassword}/>
                        : <SingnUpMannger isConfirm={isConfirm} setIsConfirm={setIsConfirm}/>   
                   }
                </ContentContainer>
            </BoxContainer>
        </AccountContext.Provider>

    )
}

export default AccountBox
