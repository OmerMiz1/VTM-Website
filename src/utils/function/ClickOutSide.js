// import {useEffect, useRef} from 'react';

// const ClickOutSide = (ClickOutSide) => {




//     //Hook that close menu clicks outside of the passed ref
//     const useOutsideClose = (ref) => {
//         useEffect(() => {

//             function handleClickOutside(event) {
//                 if (ref.current && !ref.current.contains(event.target)) {
//                     ClickOutSide();
//                 }
//             }
//             // Bind the event listener
//             document.addEventListener("mousedown", handleClickOutside);
//             return () => {
//                 // Unbind the event listener on clean up
//                 document.removeEventListener("mousedown", handleClickOutside);
//             };
//         }, [ref]);
//     }

//      // ref warrper
//      const wrapperRef = useRef(null);

//      return(
//         {
//             useOutsideClose , wrapperRef
//         }
//      );
// } 


// export default ClickOutSide;





