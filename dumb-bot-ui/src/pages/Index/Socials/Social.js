import React from 'react';
import Link from 'next/link';

function Social() {
    return (
        <div>
            <div className='lg:hidden flex justify-center mt-3'>
                <Link href='#' target='_blank' rel="noreferrer"> <i className='bx bxl-facebook text-xl'></i></Link>
                <Link href='#' target='_blank' rel="noreferrer"> <i className='bx bxl-instagram text-xl'></i></Link>
                <Link href='#' target='_blank' rel="noreferrer"> <i className='bx bxl-whatsapp text-xl'></i></Link>
                <Link href='#' target='_blank' rel="noreferrer"> <i className='bx bxl-linkedin text-xl'></i></Link>
                <Link href='#' target='_blank' rel="noreferrer"> <i className='bx bxl-pinterest text-xl'></i></Link>
                <Link href='#' target='_blank' rel="noreferrer"> <i className='bx bxl-twitter text-xl'></i></Link>
            </div>
        </div>
    )
}

export default Social;
