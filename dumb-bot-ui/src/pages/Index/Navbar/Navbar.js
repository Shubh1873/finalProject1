import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='navbar-section'>
            <div className='navbar-container text-center'>
                <ul className='navbar'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/search'}>Search</Link></li>
                    <li><Link href={'/about'}>About Us</Link></li>
                    <li><Link href={'/Contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
