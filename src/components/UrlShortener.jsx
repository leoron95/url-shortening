import React, { useEffect, useState } from 'react'
import copy from 'copy-to-clipboard';


export const UrlShortener = () => {

    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState([])
    const [copiedLink, setCopiedLink] = useState('');
    const [errorMode, setErrorMode] = useState(false);

    const handleInputChange = (e) => {
        setUrl(e.target.value)
        console.log(e.target.value);
    }

    useEffect(() => {
        const url = JSON.parse(localStorage.getItem('url'));
        if (url) {
            setShortUrl(url);
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('url', JSON.stringify(shortUrl));
      }, [shortUrl]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const validURL = (url) => {
          const pattern = new RegExp(
            "((http|https)://)(www.)?" 
+ "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" 
+ "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"
          ); 
          return !!pattern.test(url);
        };
    
        validURL(url);
    
        if (!url) {
          setErrorMode(true);
        } else if (!validURL(url)) {

          setErrorMode(true);

        } else {
            setErrorMode(false);
          const shortenLink = async () => {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const data = await res.json();
            setShortUrl([data.result, ...shortUrl]);
            setUrl('');
          };
          shortenLink();
        }
      };

    const copyToClipboard = (e, link) => {
        copy(link);
        e.target.textContent = "Copied!";
        setCopiedLink(link);

    };
    console.log(copiedLink);


    return (
        <>
        <div className=' relative bottom-20  gap-6 flex flex-col   min-w-[327px] max-w-[1110px] px-6 xl:px-0 mx-auto '> 

        
        <div className={`bg-[#3A3054] bg-[url("../../images/bg-shorten-mobile.svg")] xl:bg-[url("../../images/bg-shorten-desktop.svg")] min-h-[160px] xl:h-[168px]   bg-right-top bg-no-repeat rounded-[10px] w-full ${errorMode ? 'h-[182px]' : ''}  `}>
            

            <form onSubmit={handleSubmit}  className={`flex flex-col  xl:gap-6  xl:flex-row  xl:mt-[52px]  xl:ml-16 mt-6 mx-6 xl:mr-[65px] gap-4 ${errorMode ? 'gap-0' : ''}  `}>

                
            <div className='flex flex-col'>

                <input onChange={handleInputChange} value={url} className={`h-12 xl:h-16 xl:w-[769px] pl-4 placeholder:text-base text-base font-medium xl:text-xl placeholder:leading-9 placeholder:text-opacity-50 rounded-[5px] text-[#34313D] xl:placeholder:text-xl placeholder:font-medium ${errorMode ? 'border-[#F46363] border-[3px] placeholder:text-[#F46363] ' : 'border-none'}`} placeholder='Shorten a link here...' type="text" />

                    {
                        errorMode &&
                        <div className='mt-1 mb-4 xl:mt-2 xl:mb-0'>
                            <p className='text-xs xl:text-base  leading-[18px] font-medium italic text-[#F46363] '>
                                Please add a link
                            </p>
                        </div>
                    }
            </div>

                

                <button  className='bg-[#2BD0D0] text-lg font-bold leading-[27px] text-white h-12 rounded-[5px]  xl:h-16 xl:w-[188px] xl:text-xl xl:leading-[30px] xl:hover:bg-[#9AE3E3]'>
                    Shorten It!
                </button>


                
            </form>

        </div>

{
    shortUrl &&
    shortUrl.map(({code, full_short_link, original_link}) => {

    return (
        

            <div key={code} className='  xl:h-[72px]  h-[155px]  bg-white  rounded-[5px]  '>
                

                <div className='flex flex-col xl:flex-row xl:h-full xl:ml-8 xl:mr-6'>

                    <span className='truncate font-medium text-base xl:text-xl  leading-9  text-[#34313D] tracking-[0.12px] mt-1.5  xl:my-[18px] xl:w-[558px] ml-4 mr-[19px] xl:mx-0  '>
                        {original_link}
                    </span>

                    <div className=' bg-[#9E9AA8] mt-1.5 h-[1px] opacity-25 xl:hidden'></div> 

            <div className='flex flex-col xl:flex-row xl:justify-end xl:ml-[152px] xl:gap-6 mt-1.5 gap-2 xl:mt-0 mx-4 xl:mx-0 '>

                    <span className='font-medium text-base xl:my-[18px]  leading-9 text-[#2BD0D0] tracking-[0.12px] xl:text-xl xl:whitespace-nowrap '>
                        {full_short_link}
                    </span>
                    
                    <button onClick={(e)=>copyToClipboard(e, full_short_link)} className={` text-white h-10 w-full xl:my-4  text-base font-bold leading-6  rounded-[5px]   xl:w-[103px] xl:text-[15px]  ${copiedLink == full_short_link ? 'bg-[#3A3054]' : 'bg-[#2BD0D0] hover:bg-[#9AE3E3]'}`}>
                            {copiedLink == full_short_link ? 'Copied!' : 'Copy'}
                        </button>
            </div>


                    
                </div>
            </div>

)})}
</div>
    </>
    )
}
