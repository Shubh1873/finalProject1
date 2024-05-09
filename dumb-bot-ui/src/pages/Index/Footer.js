import React from 'react'
import SocialMedia from './Socials/SocialMedia'
import Social from './Socials/Social'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-b-2 border-300 bg-black text-white text-center pt-10 pb-10'>
        <Social/>
        <SocialMedia/>
        <p className='text-sm w-10/12 m-auto mb-5 lg:text-lg'>Copyright © Dumb-bots - All Rights Reserved</p>
        <p className='text-sm w-10/12 m-auto lg:text-base '>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
        <div className='text-sm flex justify-center mt-5 mb-5 lg:text-base'>
          <ul>
            <li className='border-b-2 border-300 mb-5'>Explore links</li>
            <li className='mb-2'><Link href={'/term'}>Term and Condition</Link></li>
            <li className='mb-2'><Link href={'/privacy'}>Privacy Policy</Link></li>
            <li className='mb-2'><Link href={'/dmca'}>DMCA</Link></li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer
