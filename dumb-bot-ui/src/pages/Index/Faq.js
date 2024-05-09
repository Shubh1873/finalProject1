import React from 'react'

const Faq = () => {
    return (
        <div className='text-center w-4/5 m-auto'>
            <h2 className='text-xl lg:text-2xl'>Frequently Asked Questions</h2>
            <div className='mt-4 lg:mt-10' >
                <div className='text-left border-solid border-2 p-5 lg:p-10 rounded-lg'>
                    <h2 className='text-[19px] lg:text-xl mb-2'><i className='bx bx-file'></i>How to use dumb-bots?</h2>
                    <p className='ml-3 text-[15px]'>Are you in the mood for some entertainment? Whether it&apos;s movies, web-series, or anime,
                        finding what you&apos;re looking for is just a few clicks away!
                        Simply type the name of your desired content into the search bar,
                        hit enter, and voila - you&apos;re good to go!
                        <br />Just keep in mind, using too many keywords can be overwhelming, so make sure to use spaces between words
                        for a smoother search experience. With this easy-peasy process,
                        you&apos;ll be enjoying your favorite shows and films in no time - without any hassle!</p>
                </div>

                <div className='text-left border-solid border-2 p-5 lg:p-10 rounded-lg mt-7'>
                    <h2 className='text-[18px] lg:text-xl mb-2'><i className='bx bx-file'></i>What is dumb-bots search?</h2>
                    <p className=' ml-3 text-[15px]'>This is a bot, which bring the data from various of free websites all in one place!
                        And the best part? It&apos;s absolutely free to use! Simply enter your search query and our bot will do the rest,
                        So why waste your time searching multiple websites when you can find everything you need right here?
                        Try it out now and enjoy endless entertainment options at your fingertips!</p>
                </div>

                <div className='text-left border-solid border-2 p-5 lg:p-10 rounded-lg  mt-7 mb-24'>
                    <h2 className='text-[18px] lg:text-xl mb-2'><i className='bx bx-file'></i>How to download from <span className='lg:pl-0 pl-3'>dumb-bots?</span></h2>
                    <p className=' ml-3 text-[15px]'>Our bots only bring the data from various websites that you are looking to download, but the download process is handled by third-party websites.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq
