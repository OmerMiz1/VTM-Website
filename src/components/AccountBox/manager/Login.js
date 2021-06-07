import React from 'react';
import LoginForm from '../forms/Login';
import ForgotPassword from '../forms/Login/ForgotPassword';

function LoginManager({ isResetPassword, setResetPassword }) {

	return (
		<>
			{
				isResetPassword ? <ForgotPassword setResetPassword={setResetPassword} /> :
					<LoginForm setResetPassword={setResetPassword} />
			}
		</>
	);
}

export default LoginManager;

