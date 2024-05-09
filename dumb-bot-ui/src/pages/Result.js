import React, { useState, useEffect } from "react";
import Header from './Index/Header';
import Footer from './Index/Footer';
import Search from './Index/Search/Search';
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'

const Result = () => {

    // Declare Location 
    const router = useRouter();

    //Declare state variables
    const [getKeyword, setKeyword] = useState('')
    const [getList, setLst] = useState([]);

    // if you want to fetch another websites links
    // const [getList2, setList2] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [getTime, setTime] = useState("");


    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);

            try {
                const { movieslist } = router.query
                setKeyword(movieslist)
                if (!movieslist || movieslist.trim() === '') {
                    return toast.error("Try again...");
                }
                setTimeout(async () => {
                    const timerStart = Date.now()
                    const response = await axios.post('http://localhost:8001/list', { keywordValue: movieslist , passcode : "uydhtsdd245@"})
                        .then(res => {
                            setLst(res.data.result);
                            //another website url set
                            // setList2(res.data.result2);

                            const timerStop = Date.now() - timerStart;
                            setTime(Math.floor(timerStop / 1000))
                        }).catch(err => {
                            toast.error('something wrong!')
                        }).finally(() => {
                            setIsLoading(false);
                            toast.success("Complete")
                        });

                }, 2000);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, [router]);

    //if you use two or more website links and down below replace getList to merge
    // const merge = getList.concat(getList2)

    return (
        <div>
            <Header />
            <div className="text-center mt-5">
                <Search />
            </div>
            {isLoading && <div id="loading">Loading...</div>}

            <div className="border-solid border-b-2 p-[1.5rem] rounded-lg lg:border-none mb-[14rem]">
                <div>
                    <h2 className='text-sm mt-5'>About {getList.length} results ({getTime}&nbsp;sec) for {getKeyword}</h2>
                </div>

                {getList.length === 0 ? (
                    <p className="text-red-500">No data found</p>
                ) : (
                    (getList.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3 className='border-b text-sm mt-7 lg:text-xl'>{item.replace(/https:\/\/moviesmod\.net\.in\/|https:\/\/hdmovie2\.sbs\//g, "").toUpperCase()}</h3>
                                <div className='border-solid border-2 p-2 lg:p-5 rounded-lg text-sm lg:text-base'>
                                    <i className='bx bxs-download hidden lg:inline-flex'></i>
                                    <a href={item} target="_blank" rel="noreferrer">{item}</a>
                                </div>
                            </div>
                        );
                    }))
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Result
