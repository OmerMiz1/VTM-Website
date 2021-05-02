import {useState, useEffect, useRef} from 'react';

const NavbarLogic = () => {
    const [clickedOnMenu, setClickedOnMenu] = useState(false);

    // toggle clickOnMenu
    const toggleMenuClicked = () => {
        setClickedOnMenu(!clickedOnMenu);
    }
    // close mobile menu
    const closeMobileMenu = () => {
        setClickedOnMenu(false);

    }

    //Hook that close menu clicks outside of the passed ref
    const useOutsideCloseMenu = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    closeMobileMenu();
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

    return{
        clickedOnMenu, toggleMenuClicked, closeMobileMenu, useOutsideCloseMenu, wrapperRef
    }
};

export default NavbarLogic;