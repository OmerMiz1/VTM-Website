import {useState, useEffect, useRef, useContext } from 'react';
import {SummariesContext} from '../../../utils/context/SummariesContext';



const CardSummaryLogic = (favorites) => {
    const [isDropDown, setIsDropDown] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorites);

    const {toggleFavorite} = useContext(SummariesContext);


   //only frontend change here  
    const toggleIsFavorite = (sid) => {
        console.log(`toggleIs Favorite... now summay sid: ` + sid + ' is - ' + isFavorite); //TODO delete
        setIsFavorite(!isFavorite);
        toggleFavorite(sid);
    }

    const toggleDropDown = () => {
        setIsDropDown(!isDropDown);
    }

    // close mobile menu
    const closeDropDwon = () => {
        setIsDropDown(false);
    }

    //TODO CRETE GLOBAL HOOk..
    //Hook that close menu clicks outside of the passed ref
    const useOutsideCloseMenu = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    closeDropDwon();
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

    // ref click out of the navbar
    const wrapperRef = useRef(null);



    return {
        isDropDown, toggleDropDown,
        useOutsideCloseMenu,
        wrapperRef,
        toggleIsFavorite, isFavorite
    }
}

 
export default CardSummaryLogic;