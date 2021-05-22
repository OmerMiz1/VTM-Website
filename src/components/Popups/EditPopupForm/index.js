import React from 'react';
import {ContanerPopUpForm, CloseIcon, Title} from './EditPopupForm.styled';

import {faTimes} from '@fortawesome/free-solid-svg-icons'

import BackGround from '../../atoms/BackGround';

function EditPopupForm({ children ,onClose, title}) {
    
    return (
        <>
            <BackGround/> 
            <ContanerPopUpForm>
                <Title>{title}</Title>
                <CloseIcon margin={0} icon={faTimes} color='black' funOnClick={onClose}/>
                {children}
            </ContanerPopUpForm>
        </>
    )
}

export default EditPopupForm
