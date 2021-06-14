import React, {useEffect, useRef} from 'react';
import { ContainerPopupForm, CloseIcon, Title } from '../Popup.styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AccessPopup({ children, onClose, title }) {

    const wrapperRef = useRef(null); // ref click out of the navbar

	// TODO Create global hook..
	// Hook that close menu clicks outside of the passed ref
	const useOutsidePopup = (ref) => {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
                    console.log(`clicked`);
					onClose();
				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
    };

    useOutsidePopup(wrapperRef);


	return (
		<>
			<ContainerPopupForm ref={wrapperRef}>
				<Title>{title}</Title>
				<CloseIcon margin={0} icon={faTimes} color='black' funOnClick={onClose} />
				{children}
			</ContainerPopupForm>
		</>
	);
}

export default AccessPopup;
