import React from 'react'
import Image from 'next/image'
import Delivery from "./img/delivary.svg"
const Deliver = () => {
    return (
        <div className='hidden lg:flex delivary-content justify-center w-4/5 m-auto mb-10 lg:mb-28 '>
            <Image src={Delivery} alt="total" draggable="false" className='w-96 mr-10' />
            <div>
                <h3 className='text-2xl'>We always respect intellectual <br /> property rights and support</h3>
                <p className='pt-5'>It&apos;s important to respect intellectual property <br />
                    rights and support legal ways of accessing <br />
                    movies, web-series, and animes. <br />
                    There are many legal streaming services <br />
                    available where you can watch the latest content. <br />
                    Please make sure to only use legal sources <br />
                    to access content and avoid any illegal activities <br />
                    that could result in legal consequences.</p>
            </div>
        </div>
    )
}

export default Deliver
