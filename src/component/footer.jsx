import React from 'react';
const twitter = 'img/twitter.png';
const telegram = 'img/telegram.png';
const youtube = 'img/youtube.png';
const instagram = 'img/instagram.png';
const footer = () => {
    return (

        <>
            <div className='bg-stone-700 h-[25vh] w-full flex flex-col justify-center items-center text-center'>
                <div className='content-box'>
                    <h3 className=' font-medium text-xl text-white'>Follow Us </h3>
                    <div className=' flex justify-center gap-2 my-3'>
                        <a href='https://x.com/?lang=en'><img className='h-8 bg-white rounded-full' src={twitter} alt='twitter'></img></a>
                        <a href='https://telegram.org/'> <img className='h-8 bg-white rounded-full' src={telegram} alt='telegram'></img></a>
                        <a href='https://www.youtube.com/'> <img className='h-8 bg-white rounded-full' src={youtube} alt='youtube'></img></a>
                        <a href='https://www.instagram.com/'><img className='h-8 bg-white rounded-full' src={instagram} alt='instagram'></img></a>

                    </div>


                </div>
                <hr className="w-full border-t border-gray-300"></hr>
            </div>
        </>
    )
}
export default footer;