import React from 'react'
import brand from '../../images/icon-brand-recognition.svg'
import records from '../../images/icon-detailed-records.svg'
import customizable from '../../images/icon-fully-customizable.svg'

export const Content = () => {
    return (
        <div className='flex flex-col w-[327px] xl:w-[1110px] mx-auto pb-20 xl:pb-[120px] '>
            
            <div className='flex flex-col gap-4 xl:gap-[18px] text-center xl:w-[540px] xl:mx-auto'>
                <h1 className='font-bold text-[28px] xl:text-[40px] leading-[48px] text-[#34313D] tracking-[0.7px]'>Advanced Statistics</h1>

                <p className='font-medium text-base leading-7 text-[#9E9AA8] tracking-[0.11px] xl:text-lg xl:leading-8'>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

            <div className='flex flex-col mt-12 xl:mt-14 xl:flex-row '>

            <div className='flex flex-col items-center xl:items-start  h-fit xl:w-[350px] xl:h-[311px]'>

                <div className='w-[88px] h-[88px] bg-[#3A3054] rounded-full absolute xl:ml-8 '>
                    <div className='mx-6 my-6'>
                        <img src={brand} alt="" />
                    </div>
                </div>

                <div className=' bg-white  h-[267px] mt-[44px] rounded-[5px] '>

                    <div className='flex flex-col gap-3 px-8 text-center xl:text-left pt-[77px] '>
                        <h1 className='font-bold text-[22px] leading-[33px] text-[#34313D]'>
                            Brand Recognition
                        </h1>

                        <p className='font-medium text-[15px] leading-[26px] text-[#9E9AA8] '>
                            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.
                        </p>
                    </div>

                </div> 

            </div>
                

                    <div className='bg-[#2BD0D0] mx-auto w-2 h-12 xl:h-2 xl:w-[30px] xl:mt-[198px]  '></div>

                <div className='flex flex-col items-center xl:items-start h-fit xl:w-[350px] xl:h-[311px] xl:mt-[43px]'>

                        <div className='w-[88px] h-[88px] bg-[#3A3054] rounded-full absolute xl:ml-8 '>
                                <div className='mx-6 my-6'>
                                    <img src={records} alt="" />
                                </div>
                        </div>

                            <div className=' bg-white  h-[284px] mt-[44px] rounded-[5px]  '>

                                <div className='flex flex-col gap-3 px-8 text-center pt-[77px] xl:text-left '>
                                    <h1 className='font-bold text-[22px] leading-[33px] text-[#34313D]'>
                                    Detailed Records
                                    </h1>

                                    <p className='font-medium text-[15px] leading-[26px] text-[#9E9AA8] '>
                                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                                    </p>
                                </div>

                            </div> 

                </div>

                    <div className='bg-[#2BD0D0] mx-auto w-2 h-12 xl:h-2 xl:w-[30px] xl:mt-[198px]  '></div>

                <div className='flex flex-col items-center xl:items-start h-fit xl:w-[350px] xl:h-[311px] xl:mt-[87px]'>

                        <div className='w-[88px] h-[88px] bg-[#3A3054] rounded-full absolute xl:ml-8 '>
                                <div className='mx-6 my-6'>
                                    <img src={customizable} alt="" />
                                </div>
                        </div>

                            <div className=' bg-white  h-[267px] mt-[44px] rounded-[5px]  '>

                                <div className='flex flex-col gap-3 px-8 text-center pt-[77px] xl:text-left '>
                                    <h1 className='font-bold text-[22px] leading-[33px] text-[#34313D]'>
                                    Fully Customizable
                                    </h1>

                                    <p className='font-medium text-[15px] leading-[26px] text-[#9E9AA8] '>
                                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                                    </p>
                                </div>

                            </div> 

                </div>

            </div>

                    
        </div>
    )
}
