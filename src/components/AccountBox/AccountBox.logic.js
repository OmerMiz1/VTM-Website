import { useState, createContext, useEffect } from 'react'
import { expandingTransition } from './AccountBox.style';


const AccountBoxLogic = ({ initRegistered }) => {
	const [isConfirm, setIsConfirm] = useState(false)
	const [isResetPassword, setIsResetPassword] = useState(0)
	const [expandedAnimation, setExpandedAnimation] = useState(false);
	const [isRegistered, setIsRegistered] = useState(true);

	useEffect(() => {
		playAnimation();
		setIsRegistered(initRegistered ? true : false)
	}, [initRegistered])

	// start the animation and affter done back to normal state (false)
	const playAnimation = () => {
		setExpandedAnimation(true);
		setTimeout(() => {
			setExpandedAnimation(false);
		}, expandingTransition.duration * 1000 - 1500);
	};

	// toggle to login
	const switchToLogin = () => {
		playAnimation();
		setTimeout(() => {
			setIsRegistered(true);
		}, 500);
	};

	// toggle to singup
	const switchToSignUp = () => {
		playAnimation();
		setTimeout(() => {
			setIsRegistered(false);
		}, 500);
	};

	const setResetPassword = (data) => {
		playAnimation();
		setIsResetPassword(data);
	}

	const contextValue = { switchToSignUp, switchToLogin }

	return {
		expandedAnimation,
		contextValue,
		isRegistered,
		isConfirm,
		setIsConfirm,
		isResetPassword,
		setResetPassword
	};

}

export const AccountContext = createContext()

export default AccountBoxLogic
