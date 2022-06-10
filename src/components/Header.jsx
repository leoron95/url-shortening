import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
    //pt-16 pb-32
    return (
        <header className='px-6  md:h-[800px] md:pt-12 container md:mx-auto md:w-[75%] md:pl-40 pt-10 '>

           <Navbar/>

            {/* <div className=' mt-[78px] flex flex-row md:grow-0 md:shrink-0 '>
                <img className='' src="../../images/illustration-working.svg" alt="illustration working" />
            </div> */}

            <div className='flex  flex-col md:flex-row justify-between gap-[102px] '>
            

            
            <div className='flex flex-col mt-[140px] md:w-[570px] md:grow-0 md:shrink-0 h-fit'>
                <div className='flex md:flex-row '>
                    <h1 className='flex font-bold text-[80px] text-[#35323e] leading-tight tracking-tight '>More than just shorter links</h1>
                </div>
                <div className='flex-row mt-1'>
                    <p className='text-[#bfbfbf] font-medium text-[22px]'>
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </p>
                </div>

                <div className='mt-10 text-xl '>
                    <button className='text-white bg-[#2bd1d1] hover:bg-[#9be3e2] rounded-[28px] h-14 w-[197px] font-bold'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='flex mt-[78px]  md:grow-0 md:shrink-0 '>
                <img className='' src="../../images/illustration-working.svg" alt="illustration working" />
            </div>
            </div>
        </header>
    )
}
