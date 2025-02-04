import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInform, setIsSignInform] = useState(true);
    const ToggleSignInForm = () => {
        setIsSignInform(!isSignInform);
    }
    return (
        <div className="relative min-h-screen bg-black">
            <Header />
            <div className='absolute inset-0 z-0'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
                    alt="logo" className='w-full h-full ob'></img>
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 text-white'>{isSignInform ? "Sign In" : "Sign Up"}</h1>

                {!isSignInform && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 mb-4 my-4 rounded bg-gray-800 text-white placeholder-gray-400"
                    />
                )}
                <input type="text" placeholder="Email Address" className="w-full p-3 mb-4 my-4 rounded bg-gray-800 text-white placeholder-gray-400"></input>

                <input type="password" placeholder="Password" className="w-full p-3 mb-4 my-4 rounded bg-gray-800 text-white placeholder-gray-400"></input>
                <button className="w-full bg-red-600 text-white p-3 my-6 rounded hover:bg-red-700 transition">
                    Sign In
                </button>
                <p className='py-4 text-cyan-50 cursor-pointer' onClick={ToggleSignInForm}>{isSignInform ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>

    )
}

export default Login