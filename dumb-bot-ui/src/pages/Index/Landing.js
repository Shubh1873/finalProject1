import Link from 'next/link';
import Image from 'next/image';
import Header from './Header';
import Search from './Search/Search';
import Social from './Socials/Social';
import SocialMedia from './Socials/SocialMedia';
import SmallScreen from './SmallScreen/SmallScreen';
import Card from './Card';
import SearchEngine from './Search/SearchEngine';
import Attention from './Attention';
import TotalData from './TotalData';
import Steps from './Steps';
import Deliver from './Deliver';
import Faq from './Faq';
import Footer from './Footer';
import Boy from "../Index/img/boy.png";
import Blogs from './Blogs';

const Landing = () => {
    return (
        <div>
            <Header />
            <div className='m-10 text-center w-auto relative '>
                <h1 className='text-2xl mb-8 lg:hidden'>Your streaming guide for movies TV shows & Animes</h1>
                <Search />
                <p className='lg:hidden mt-5'>dumb-bots - Just a better place to search movies online for free!</p>
                <Social />
            </div>
            <SmallScreen />
            <section className='mt-10 lg:mt-20'>
                <div className='hidden lg:flex flex-row justify-evenly mt-10 text-center'>
                    <div className='mt-16'>
                        <h1 className='text-2xl mb-8 '>Your streaming guide for movies, TV shows & Animes</h1>
                        <h2 className='text-xl mb-5'><i className='bx bxs-movie-play'></i>Explore the World of Cinemas.</h2>
                        <SocialMedia />
                        <p className='hidden lg:block text-base mt-2'>Now it&apos;s Easy To Find where to stream new,<br /> popular & upcoming entertainment with search-tool</p>
                        <Link href="/search"><button className='hidden get-started-btn lg:inline m-8 w-52 h-12 relative bg-amber-300 border-none rounded-lg hover:opacity-70 '><i className='bx bx-chevron-right'></i>Get started</button></Link>
                    </div>
                    <div>
                        <Image src={Boy} alt="search-tool" draggable="false" className='w-96' priority={true} />
                    </div>
                </div>
                <Card />
                <SearchEngine />
                <Attention />
                <TotalData />
                <Deliver />
                <Steps />
                <Blogs />
                <Faq />
            </section>
            <Footer />
        </div>
    )
}

export default Landing
