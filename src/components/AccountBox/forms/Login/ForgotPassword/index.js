import React, { useState, useEffect } from 'react';
import { BoxContainer } from '../../AccountForms.style';
import { useHistory } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import ResetPassword from './ResetPassword';


export default function ForgotPassword({ setResetPassword }) {
	const [isChangePasswordPage, setIsChangePasswordPage] = useState(0);
	const [userData, setUserData] = useState([]);
	const history = useHistory();

	// change the state to login when route from login 
	useEffect(() => {
		const unlisten = history.listen(location => {
			setResetPassword(0);
		});
		return unlisten;
	}, [history]);


	return (
		<BoxContainer>
			{
				isChangePasswordPage ?
					<ChangePassword setChangePassword={setIsChangePasswordPage} userData={userData} /> :
					<ResetPassword setChangePassword={setIsChangePasswordPage}
						setUserData={setUserData} setResetPassword={setResetPassword} />
			}
		</BoxContainer>
	);
}

