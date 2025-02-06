import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, PHOTO_URL } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate("/");  
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, []);


    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
            <img className='w-40'
                src={LOGO}
                alt="logo"></img>
            {user && (
                <div className='flex p-2'>
                    <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>GPT Search</button>
                    <img className='w-12 h-12'
                        alt="usericon"
                        src={PHOTO_URL} /
                    >
                    <button onClick={handleSignOut}
                        className='font-bold text-white'>SignOut</button>
                </div>
            )}
        </div>

    )
}

export default Header