import React, { useState } from 'react';
import { SignupForm } from '../forms/SignUp';
import { ConfirmSignUp } from '../forms/ConfirmSignUp';

function SignUpManager({ isConfirm, setIsConfirm }) {
	const [userData, setUserData] = useState([]);

	return (
		<>
			{
				isConfirm ? <ConfirmSignUp userData={userData} /> :
					<SignupForm setUserData={setUserData} setIsConfirm={setIsConfirm} />
			}
		</>
	);
}

export default SignUpManager;
