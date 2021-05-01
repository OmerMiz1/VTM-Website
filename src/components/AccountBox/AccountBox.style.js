import styled from 'styled-components';
import {motion} from 'framer-motion';

// Box conatainer style - size color..
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

// top section  conatainer style - size color display..
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

// back drop (shape on the backgroung ) style - shape, size color
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


     ${props=> props.theme.mediaQueries.smallScreen};

     @media ${({theme}) => theme.mediaQueries.bellow500} {
        /* height: 500px; */
    }
`
// Header Container style - display
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Header Text style - size color ..
export const HeaderText = styled.h2`
  font-size: ${props=> props.theme.fontSizes.header};
  font-weight: 800;
  line-height: 1.28;
  color: #fff;
  z-index: 10;
  margin: 0;

  @media ${({theme}) => theme.mediaQueries.bellow500} {
        font-size: ${props=> props.theme.fontSizes.headerMobile};
    }
`;

// small Text style - size color ..
export const SmallText = styled.h5`
  color: #fff;
  font-weight: 550;
  font-size: ${props=> props.theme.fontSizes.small};
  z-index: 10;
  margin: 0;
  margin-top: 7px;

  @media ${({theme}) => theme.mediaQueries.bellow500} {
        font-size: ${props=> props.theme.fontSizes.smallMobile};
        margin-top: 5px;
    }
`;
 
export const ContentContainer =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 3em;
    margin-top: 25%;
    
    @media ${({theme}) => theme.mediaQueries.bellow500} {
        margin-top: 25%;
    }
     
`

//  *** animation style ***//

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

