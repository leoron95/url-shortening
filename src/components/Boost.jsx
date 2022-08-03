import React from 'react'

export const Boost = () => {
    return (
        <div className='h-[300px] lg:h-[250px] bg-[#3A3054] bg-[url("../../images/bg-boost-mobile.svg")] sm:bg-[url("../../images/bg-boost-desktop.svg")]  bg-no-repeat bg-cover bg-center '>
            
            <div className='flex flex-col '>

                <div className='my-[90px] gap-4 lg:gap-8 lg:my-[57px] items-center flex flex-col mx-auto'>

                <h1 className='font-bold text-[28px] leading-[48px] tracking-[-0.7px] text-white lg:text-[40px] lg:tracking-[-1px] '>
                    Boost your links today
                </h1>

                <button className='bg-[#2BD0D0] w-[197px] h-14 rounded-full text-white font-bold text-xl leading-[30px] xl:hover:bg-[#9AE3E3] xl:cursor-pointer'>
                    Get Started
                </button>
                </div>
            </div>
            
        </div>
    )
}
