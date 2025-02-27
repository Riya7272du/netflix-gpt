import { useDispatch } from 'react-redux';
import { addPopularMovies, addTopRatedMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react'
//fetch data form tmdb api and update store
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results))
    }
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;