import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
    return (
        <div>
            <div className="absolute inset-0 -z-10">
                <img
                    src={BG_URL}
                    alt="background"
                    className="w-full h-full object-cover "
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GPTSearch