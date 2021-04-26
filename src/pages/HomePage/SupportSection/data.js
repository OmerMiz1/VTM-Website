import {faYoutube, faFacebook, faDropbox, faGoogleDrive, faInstagram } from '@fortawesome/free-brands-svg-icons';


// const of the static start point 
const constTop = 0;
const constLeft = 0;

// Calculates the distance to the left and converts to the required format
const setLeft = (num) => {
    return ( num + constLeft + '%')
}

// Calculates the distance to the top and converts to the required format
const setTop = (num) => {
    return ( num + constTop + 'px')
}

// all the icons that added to the photo
export const SupportData = [
    {
        name: 'youtube',
        icon: faYoutube, 
        left: setLeft(-10),
        top: setTop(10),
        size:'45px',
        color:'red'   
    },
    {
        name: 'facebook',
        icon: faFacebook, 
        left: setLeft(112),
        top: setTop(50),
        size:'45px',
        color:'#4f4fc6'
    }, 
    {
        name: 'faGoogleDrive',
        icon: faGoogleDrive, 
        left: setLeft(-20),
        top: setTop(120),
        size:'45px',
        color:'#16A79E'
    },
    {
        name: 'faDropbox',
        icon: faDropbox, 
        left :setLeft(60),
        top: setTop(210),
        size:'45px',
        color:'#3030B6'
    },
    {
        name: 'faInstagram',
        icon: faInstagram, 
        left :setLeft(110),
        top: setTop(170),
        size:'45px',
        color:'#8d47c9'
    },
   
]


