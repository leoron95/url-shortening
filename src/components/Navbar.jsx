import React from 'react'
import { useState } from 'react'
import logo from '../../images/logo.svg'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (

<>
        <nav className="flex justify-between xl:justify-start pt-10 mx-6 max-w-[1108px] xl:mx-auto xl:pt-12">
            
            <div>
                <img src={logo} alt="Shortly logo" />
            </div>
            
            <div className="hidden xl:flex xl:flex-row text-[15px] font-bold leading-[22.5px] text-[#9E9AA8] ml-[45px] items-center gap-[493px] ">

                <div>
                    <a className='hover:text-[#34313D] mr-[29px] cursor-pointer' href="#">Features</a>
                    <a className='hover:text-[#34313D] mr-[32px] cursor-pointer' href="#">Pricing</a>
                    <a className='hover:text-[#34313D] cursor-pointer' href="#">Resources</a>
                </div>

                <div className='flex flex-row items-center gap-[37px]'>
                    <span className='hover:text-[#34313D] cursor-pointer'>
                        Login
                    </span>

                    <button className='w-[105px] h-10 bg-[#2BD0D0] text-[15px] font-bold leading-[22.5px] text-white rounded-full cursor-pointer hover:bg-[#9AE3E3]'>
                        Sign Up
                    </button>
                </div>
                
            </div>


            
            <div onClick={()=>setIsOpen(!isOpen)} className="flex items-center xl:hidden ">
                <div className="flex flex-col gap-1.5 ">
                    <span className="block w-6 h-[3px] bg-[#9E9AA8] "></span>
                    <span className="block w-6 h-[3px] bg-[#9E9AA8] "></span>
                    <span className="block w-6 h-[3px] bg-[#9E9AA8] "></span>
                </div>
            </div>
        </nav>
    
    
<div className={`${isOpen ? 'absolute flex flex-col w-full' : 'hidden'}`}>

        <div className='bg-[#3A3054] h-[383px]  min-w-[327px] mx-6    mt-[23px] rounded-[10px]'>

            <div className='flex flex-col items-center pt-10 text-lg font-bold leading-7 text-white gap-[30px]'>
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Resources</a>
            </div>
                
                <div className='mt-[30px] mx-6 min-w-[300px]  h-[1px] bg-[#9E9AA8] mb-8 opacity-25' ></div>

            <div className='flex flex-col items-center gap-6 mb-10 text-lg font-bold leading-7 text-white'>

                <span>Login</span>
                <button className='w-[279px] h-12 rounded-[28px] bg-[#2BD0D0] text-white font-bold text-lg leading-7'>
                    Sign Up
                </button>
            </div>
            
        </div>
</div>

        
        
        </>
    )
}
