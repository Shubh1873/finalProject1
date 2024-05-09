import { useState } from "react";
import Link from 'next/link';
import { toast } from 'react-toastify';
import Image from "next/image";
import Logo from "../img/com.png";
import { useRouter } from 'next/router'

const NavbarFull = () => {
    const router = useRouter()
    const [getMovies, setMovies] = useState("");

    function inputMoviesHandler(e) {
        const moviesName = e.target.value;
        setMovies(moviesName);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            submitMoviesNameHanlder();
        }
    }


    function submitMoviesNameHanlder() {

        if (getMovies === '' || getMovies === '.' || getMovies === ':' || getMovies === '+' ||
            getMovies === '*' || getMovies === '?' || getMovies === '>' || getMovies === '<' ||
            getMovies === '$' || getMovies === '%' || getMovies === '^' || getMovies === '-' ||
            getMovies === '(' || getMovies === ')' || getMovies === '{' || getMovies === '}' ||
            getMovies === '[' || getMovies === ']' || getMovies === '_' || getMovies === '&' ||
            getMovies === '|' || getMovies === '/' || getMovies === '#' || getMovies === '!' ||
            getMovies === '`' || getMovies === '~' || getMovies === ';' || getMovies === ',' ||
            getMovies === "'" || getMovies === '"' || getMovies === undefined) {
            return toast.error('Not allowed');
        }
        else {
            toast('please wait...')
            setTimeout(() => {
                router.push({
                    pathname: '/Result',
                    query: { movieslist: getMovies }
                })
            }, 1000);
        }
    }

    return (
        <div className='hidden lg:flex full-navbar'>
            <div className='relative flex space-between items-center m-auto'>
                <Image src={Logo} className='w-52 h-28' draggable="false" alt='logo' />
                <div className="text-xl p-10 nav-link">
                    <Link href="/" className='m-10'>Home</Link>
                    <Link href="/search" className='m-10'>Search</Link>
                    <Link href="/about" className='m-10'>About Us</Link>
                    <Link href="/Contact" className='m-10'>Contact Us</Link>
                </div>

                <div className='m-auto'>
                    <div className='search-bar'>
                        <input type="text" placeholder="Search..." className='search-bar-input' onChange={inputMoviesHandler} onKeyDown={handleKey} required />
                        <button type="submit" onClick={submitMoviesNameHanlder}><i className='bx bx-search'></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NavbarFull
