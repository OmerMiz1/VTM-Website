import React, {useLayoutEffect} from 'react'
import TopSection from './TopSection'
import InfoSection from './InfoSection'
import SupportSection from './SupportSection'
import LetStartSection from './letStartSection'
import BottomSection from './BottomSection'

function HomePage() {

    //TODO DELET OR CHANGE
    useLayoutEffect(() => {
        console.log(`try`);
        window.scrollTo(0, 0);
    });

    return (
        <>
            <TopSection></TopSection>
            <InfoSection></InfoSection>
            <SupportSection></SupportSection>
            <LetStartSection></LetStartSection>
            <BottomSection></BottomSection>
       </>
    )
}

export default HomePage;
