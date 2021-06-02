import React from 'react';
import LoginForm from '../AccountForms/LogInForm';
import ForgetPassword from '../AccountForms/LogInForm/ForgetPassword';

function LoginMannger({isRestPassword, setResetPassword }) {
    
    return (
        <>
        {
            isRestPassword ? <ForgetPassword setResetPassword={setResetPassword}/> :
            <LoginForm setResetPassword={setResetPassword}/>
        }
        </>
    )
}

export default LoginMannger

