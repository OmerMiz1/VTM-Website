import React from 'react';
import {TiltleProfile, SectionForm, ValidsionWarnnig, SectionFormSubmit } from '../EditProfileForm/EditProfileForm.style';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {ChangePasswordSchema} from '../../../../validation/ChangePasswordValidation';



function EditProfileForm({setChangePassword}) {
    
    //TODO post to server...( edit user api and content)
    const submitChangePassword = (data) => {
        console.log('pProfile', data);
    }

    // Valdation state from ProfileUserSchema (schema)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ChangePasswordSchema),
    })

                // yourPassword, newPassword, confirmPassword

    return (
        <form onSubmit={handleSubmit(submitChangePassword)}>
            <TiltleProfile>Change Your Password</TiltleProfile>

                <SectionForm displayFlexColume={1} border={1}>
                    <p>If you want to change your current password,<br/>
                       Enter the old password in the form and select a new password</p>
                    <a onClick={() => setChangePassword(0)}>Bcak to my Profile</a>
                </SectionForm>



                <SectionForm>
                    <label>Confirm Your Existing Password:</label>
                    <input defaultValue="" type="password" name='password' {...register('password')}></input>
                    <ValidsionWarnnig> {errors.password?.message} </ValidsionWarnnig>
                    {/* TODO ADD reset password */}
                    {/* <p>If you forgot your password, you can reset it.</p> */}

                </SectionForm>
                <SectionForm>
                    <label>New Password:</label>
                    <input defaultValue="" type="password" name='newPassword' {...register('newPassword')}></input>
                    <ValidsionWarnnig> {errors.newPassword?.message} </ValidsionWarnnig>
                </SectionForm>
                
                <SectionForm>
                    <label>Confirm New Password:</label>
                    <input defaultValue="" type="password" name='confirm' {...register('confirm')}></input>
                    <ValidsionWarnnig> {errors.confirm?.message} </ValidsionWarnnig>
                </SectionForm>

                <>
                    <SectionFormSubmit>
                        <input type="submit" value="Save Changes" name="reset"/>
                    </SectionFormSubmit>
                </>
            </form>
    )
}

export default EditProfileForm
