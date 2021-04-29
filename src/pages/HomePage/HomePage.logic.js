import {useLayoutEffect} from 'react'
import { useHistory} from 'react-router-dom';

const HomePageLogic =  () => {
    const history = useHistory();
    
    // Scroll up smooth when need to back to home page
    const scrollUp = useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });

    // route to '/access/login'
    const routeToLogin = () => {
        history.push('/access/login')
    }

    // route to '/access/signin'
    const routeToSignUp = () => {
        history.push('/access/signin')
    }

    return {
        scrollUp, routeToSignUp, routeToLogin
    }
}

export default HomePageLogic
