import {useState, createContext, useEffect} from 'react'
import {expandingTransition } from './AccountBox.style';


const AccountBoxLogic = (props) => {
    const {initRegistered} = props;
    
    const [isConfirm, setIsConfirm] = useState(false)
    const [isRestPassword, setIsRestPassword] = useState(0)

    // use state if expanded the animation
    const [expandedAnimation, setExpandedAnimation] = useState(false);
    // use state if sing in or login
    const [isRegistered, setIsRegistered] = useState(true);
    
    useEffect(() => {
        playAnimation();
        setIsRegistered(initRegistered ? true: false)
    }, [initRegistered])

    // start the animation and affter done back to normal state (false)
    const playAnimation = () => {
        setExpandedAnimation(true);
        setTimeout(() => {
            setExpandedAnimation(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    // taggle to Signup
    const swichToLogIn = () => {
        playAnimation();
        setTimeout(() => {
            setIsRegistered(true);
        }, 500);
    };

    // taggle to singup
    const swichToSingUp = () => {
        playAnimation();
        setTimeout(() => {
            setIsRegistered(false);
        }, 500);
    };


    const setRestPassword = (data) => {
        playAnimation();
        setIsRestPassword(data)
    }

    const constextValue = {swichToSingUp, swichToLogIn}
    
    return {
        expandedAnimation,
        constextValue,
        isRegistered,
        isConfirm,
        setIsConfirm,
        isRestPassword,
        setRestPassword
    };

}

export const AccountContext = createContext()

export default AccountBoxLogic
