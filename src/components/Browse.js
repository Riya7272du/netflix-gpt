import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from "./GptSearch"
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            {showGptSearch ? (<GptSearch />) :
                (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )
            }
        </div>
    )
}

export default Browse