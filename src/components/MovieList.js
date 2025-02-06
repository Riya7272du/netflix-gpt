import React from 'react'
import MovieCard from './MovieCard'
import "../index.css";
const MovieList = ({ title, movies }) => {
    // Ensure movies is a valid array before accessing index 0
    if (!movies || movies.length === 0) return null;

    return (
        <div className='px-6'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
