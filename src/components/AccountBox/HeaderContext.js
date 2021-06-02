import React from 'react'
import {HeaderContainer, SmallText, HeaderText} from './AccountBox.style';

function HeaderContext({isRegistered, isConfirm, isRestPassword}) {
    return (
        <HeaderContainer>
            <HeaderText>{isRegistered? isRestPassword ? 'Rest' : 'Welcome' : 'Create'}</HeaderText>
            <HeaderText>{isRegistered ? isRestPassword ? 'Password' :'Back' : 'Account'}</HeaderText>
            <SmallText>{ isRegistered ? isRestPassword ? 'Please select email': 'Please sign-in to continue!'
             : isConfirm ? 'Please confirm to continue!': 'Please sign-up to continue!'}</SmallText>
        </HeaderContainer>     
    )
}

export default HeaderContext
