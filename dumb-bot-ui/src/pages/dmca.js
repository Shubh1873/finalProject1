import React from 'react'
import Header from './Index/Header'
import Footer from './Index/Footer'
import Link from 'next/link'

const dmca = () => {
    return (
        <div>
            <Header />
            <div className='w-3/4 m-auto'>
                <h1 className='text-2xl text-center mt-10 lg:mt-20 border-b-2'>DMCA Policy</h1>
                <div>
                    <h2 className='text-xl mt-10'>Introduction</h2>
                    <p className='text-gray-600'>dumb-bots follows the rules of the 
                    Digital Millennium Copyright Act (&apos;DMCA&apos;) and 17 U.S.C. § 512. 
                    This means that if we receive a notice of copyright infringement, 
                    we will take necessary actions 
                    according to the DMCA and other laws related to intellectual property.
                    <br/><br/>
                    If you find that your copyrighted material is on dumb-bots
                    or in our search results and you want it removed, you must send us a 
                    written notice explaining the specific information about the copyrighted material.</p>
                </div>
                <div className='mt-10 mb-10'>
                    <h2 className='text-xl'>Contact Us</h2>
                    <p className='text-gray-600 mb-3'>If you have any questions or suggestions,
                        <Link href={'/Contact'} className='text-blue-600'>contact us</Link></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default dmca
