import React from 'react'
import Link from 'next/link'
const Blogs = () => {
    return (
        <div className='hidden lg:block text-center w-4/5 m-auto mb-40 content-box p-14 '>
            <div >
            <h2 className='text-2xl mb-5'>Do not miss out?</h2>
                <p className='mb-5'>dumb-bots - is the perfect place to explore all your favorite genres at one place

                    & never miss out your favorite Movies, web-seires & animes With our excellent search capabilities,
                    you can enjoy a seamless viewing experience.
                </p>
                <Link href="/search"><button className='hidden lg:inline w-52 h-10 relative bg-amber-300 border-none rounded-lg hover:opacity-70'><i className='bx bx-chevron-right'></i>Get started</button></Link>
            </div>
        </div>
    )
}

export default Blogs
