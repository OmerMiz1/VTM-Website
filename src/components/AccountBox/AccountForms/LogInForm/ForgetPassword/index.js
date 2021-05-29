import React, {useState} from 'react';
import {BoxContainer} from '../../AccountForms.style';


import ChangePassword from './ChangePassword';
import RestPassword from './RestPassword';




export default function ForgetPassword({setResetPassword}) {

  const [isChangePasswordPage, setIsChangePasswordPage] = useState(0);


  return (
    <BoxContainer>
      {
        isChangePasswordPage ?
        <ChangePassword setIsChange={setIsChangePasswordPage} /> :
        <RestPassword setIsChange={setIsChangePasswordPage} setResetPassword={setResetPassword}/>
      }
    </BoxContainer>
  );
}

