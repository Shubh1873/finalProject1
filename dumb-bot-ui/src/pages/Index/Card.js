import React from 'react'

function Card() {
    return (
        <div className='hidden lg:block'>
            <div className='text-center lg:mt-28 bg mt-5'>
                <h2 className='text-2xl'>Find all movies, tv-shows & animes in one place</h2>
                <div className='feature-box flex flex-row justify-center lg:mt-8 mt-4'>
                    <div className='lg:text-base text-sm'>
                        <p>&#10004; Free to use</p>
                    </div>
                    <div className='lg:text-base text-sm'>
                        <p>&#10004; Available to download</p>
                    </div>
                    <div className='lg:text-base text-sm'>
                        <p> &#10004; Search tool</p>
                    </div>
                </div>
                <div className='feature-box flex flex-row justify-center mt-3'>
                    <div className='lg:text-base text-sm'>
                        <p>&#10004; Data from various website</p>
                    </div>
                    <div className='lg:text-base text-sm'>
                        <p>&#10004; Watch Online</p>
                    </div>
                    <div className='lg:text-base text-sm'>
                        <p> &#10004; All in one solution</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;
