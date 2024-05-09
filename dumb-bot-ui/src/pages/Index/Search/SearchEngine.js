import React, { useState } from "react";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


const SearchEngine = () => {
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
			return toast.error('Not allowed');
		}
		else {
			toast('please wait...', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
			setTimeout(() => {
				router.push({
					pathname: '/Result',
					query: { movieslist: getMovies }
				  })
			}, 1000);
		}
	}

	return (
		<div className="home mb-28 mt-24 hidden lg:block">
			<section className="search-section">
				<div className="search-box shadow-md">
					<div>
						<h2 className="search-title text-2xl">What are you looking for!</h2>
						<div className="search-input-box">
							<span className="search-icon">
								<i className='bx bx-search'></i>
							</span>
							<input type="text" onChange={inputMoviesHandler} onKeyDown={handleKey} required />
							<label>Search... </label>
						</div>
						<button type="submit-btn" className="btn-submit" onClick={submitMoviesNameHanlder}><i className='bx bx-chevron-right'></i>Submit</button>
						<div className="nothing-link">
							<p>Don&apos;t know How To Use?&nbsp; scroll down</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SearchEngine;
