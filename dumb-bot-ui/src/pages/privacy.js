import React from 'react'
import Header from './Index/Header'
import Footer from './Index/Footer'
import Link from 'next/link'

const privacy = () => {
    return (
        <>
            <Header />
            <div className='w-3/4 m-auto'>
                <h1 className='text-2xl text-center mt-10 lg:mt-20 border-b-2'>Privacy Policy</h1>
                <div>
                    <h2 className='text-xl mt-10'>Introduction</h2>
                    <p className='text-gray-600'>This page is intended to inform website visitors
                        about our policies regarding the collection,
                        use, and disclosure of Personal Information if they choose to use our Service.<br />

                        By using our Service, you agree to the collection but we don&apos;t collect any Personal Information
                        in accordance with this Privacy Policy.

                        But we do collect email information to provide our service like helping our from any
                        technical issue etc,

                        We will not share your information with any third parties except as described in this Privacy Policy.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Information Collection and Use</h2>
                    <p className='text-gray-600'>For a better experience, while using our Service,
                        we may require you to provide us with certain personally identifiable information,
                        including but not limited to your name and email.
                        The information that we collect will be used to contact or identify you.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Cookies</h2>
                    <p className='text-gray-600'>Cookies are used commonly
                    used as unique identifiers. They are sent to 
                    your browser from the website you visit and are stored on your device&apos;s hard drive but we don&apos;t 
                    now, we are planning to use Cookies in future.
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Changes to This Privacy Policy</h2>
                    <p className='text-gray-600 mb-3'>We may make updates to our Privacy Policy periodically. 
                    Therefore, we recommend that you review this page regularly for any changes. 
                    Any changes made to this Privacy Policy will be posted on this page and will be effective 
                    immediately upon posting.
                     We will also notify you of any significant changes by providing a 
                     notice on our website or by other means, 
                    where appropriate and required by law.</p>
                </div>
                <div className='mt-10 mb-10'>
                    <h2 className='text-xl'>Contact Us</h2>
                    <p className='text-gray-600 mb-3'>If you have any questions or suggestions,
                        <Link href={'/Contact'} className='text-blue-600'>contact us</Link></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default privacy

