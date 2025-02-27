import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react'
//fetch data form tmdb api and update store
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;