import React from 'react';
import AccountBoxLogic, { AccountContext } from './AccountBox.logic'
import {
	BoxContainer, BackDrop, TopContainer, ContentContainer,
	backdropVariants, expandingTransition
} from './AccountBox.style';
import SignUpManager from './manager/SignUp';
import LoginManager from './manager/Login';
import HeaderContext from './HeaderContext';


function AccountBox(props) {
	// logic of the animation and the Context (context and values)
	const { expandedAnimation, contextValue, isRegistered,
		isConfirm, setIsConfirm, isResetPassword, setResetPassword } = AccountBoxLogic(props);

	console.log(props)
	return (
		<AccountContext.Provider value={contextValue}>
			<BoxContainer>
				<TopContainer>
					<BackDrop
						initial={false}
						animate={expandedAnimation ? 'expanded' : 'collapsed'}
						variants={backdropVariants}
						transition={expandingTransition} />
					<HeaderContext isRegistered={isRegistered} isConfirm={isConfirm} isResetPassword={isResetPassword} />
				</TopContainer>
				<ContentContainer>
					{
						isRegistered ?
							<LoginManager isResetPassword={isResetPassword} setResetPassword={setResetPassword} />
							: <SignUpManager isConfirm={isConfirm} setIsConfirm={setIsConfirm} />
					}
				</ContentContainer>
			</BoxContainer>
		</AccountContext.Provider>
	);
}

export default AccountBox;
