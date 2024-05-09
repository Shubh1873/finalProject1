import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'

const Search = () => {

    const router = useRouter()
    const [getMovies, setMovies] = useState("");

    const inputMoviesHandler = (e) => {
        const moviesName = e.target.value;
        setMovies(moviesName);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            submitMoviesNameHanlder();
        }
    }

    const submitMoviesNameHanlder = () => {

        if (getMovies === '' || getMovies === '.' || getMovies === ':' || getMovies === '+' ||
            getMovies === '*' || getMovies === '?' || getMovies === '>' || getMovies === '<' ||
            getMovies === '$' || getMovies === '%' || getMovies === '^' || getMovies === '-' ||
            getMovies === '(' || getMovies === ')' || getMovies === '{' || getMovies === '}' ||
            getMovies === '[' || getMovies === ']' || getMovies === '_' || getMovies === '&' ||
            getMovies === '|' || getMovies === '/' || getMovies === '#' || getMovies === '!' ||
            getMovies === '`' || getMovies === '~' || getMovies === ';' || getMovies === ',' ||
            getMovies === "'" || getMovies === '"' || getMovies === undefined) {
            toast.error("Not Allowed");
            return console.log("Not allowed", getMovies);
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
        <div className="sg">
            <div className='lg:hidden flex flex-row justify-center border-b-2 border-300'>
                <input type='text' className='w-full h-9 m-auto text-center' placeholder='Enter Movies Name...' onChange={inputMoviesHandler} onKeyDown={handleKey} required></input>
                <button type="submit" className='btn-search w-auto  border-300 ml-1 p-1.5 rounded-r-md m-auto' onClick={submitMoviesNameHanlder} ><i className='bx bx-search'></i></button>
            </div>
        </div>
    )
}

export default Search
