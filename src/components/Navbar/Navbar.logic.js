import {useState} from 'react';


const NavbarLogic = () => {
    const [clickedOnMenu, setClickedOnMenu] = useState(false);

    // toggle clickOnMenu
    const toggleMenuClicked = () => {
        console.log(`clicke toggleMenuClicked`);
        setClickedOnMenu(!clickedOnMenu);
    }
    // close mobile menu
    const closeMobileMenu = () => {
        console.log(`clicke closeMobileMenu`);
        setClickedOnMenu(false);
    }
    return{
        clickedOnMenu, toggleMenuClicked, closeMobileMenu
    }
};

export default NavbarLogic;