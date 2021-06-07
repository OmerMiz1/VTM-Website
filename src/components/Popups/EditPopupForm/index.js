import React from 'react';
import { ContainerPopupForm, CloseIcon, Title } from './EditPopupForm.styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import BackGround from '../../atoms/BackGround';

function EditPopupForm({ children, onClose, title }) {

	return (
		<>
			<BackGround />
			<ContainerPopupForm>
				<Title>{title}</Title>
				<CloseIcon margin={0} icon={faTimes} color='black' funOnClick={onClose} />
				{children}
			</ContainerPopupForm>
		</>
	);
}

export default EditPopupForm;
