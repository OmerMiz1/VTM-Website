import { useState, useEffect, useRef, useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';


const CardSummaryLogic = (favorites) => {
	const [isDropDown, setIsDropDown] = useState(false);
	const [isFavorite, setIsFavorite] = useState(favorites);
	const { toggleFavorite, toggleLike } = useContext(SummariesContext);


	//only frontend change here  
	const toggleIsFavorite = (sid) => {
		console.log(`toggleIs Favorite... now summay sid: ` + sid + ' is - ' + isFavorite); //DELETEME
		setIsFavorite(!isFavorite);
		toggleFavorite(sid);
	}

	const toggleDropDown = () => setIsDropDown(!isDropDown);
	const closeDropDown = () => setIsDropDown(false); // close mobile menu
	const wrapperRef = useRef(null); // ref click out of the navbar

	// TODO Create global hook..
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
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	return {
		isDropDown,
		toggleDropDown,
		useOutsideCloseMenu,
		wrapperRef,
		toggleIsFavorite,
		isFavorite,
		toggleLike
	}
}

export default CardSummaryLogic;