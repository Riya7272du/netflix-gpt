import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO, PHOTO_URL } from "../utils/constants";

const Login = () => {
    const [isSignInform, setIsSignInform] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(
            isSignInform ? null : fullName.current.value,
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        if (message) return;

        if (!isSignInform) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value, photoURL: PHOTO_URL,
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        // navigate('/browse');
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                        // ...
                    });
                })
                .catch((error) => {
                    setErrorMessage(`${error.code} - ${error.message}`);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // navigate('/browse');
                })
                .catch((error) => {
                    setErrorMessage(`${error.code} - ${error.message}`);
                });
        }
    };

    const ToggleSignInForm = () => {
        setIsSignInform(!isSignInform);
    };

    return (
        <div className="relative min-h-screen bg-black flex flex-col items-center justify-center">
            {/* Header placed outside the absolute container */}
            <div className="w-full absolute top-0 z-20">
                <Header />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-11/12 max-w-md p-6 sm:p-10 md:p-12 bg-black bg-opacity-80 rounded-lg relative z-10"
            >
                <h1 className="font-bold text-3xl sm:text-4xl py-4 text-white text-center">
                    {isSignInform ? 'Sign In' : 'Sign Up'}
                </h1>

                {!isSignInform && (
                    <input
                        ref={fullName}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                )}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                {errorMessage && (
                    <p className="text-red-500 font-bold text-center text-sm sm:text-lg py-2">
                        {errorMessage}
                    </p>
                )}

                <button
                    className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300"
                    onClick={handleButtonClick}
                >
                    {isSignInform ? 'Sign In' : 'Sign Up'}
                </button>

                <p
                    className="py-4 text-cyan-50 text-center cursor-pointer hover:underline"
                    onClick={ToggleSignInForm}
                >
                    {isSignInform ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}
                </p>
            </form>
        </div>
    );
};

export default Login;
