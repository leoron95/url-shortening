import React from 'react'

export const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between pt-7 '>
            <div className='flex justify-start gap-10'>
                <div className=''>
                    <img src="../../images/logo.svg" alt="logo" />
                </div>

                <div className='flex flex-row items-center gap-3 text-sm font-bold'>
                    <p className=' hover:text-black text-[#bfbfbf]'>
                        <a href='/'>Features</a>
                    </p>
                    <p className='hover:text-black text-[#bfbfbf]'>
                        <a href='/' >Pricing</a>
                    </p>
                    <p className='hover:text-black text-[#bfbfbf]'>
                        <a href='/' >Resources</a>
                    </p>
                </div>
            </div>
            

            <div className='flex flex-row items-center gap-5 mr-6 text-sm '>
                <button className='text-[#bfbfbf] font-bold'>
                    Login
                </button>
                <button className='text-white bg-[#2bd1d1] hover:bg-[#9be3e2] rounded-full h-7 w-20 font-bold'>
                    Sign up
                </button>
            </div>
        </nav>
    )
}
