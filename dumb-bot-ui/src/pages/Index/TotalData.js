import React from 'react'

const TotalData = () => {
    return (
        <div className='mb-5 lg:mb-28'>
            <div className='text-center p-10 hidden lg:block bg-slate-100 '>
                <h2 className='text-2xl mb-10'>All the movies, web-series & animes, at one place.</h2>
                <div className='flex justify-center'>
                    <div className='m-10 flex'>
                        <div>
                            <h5 className='font-bold mt-2 mr-2 text-2xl'>1M+</h5>
                        </div>
                        <div>
                            <h6>Movies,<br />Tv-shows</h6>
                        </div>
                    </div>

                    <div className='m-10 flex'>
                        <div>
                            <h5 className='font-bold mt-2 mr-2 text-2xl'>50k+</h5>
                        </div>
                        <div>
                            <h6>Animes <br />Watch online</h6>
                        </div>
                    </div>

                    <div className='m-10 flex'>
                        <div>
                            <h5 className='font-bold text-2xl mt-2'><i className='bx bx-file'></i></h5>
                        </div>
                        <div>
                            <h6 className='mt-2'>4k / HD Quality Available</h6>
                        </div>
                    </div>

                    <div className='m-10 flex '>
                        <div>
                            <h5 className='font-bold text-2xl mt-2'><i className='bx bx-download'></i></h5>
                        </div>
                        <div>
                            <h6 className='mt-2'>Hindi & English Dub Available</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TotalData
