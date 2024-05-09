import React from 'react'
import Search from './Index/Search/Search'
import SearchEngine from './Index/Search/SearchEngine'
import Header from './Index/Header'
const search = () => {
    return (
        <>
            <Header />
            <SearchEngine />
            <div className='mt-20'>
                <Search />
                <p className='text-center mt-10'>dumb-bots - Just a better place to search movies online for free!</p>
                {/* here you can add more content */}
            </div>
        </>
    )
}

export default search
