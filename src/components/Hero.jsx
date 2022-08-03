import React from 'react'
import illustration from '../../images/illustration-working.svg'

export const Hero = () => {
    return (
        <>
        <div className='flex flex-col w-full mx-auto max-w-7xl xl:flex-row xl:justify-start xl:pl-[85px] '>

        <div className='flex flex-col sm:mx-auto  ml-6 xl:ml-0 xl:order-2  mt-[23px] xl:mt-[78px]'>

            <img className=' min-w-[500px] max-w-max ' src={illustration} alt="" />
        </div>


    <div className='flex flex-col xl:shrink-0 xl:order-1  mt-[37px] xl:mt-[139px] mx-6 xl:w-[564px] xl:ml-0 xl:mr-[101px] items-center xl:items-start  '>

                <h1 className='text-[42px] leading-[48px]  font-bold text-center -tracking-[1.05px] text-[#34313D] xl:text-left xl:text-[80px] xl:leading-[90px] xl:tracking-[-2px] '>
                More than just shorter links
                </h1>

                <p className='mt-4 text-lg font-medium text-center text-[#9E9AA8] leading-[30px] tracking-[0.12px] xl:text-left xl:text-[22px] xl:leading-9 xl:tracking-[0.15px]'>
                Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>


                <button className=' mt-8 xl:mt-[38px] font-bold text-xl leading-[30px] text-white w-[197px] h-14 bg-[#2BD0D0] rounded-full xl:hover:bg-[#9AE3E3]'>
                    Get Started
                </button>

        </div>

            
        
        </div>

        </>
    )
}
