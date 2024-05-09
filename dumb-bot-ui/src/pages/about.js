import React from 'react'
import Header from './Index/Header'
import Footer from './Index/Footer'
import Image from 'next/image'

const about = () => {
  return (

    <div>
      <Header />

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <p className="font-normal text-2xl leading-3 pb-2">About us</p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <p className="font-normal text-base leading-6 mt-6">Hey there, I&apos;m Yogesh, a website developer proficient in the
              latest technologies such as React Js, Node Js & Next Js etc.
              I recently created an amazing tool that will make your life easier by eliminating the need to search for
              movies, web-series, and animes one by one website to download & watch.
              <br /><br /> Trust me, I know firsthand how frustrating this can be! I wanted to make sure that everyone
              can enjoy seamless access to their favorite content without going through the same hassle as I did.
              Give it a try and thank me later!</p>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
              <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
                alt="flag"
                width={30}
                height={10}
              />
            </div>

            <Image className="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
              width={50}
              height={20}
            />

            <Image className="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="users"
              width={50}
              height={20}
            />
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="lg:text-2xl text-xl lg:leading-6 leading-5 mt-6">Founded</p>
            <p className="text-base leading-6 mt-6">Don&apos;t you just hate it when you&apos;re trying to find a movie,
              web series or anime to watch, but you&apos;re endlessly scrolling through different websites, dealing with annoying
              ads and not finding what you&apos;re looking for? Well, i build this, You rock it.</p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl lg:leading-6 leading-5 mt-6"> Great respect</p>
            <p className="text-base leading-6 mt-6">As the creator of this amazing tool, I&apos;m proud to
              say that I hold great respect for the hardworking 3rd party websites owners who provide us with free content.
              That&apos;s why I designed my tool to not only benefit for users, but also to respect the efforts of these website owners.

            </p>
          </div>
          <div className="sm:block hidden">
            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5  mt-6"> Win-win</p>
            <p className="font-normal text-base leading-6 mt-6">Rather than bypassing their websites and directly downloading content,
              my tool provides a user-friendly interface that directs traffic to their sites,
              helping them recognition for their hard work.
              So support the dedicated website owners who make it possible.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  )
}

export default about
