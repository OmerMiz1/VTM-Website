import React from 'react';
import {TiltleProfile, ColumeFrom, SectionForm, ValidsionWarnnig, SectionFormSubmit } from './EditProfileForm.style';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {ProfileUserSchema} from '../../../../validation/ProfileEditValidation';





function EditProfileForm({setChangePassword}) {
    
    //TODO post to server...( edit user api and content)
    const submitEditProfile = (data) => {
        console.log('pProfile', data);
    }

    // Valdation state from ProfileUserSchema (schema)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ProfileUserSchema),
    })


    return (
        <form onSubmit={handleSubmit(submitEditProfile)}>
            <TiltleProfile>My Profile</TiltleProfile>


                <SectionForm displayFlexColume={1} border={1}>
                    <p>Your Account Email is: <strong>shon4me@gmail.com</strong></p>
                    <p>Your User Name is: <strong>shon4me</strong></p>
                    <a onClick={() => setChangePassword(1)}>Change you password</a>
                </SectionForm>


                <SectionForm>
                    <ColumeFrom margin='0 -15px'>
                        <label>First Name</label>
                        <input defaultValue="temp" type="text" name='firstName' {...register('firstName')}></input>
                        <ValidsionWarnnig> {errors.firstName?.message} </ValidsionWarnnig>
                    </ColumeFrom>

                    <ColumeFrom margin='0 0 0 30px'>
                        <label>Last Name</label>
                        <input defaultValue="temp" type="text" name='lastName' {...register('lastName')}></input>
                        <ValidsionWarnnig> {errors.lastName?.message} </ValidsionWarnnig>
                    </ColumeFrom>

                </SectionForm>

                <SectionForm>
                    <ColumeFrom margin='0 -15px'>
                        <label>Country</label>
                        <input defaultValue="temp" type="text" name='country' {...register('country')}></input>
                        <ValidsionWarnnig> {errors.country?.message} </ValidsionWarnnig>
                    </ColumeFrom>

                    <ColumeFrom margin='0 0 0 30px'>
                        <label>City</label>
                        <input defaultValue="temp" type="text" name='city' {...register('city')}></input>
                        <ValidsionWarnnig> {errors.city?.message} </ValidsionWarnnig>
                    </ColumeFrom>

                </SectionForm>

                <SectionForm>
                    {/* TODO change to select list */}
                    <label>Education</label>
                    <input defaultValue="temp" type="text" name='education' {...register('education')}></input>
                    <ValidsionWarnnig> {errors.education?.message} </ValidsionWarnnig>

                </SectionForm>
                <SectionForm>
                    <label>Age</label>
                    <input defaultValue="temp" type="number" name='age' {...register('age')}></input>
                    <ValidsionWarnnig> {errors.age?.message} </ValidsionWarnnig>
                </SectionForm>
                
                {/* TODO change to select list */}
                <SectionForm>
                    <label>Interests</label>
                    <select name='interests' {...register('interests')}>
                        <option> Sport</option>
                        <option> Cs</option>
                        <option> sdaf sadf</option>
                    </select>
                    <ValidsionWarnnig> {errors.interests?.message} </ValidsionWarnnig>


                </SectionForm>

                <>
                    <SectionFormSubmit>
                        {/* <input type="submit" value="Reset All" name="reset"/> */}
                        <input type="submit" value="Save Changes" name="reset"/>
                    </SectionFormSubmit>
                </>
            </form>
    )
}

export default EditProfileForm
