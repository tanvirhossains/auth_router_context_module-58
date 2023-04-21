// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmvX_aJ-9todotE3GiJNgXihp-yGJhrM0",
    authDomain: "auth-router-context-9d054.firebaseapp.com",
    projectId: "auth-router-context-9d054",
    storageBucket: "auth-router-context-9d054.appspot.com",
    messagingSenderId: "500629078636",
    appId: "1:500629078636:web:22ed2833f720cf4f208e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app; 