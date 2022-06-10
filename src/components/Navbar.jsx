import React from 'react'

export const Navbar = () => {
    return (
        <div className=' flex md:flex-row justify-between  md:w-[1108px]  md:h-10 '>

        <div className='flex md:justify-start md:gap-11 items-center  md:mr-[165px]'>
            <div>
                <img src="../../images/logo.svg" alt="logo" />
            </div>

            <div className='flex flex-row  text-[15px] font-bold align-middle'>
                <p className='mr-7 hover:text-black text-[#9E9AA8]'>
                    <a href='/'>Features</a>
                </p>
                <p className='mr-8 hover:text-black text-[#9E9AA8]'>
                    <a href='/' >Pricing</a>
                </p>
                <p className='hover:text-black text-[#9E9AA8]'>
                    <a href='/' >Resources</a>
                </p>
            </div>
        </div>
        

        <div className=' flex flex-row  text-[15px] gap-9 '>
            <button className='text-[#9E9AA8] font-bold'>
                Login
            </button>
            <button className='text-white bg-[#2BD0D0] hover:bg-[#9be3e2] rounded-full h-10 w-[105px] font-bold'>
                Sign up
            </button>
        </div>
    </div>
    )
}
