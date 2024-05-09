import React from 'react'
import Image from 'next/image'

const Steps = () => {
    return (
        <div className="hidden lg:block overflow-y-hidden step-use mb-10 lg:mb-28">
            <div className="mx-auto container f-f-p px-4 xl:px-0 py-10">
                <h2 className="focus:outline-none text-center text-xl lg:text-2xl  lg:leading-9 tracking-wider mb-9">How it works?</h2>
                <div className="md:mt-24 f-f-p">
                    <div className="hidden md:flex justify-center w-full">
                        <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">

                            <div>
                                <p className="focus:outline-none mt-32"></p>
                            </div>

                            <div>
                                <Image className="focus:outline-none mt-24"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                                    alt='step2'
                                    width={40}
                                    height={20} />
                            </div>


                            <div className="flex mt-8 flex-col items-center lg:items-end md:w-8/12">
                                <h2 className="focus:outline-none text-xl leading-5">Bot works</h2>
                                <h3 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Our bot is the ultimate search companion, scouring the internet to bring you the best data from multiple websites, make sure you never miss out on your favorite movies, web-series, or animes. </h3>
                            </div>

                            <div>
                                <p className="focus:outline-none mt-32"></p>
                            </div>

                            <Image className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                                 
                                src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                                alt='line'
                                width={4}
                                height={40} />
                        </div>
                        <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                            <div>
                                <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                                    alt='step3'
                                    width={40}
                                    height={30} />
                            </div>
                            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                <h2 className="focus:outline-none text-xl leading-5">Search Keyword</h2>
                                <h3 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Ready to find your next favorite movie, web-series, or anime? Just remember: keep it simple and efficient! Use specific keywords and accurate data to quickly find what you&apos;re looking for.</h3>
                            </div>
                            <div>
                                <p className="focus:outline-none mt-32"></p>
                            </div>
                            <div >
                                <Image className="focus:outline-none mt-20"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                                    alt='step3'
                                    width={40}
                                    height={20} />
                            </div>
                            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                <h2 className="focus:outline-none text-xl leading-5">Data fatch</h2>
                                <h3 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">After tirelessly gathering information from multiple websites the data to deliver only the most relevant content to your screen, Thanks to our bot&apos;s advanced filtering system.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-col items-center w-full">
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                            alt='step1'
                            width={40}
                            height={20} />
                        <div className="mt-10">
                            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
                            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best .</h2>
                        </div>
                        <div>
                            <p className="focus:outline-none mt-32"></p>
                        </div>
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                            alt='step2'
                            width={40}
                            height={20} />
                        <div className="mt-10">
                            <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
                            <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
                        </div>
                        <div>
                            <p className="focus:outline-none mt-32"></p>
                        </div>
                        <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                            alt='step3'
                            width={40}
                            height={20} />
                        <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your Transactions</h1>
                            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
