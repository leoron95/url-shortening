import React from 'react'
import { Boost } from './components/Boost'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MiddleSection } from './components/MiddleSection'
import { Navbar } from './components/Navbar'
import { UrlShortener } from './components/UrlShortener'


export const UrlShorteningApp = () => {
    return (
    <>


            
            {/* <Navbar/> */}
            
            <Header/>
            
            <div className='bg-[#f0f1f6]'>
            <UrlShortener/>
            <MiddleSection/>

            </div>

            <Boost/>
            <Footer/>
            </>
    )
}
