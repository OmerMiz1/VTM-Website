import React, {useState , useEffect} from 'react';
import {BoxContainer} from '../../AccountForms.style';

import { useHistory } from 'react-router-dom';


import ChangePassword from './ChangePassword';
import RestPassword from './RestPassword';





export default function ForgetPassword({setResetPassword}) {

  const [isChangePasswordPage, setIsChangePasswordPage] = useState(0);

  const history = useHistory() 
  // change the state to login when route from login 
  useEffect(() => {
    const unlisten = history.listen(location => {
      setResetPassword(0);
      console.log(`You changed the page to: ${location.pathname}`)
    });
    return unlisten;
  }, [history]);


  return (
    <BoxContainer>
      {
        isChangePasswordPage ?
        <ChangePassword setChangePassword={setIsChangePasswordPage} /> :
        <RestPassword setChangePassword={setIsChangePasswordPage} setResetPassword={setResetPassword}/>
      }
    </BoxContainer>
  );
}

