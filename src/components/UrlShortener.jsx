import React, { useState } from 'react'
import { MiddleSection } from './MiddleSection';


export const UrlShortener = () => {

    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState([])
    const [copiedLink, setCopiedLink] = useState('');
    const [errorMode, setErrorMode] = useState(false);

    const handleInputChange = (e) => {
        setUrl(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const validURL = (url) => {
          const pattern = new RegExp(
            "((http|https)://)(www.)?" 
+ "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" 
+ "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"
          ); // fragment locator
          return !!pattern.test(url);
        };
    
        validURL(url);
    
        if (!url) {
          setErrorMode(true);
        } else if (!validURL(url)) {
        //   alert("Please insert a valid URL");
          setErrorMode(true);
        //   setUrl("");
        } else {
            setErrorMode(false);
          const shortenLink = async () => {
            // fetch response
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            //convert to JSON
            const data = await res.json();
            //Save to state
            setShortUrl([data.result, ...shortUrl]);
            //Clear input
            setUrl('');
          };
          shortenLink();
        }
      };

    //   console.log(shortUrl);
    const copyToClipboard = (e, link) => {
        navigator.clipboard.writeText(link);
        e.target.textContent = "Copied!";
        setCopiedLink(link);
    };
    console.log(copiedLink);
    console.log(errorMode)

    return (
        <>
        <div className='-translate-y-24 '>

        
        <div className='align-middle mx-auto md:max-w-[1110px] h-[168px] bg-[url("../../images/bg-shorten-desktop.svg")] bg-[#3A3054] bg-contain rounded-xl mb-6'>

            <form onSubmit={handleSubmit} className='flex  items-baseline'>
                <div className='flex flex-col w-[764px]'>
                    
                    <input type="text"  onChange={handleInputChange} value={url} className={` rounded-[10px] h-16 flex  mt-14 ml-16 w-full md:pl-8 placeholder:font-medium placeholder:text-xl placeholder:text-opacity-50 ${errorMode ? 'border-[#F46363] border-[3px] placeholder:text-[#F46363]' : 'border-none'}`} placeholder='Shorten a link here' />
                    
                    
                    {
                        errorMode &&
                        <div className='flex flex-col ml-16 mt-2 text-base font-medium italic text-[#F46363]'>
                            <p>
                                Please add a link
                            </p>
                        </div>
                    }
                </div>

                

                <div className='flex ml-20'>
                    <button className='h-16 w-48 text-xl font-bold bg-[#2BD0D0] text-white rounded-[10px] hover:bg-[#9AE3E3]'>
                        Shorten it
                    </button>
                </div>
            </form>
            
        </div>


            {
                shortUrl &&
                shortUrl.map(({code, full_short_link, original_link}) => {

                return (

                    <div key={code} className='flex flex-row mx-auto max-w-[1110px] h-[72px]  bg-white  rounded-xl mb-4'>

                        <div className='flex flex-row w-full justify-between ml-8 my-[18px]  items-center'>

                            <div className='flex'>
                                <p className='text-xl font-medium text-[#34313D]'>
                                    {original_link}
                                </p>
                            </div>
                            
                            <div className='flex items-center'>
                            <p className='text-[#2BD0D0] text-xl font-medium'>
                                {full_short_link}
                            </p>

                            <button onClick={(e)=>copyToClipboard(e, full_short_link)}  className={`mr-6 ml-6 w-28 h-10 text-base font-bold  text-white rounded-[5px] ${copiedLink == full_short_link ? 'bg-[#3A3054]' : 'bg-[#2BD0D0] hover:bg-[#9AE3E3]'} `}>
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
