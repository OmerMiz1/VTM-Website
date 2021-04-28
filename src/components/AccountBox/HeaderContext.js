import React from 'react'
import {HeaderContainer, SmallText, HeaderText} from './AccountBox.style';

function HeaderContext(props) {
    return (
        <HeaderContainer>
            <HeaderText>{props.isRegistered ? 'Welcome' : 'Create'}</HeaderText>
            <HeaderText>{props.isRegistered ? 'Back' : 'Account'}</HeaderText>
            <SmallText>{props.isRegistered ? 'Please sign-in to continue!' : 'Please sign-up to continue!'}</SmallText>
        </HeaderContainer>     
    )
}

export default HeaderContext
