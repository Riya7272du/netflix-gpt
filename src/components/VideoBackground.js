import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    const dispatch = useDispatch();

    // Fetch trailer video and update store
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, [movieId]);

    return (
        <div className='w-screen'>
            {trailerVideo?.key && (
                <iframe
                    className='w-full h-auto aspect-video'
                    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            )}
        </div>
    );
};

export default VideoBackground;
