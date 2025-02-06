import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl sm:text-5xl font-bold'>{title}</h1>
            <p className='py-4 sm:py-6 text-base sm:text-lg w-full sm:w-1/2 md:w-1/3'>{overview}</p>
            <div className='flex flex-col sm:flex-row'>
                <button className='bg-white text-black p-4 px-6 sm:px-12 text-xl rounded-md hover:opacity-70 mb-2 sm:mb-0'>
                    ▷ Play
                </button>
                <button className='mx-2 sm:mx-4 bg-gray-500 text-white p-4 px-6 sm:px-12 text-xl bg-opacity-50 rounded-md'>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
