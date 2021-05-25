import React from 'react'
import {HeaderContainer, SmallText, HeaderText} from './AccountBox.style';

function HeaderContext({isRegistered, isConfirm}) {
    return (
        <HeaderContainer>
            <HeaderText>{isRegistered? 'Welcome' : 'Create'}</HeaderText>
            <HeaderText>{isRegistered ? 'Back' : 'Account'}</HeaderText>
            <SmallText>{ isRegistered ? 'Please sign-in to continue!'
             : isConfirm ? 'Please confirm to continue!': 'Please sign-up to continue!'}</SmallText>
        </HeaderContainer>     
    )
}

export default HeaderContext
