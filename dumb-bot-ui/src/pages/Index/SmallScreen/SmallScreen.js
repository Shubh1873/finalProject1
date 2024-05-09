import React from 'react'
import Image from 'next/image';
import BgImg from "../img/smalldevice.png"
import Boy from "../img/boy.png"

const SmallScreen = () => {
    return (
        <div>
            {/* background image  */}
            <section className='bg-img lg:hidden' style={{
                backgroundImage: `url(${BgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}>
                <div>
                    <h2 className='text-center text-xl'>Explore the World of Cinemas.</h2>
                    <Image src={Boy} alt="dumb-bots" draggable="false"  className='w-60 m-auto mt-2' priority={true}/>

                    <div className='text-center w-10/12 m-auto'>
                        <p className='mb-5'>Explore a vast collection by dumb-bots.online of movies, tv-shows and animes online for free in every genre and era with our search tool.</p>
                        <h2 className='h2 mt-10 border-b-2 border-300 mb-2 text-xl'>How dumb-bots.online search tool works?</h2>
                        <p>Your Personal Automation Bot and crawler!</p>
                        <p className='mt-5'>
                            Are you tired of endlessly searching for the latest movies and TV shows online? Look no further!
                            dumb-bots.online is here to simplify your search experience by scouring various open-source and free websites to pull the exact data you&apos;re searching for.<br /><br />
                            With dumb-bots.online, finding your desired downloads and online streams has never been easier.<br /><br />
                            Think of dumb-bots.online as your very own personal bot-browser that works tirelessly to provide you with the information you need, right at your fingertips.<br /><br />
                            Get started with dumb-bots.online today and say goodbye to the hassle of online search forever!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SmallScreen;
