import {useState, useEffect, useRef} from 'react';

function OnNavBarLogic() {
    const [isUseDropDown, setIsUserDropDown] = useState(false);

    const toggleUserDropDown = () => {
        setIsUserDropDown(!isUseDropDown);
    }

    // close mobile menu
    const closeDropDwon = () => {
        setIsUserDropDown(false);
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
        isUseDropDown, toggleUserDropDown,
        useOutsideCloseMenu,
        wrapperRef,
    }
}

export default OnNavBarLogic

