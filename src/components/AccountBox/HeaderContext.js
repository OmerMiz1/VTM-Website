import React from 'react'
import { HeaderContainer, SmallText, HeaderText } from './AccountBox.style';

function HeaderContext({ isRegistered, isConfirm, isResetPassword }) {
	return (
		<HeaderContainer>
			<HeaderText>{isRegistered ? isResetPassword ? 'Reset' : 'Welcome' : 'Create'}</HeaderText>
			<HeaderText>{isRegistered ? isResetPassword ? 'Password' : 'Back' : 'Account'}</HeaderText>
			<SmallText>{isRegistered ? isResetPassword ? 'Enter username' : 'Please sign-in to continue!'
				: isConfirm ? 'Confirm your account to continue!' : 'Sign up to continue!'}</SmallText>
		</HeaderContainer>
	)
}

export default HeaderContext
