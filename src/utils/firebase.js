// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF4oXoAHS3HhVUYp_iU6KqL-R_VYnH-CQ",
    authDomain: "netflixgpt-93ee5.firebaseapp.com",
    projectId: "netflixgpt-93ee5",
    storageBucket: "netflixgpt-93ee5.firebasestorage.app",
    messagingSenderId: "960426939958",
    appId: "1:960426939958:web:b2105d9059c2695d82ea97",
    measurementId: "G-V8KG209QFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();