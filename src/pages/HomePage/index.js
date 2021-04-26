import React, {useLayoutEffect} from 'react'
import TopSection from './TopSection'
import InfoSection from './InfoSection'
import SupportSection from './SupportSection'
import LetStartSection from './letStartSection'
import BottomSection from './BottomSection'

function HomePage() {

    // Scroll up smooth when need to back to home page
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
