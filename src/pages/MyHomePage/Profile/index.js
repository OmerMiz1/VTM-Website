import React from 'react'
//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {ProfileUserSchema} from '../../../validation/ProfileEditValidation';

import {ProfileContainer, TiltleProfile, SectionFormSubmit,
     SectionForm, ColumeFrom, ValidsionWarnnig} from './ProfilePage.style'


//TODO ADD all the user and put in the input
function ProfilePage() {

    //TODO post to server...( edit user api and content)
    const submitEditProfile = (data) => {
        console.log('pProfile', data);
    }

     // Valdation state from ProfileUserSchema (schema)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ProfileUserSchema),
    })

    return (
        <ProfileContainer>
            <TiltleProfile>My Profile</TiltleProfile>
            
            <form onSubmit={handleSubmit(submitEditProfile)}>
                <SectionForm displayFlexColume={1} border={1}>
                    <p>Your Account Email is: <strong>shon4me@gmail.com</strong></p>
                    <p>Your User Name is: <strong>shon4me</strong></p>
                    <a>Change you password</a>
                </SectionForm>


                <SectionForm>
                    <ColumeFrom margin='0 -15px'>
                        <label>First Name</label>
                        <input defaultValue="temp" type="text" name='firstName' {...register('firstName')}></input>
                        <ValidsionWarnnig> {errors.firstName?.message} </ValidsionWarnnig>
                    </ColumeFrom>

                    <ColumeFrom margin='0 15px'>
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

                    <ColumeFrom margin='0 15px'>
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
            


                
        </ProfileContainer>
    )
}

export default ProfilePage
