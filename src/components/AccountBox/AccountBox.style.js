import styled from 'styled-components';
import {motion} from 'framer-motion';


export const BoxContainer = styled.section`
    width: 400px;
    min-height: 680px;
    display:flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 500px) {
        /* width: 280px; */
        /* min-height: 550px; */
    }
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 35px;
    padding-top: 10em;
    @media screen and (max-width: 500px) {
        padding: 0 30px;
        height: 200px;
    }
`

export const BackDrop = styled(motion.div)`
    width: 100%;
    height: 600px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    top: -210px;
    left: -70px;
    transform: rotate(90deg);
    background: rgb(179,183,200);
    background: linear-gradient(90deg, rgba(179,183,200,1) 0%, rgba(25,115,213,1) 35%, rgba(20,68,139,1) 75%,
    rgba(56,33,120,1) 100%);

    @media screen and (max-width: 500px) {
        /* height: 500px; */
    }
`
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 45px;
  font-weight: 800;
  line-height: 1.28;
  color: #fff;
  z-index: 10;
  margin: 0;

  @media screen and (max-width: 500px) {
        font-size: 40px;
    }
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 550;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;

  @media screen and (max-width: 500px) {
        font-size: 13px;
        margin-top: 5px;
    }
`;
 
export const ContentContainer =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 3em;
    margin-top: 30%;
    
    @media screen and (max-width: 500px) {
        margin-top: 30%;
    }
     
`

// animation style 

// style befor and affter the animation
export const backdropVariants = {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
    },
    collapsed: {
      width: "100%",
      borderRadius: "50%",
    },
  };


// Set the duration of the animation
export const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 20,
};

