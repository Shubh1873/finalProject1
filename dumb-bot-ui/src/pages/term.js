import React from 'react'
import Header from './Index/Header'
import Footer from './Index/Footer'
import Link from 'next/link'

const term = () => {
    return (
        <>
            <Header />
            <div className='w-3/4 m-auto'>
                <h1 className='text-2xl text-center mt-10 lg:mt-20 border-b-2'>Term and conditions</h1>
                <div>
                    <h2 className='text-xl mt-10'>Introduction</h2>
                    <p className='text-gray-600'>The terms and conditions written on this webpage shall
                        govern your use of this website.
                        These terms will be applied fully and will affect your use of this website.
                        By using this website, you agree to accept all the terms and conditions written here.
                        If you disagree with any of these Website Standard Terms and Conditions,you must not use this website.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Intellectual Property Rights</h2>
                    <p className='text-gray-600'>Except for the contents that 3rd party own,
                        search-tool and/or its licensors own all the intellectual property
                        rights and materials contained on this website.
                        You are granted a limited license only for the
                        purposes of viewing the material contained on this website.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Terms Of Use</h2>
                    <p className='text-gray-600'>When using www.search-tool.com,
                        you will have access to content posted by our crawler bot,
                        including magnet links to third-party servers that are not affiliated with the website.
                        The website server does not host or store any illegal content on its servers.
                        All parts of the website are for &apos;PRIVATE&apos; use only. <br />

                        The website presents information that was collected across various sources over the internet.
                        The content you see posted on the website is indexed in a similar way to how Google works.
                        The ISP and/or Administrator of the website cannot be held responsible for the contents of
                        any linked sites or any linked server via buttons, or changes/updates to such sites.
                        We do not help or encourage users to download or otherwise obtain any of the listed releases.<br />


                        The owners and administrators take no responsibility or liability for anything
                        that happens as a result of spreading or downloading anything on the website or its home page,
                        or anything contained in subsequent pages with third-party servers collected magnet links.
                        The posts/articles you read are for educational purposes only,
                        and the owners and administrators cannot be liable for what a person decides to do with this knowledge.<br />


                        By using this website, you agree that the exclusions and limitations of
                        liability set out in this website disclaimer are reasonable.
                        If you do not think they are reasonable, you must not use this website.<br />


                        It is impossible for us to monitor every post made by our crawler bot from various sources.
                        If you have found a link to any illegal content or copyright material,
                        please report it to the third-party server using their Contact Us form.<br />


                        If a court of competent jurisdiction rules this Amendment provision invalid,
                        this Amendment clause will be terminated as part of this agreement.
                        All amendments to the Terms shall be forward-looking
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Restrictions</h2>
                    <p className='text-gray-600 mb-3'>You are specifically restricted from all of the following:</p>
                    <div className='text-gray-600'>
                        <li>Do not publish Website material to other website.</li>
                        <li>Do not sell commercializing any Website material.</li>
                        <p className='mt-3'>Using this website in a manner that is contrary to applicable laws and regulations
                            or that may cause harm to the website,
                            any person, or business entity in any way is strictly prohibited.</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Your Content</h2>
                    <p className='text-gray-600 mb-3'>In these Website Standard Terms and Conditions,
                    &apos;Your Content&apos; refers to any audio, video, text, images, or other material
                        that you choose to display on this website. By displaying Your Content,
                        you grant search-tool a non-exclusive, worldwide, irrevocable, sub-licensable license to use,
                        reproduce, adapt, publish, translate, and distribute it in any and all media.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Severability</h2>
                    <p className='text-gray-600 mb-3'>If any provision of these Terms is found to be invalid
                        under any applicable law, such provision shall be deemed to be deleted without
                        affecting the validity of the remaining provisions herein.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Governing Law & Jurisdiction</h2>
                    <p className='text-gray-600 mb-3'>These Terms will be governed by and interpreted in 
                    accordance with the laws of the our State
                    and you submit to the non-exclusive jurisdiction 
                    of the state and federal courts for the resolution of any disputes.</p>
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

export default term
