import {useState} from 'react';


const NavbarLogic = () => {
    const [clickedOnMenu, setClickedOnMenu] = useState(false);

    // toggle clickOnMenu
    const toggleMenuClicked = () => setClickedOnMenu(!clickedOnMenu);
    // close mobile menu
    const closeMobileMenu = () => setClickedOnMenu(false);

    return{
        clickedOnMenu, toggleMenuClicked, closeMobileMenu
    }
};

export default NavbarLogic;