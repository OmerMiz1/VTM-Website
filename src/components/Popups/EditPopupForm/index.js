import React from 'react';
import {ContanerPopUpForm, CloseIcon} from './EditPopupForm.styled';

import {faTimes} from '@fortawesome/free-solid-svg-icons'

import BackGround from '../../atoms/BackGround';
import EditNoteForm from '../../atoms/Forms/EditNoteForm'

function EditPopupForm({onClose, open, note, addNote}) {
    return (
        <>
            <BackGround/> 
            <ContanerPopUpForm>
                <CloseIcon margin={0} icon={faTimes} color='black' funOnClick={onClose}/>
                <EditNoteForm onClose={onClose} open={open} note={note} addNote={addNote}></EditNoteForm>
            </ContanerPopUpForm>
        </>
    )
}

export default EditPopupForm
