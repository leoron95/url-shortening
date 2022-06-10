import React from 'react'
import { Boost } from './Boost'
import { UrlShortener } from './UrlShortener'

export const MiddleSection = () => {
    return (
        <section >

            
                <div className='container mx-auto  md:max-w-[1110px]  pb-[120px]'>

            {/* <UrlShortener/> */}
                
                <div className='flex justify-center '>
                    <h1 className='flex text-[40px] font-bold text-[#34313D]'>
                        Advanced Statistics
                    </h1>
                </div>

            <div className='flex justify-center mx-auto mt-[18px] '>
                    <div className=' md:w-[510px]'>
                        <p className='text-center text-[#9E9AA8] font-medium text-lg '>
                            Track how your links are performing across the web with our advanced statistics dashboard.
                        </p>
                    </div>
            </div>




            <div className='flex md:flex-row flex-col mt-14 pt-10  h-[400px] place-items-start'>

                <div className='pl-8 bg-white rounded-md h-[267px] w-[350px]'>
                    
                    <div className='pl-2'>
                        <div className='bg-[#3A3054] absolute -translate-y-10 -translate-x-[5px] rounded-full w-[88px] h-[88px]'>
                            <div className='flex items-center justify-center my-5 '>
                                <img src="../../images/icon-brand-recognition.svg" alt="" />
                            </div>
                        </div>
                    </div>

                        
                        <div className='mt-[77px]'>
                                <h1 className='text-[22px]  font-bold text-[#34313D]'>
                                    Brand Recognition
                                </h1>
                        </div>

                        <div className='mt-4  md:w-[286px] h-[104px] '>
                                <p className='text-[#9E9AA8] text-[15px] leading-[26px] font-medium '>
                                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                                </p>
                        </div>

                </div>
                

                <div className='w-[30px] h-2 bg-[#2bd1d1] mt-[150px]'></div>

                <div className='pl-8 bg-white rounded-md h-[267px] mt-10 md:w-[350px]'>
                    
                    <div className='pl-2'>
                        <div className='bg-[#3A3054] absolute -translate-y-10 -translate-x-[5px] rounded-full w-[88px] h-[88px]'>
                            <div className='flex items-center justify-center mt-6'>
                                <img src="../../images/icon-detailed-records.svg" alt="" />
                            </div>
                        </div>
                    </div>

                        
                        <div className='mt-[80px]'>
                                <h1 className='text-xl  font-bold text-[#34313D]'>
                                    Detailed Records
                                </h1>
                        </div>

                        <div className='mt-4 '>
                                <p className='text-[#9e9aa7] tracking-tight text-base font-medium md:w-[290px]'>
                                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                                </p>
                        </div>

                </div>

                <div className='w-[30px] h-2 bg-[#2bd1d1] mt-[150px]'></div>

                <div className='pl-8 bg-white rounded-md h-[267px] mt-20 md:w-[350px]'>
                    
                    <div className='pl-2'>
                        <div className='bg-[#3A3054] absolute -translate-y-10 -translate-x-[5px] rounded-full w-[88px] h-[88px]'>
                            <div className='flex items-center justify-center mt-5'>
                                <img src="../../images/icon-fully-customizable.svg" alt="" />
                            </div>
                        </div>
                    </div>

                        
                        <div className='mt-20'>
                                <h1 className='text-xl  font-bold text-[#34313D]'>
                                    Fully customizable
                                </h1>
                        </div>

                        <div className='mt-4 '>
                                <p className='text-[#9e9aa7] tracking-tight text-base font-medium md:w-[290px]'>
                                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                                </p>
                        </div>

                
                </div>
                
                </div>

                </div>
        </section>
    )
}
