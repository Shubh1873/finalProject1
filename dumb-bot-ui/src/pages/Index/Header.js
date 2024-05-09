import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import NavbarFull from './Navbar/NavbarFull';
import Image from 'next/image';
import Logo from "./img/com.png"

const Header = () => {
    const [getDropDown, setDropDown] = useState(false);
    return (
        <div>
            <NavbarFull />
            <header className='flex justify-between lg:hidden' >
                <button className='text-4xl mt-5 ml-5' onClick={() => setDropDown((prev) => !prev)}><i className='bx bx-caret-down-circle'></i></button>
                <Image src={Logo} className='w-52 h-28 mr-16' draggable="false" alt='logo' />

            </header>
            {getDropDown && <Navbar />}
        </div>
    )
}

export default Header
