import { useState, useEffect, useRef } from 'react';

function OnNavBarLogic() {
	const [isUserDropDown, setIsUserDropDown] = useState(false);

	const toggleUserDropDown = () => setIsUserDropDown(!isUserDropDown);
	const closeDropDown = () => setIsUserDropDown(false); 	// close mobile menu

	// TODO Create global hook
	// Hook that close menu clicks outside of the passed ref
	const useOutsideCloseMenu = (ref) => {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					closeDropDown();
				}
			}

			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	// ref click out of the navbar
	const wrapperRef = useRef(null);

	return {
		isUserDropDown, toggleUserDropDown,
		useOutsideCloseMenu,
		wrapperRef,
	};
}

export default OnNavBarLogic;


