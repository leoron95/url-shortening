import React from 'react'
import { Boost } from './components/Boost'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { UrlShortener } from './components/UrlShortener'



export const UrlShorteningApp = () => {
    return (

        <>
        
            <div className='bg-white h-[927px] xl:h-[800px] overflow-hidden'>

            <Navbar/>

            <Hero/>

            </div>

                <div className='bg-[#EFF1F7] '>

                        <UrlShortener/>
                        <Content/>

                </div>
            
            <Boost/>
            <Footer/>
    </>
    )
}
