// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzpd6Qvk65Up9o8B6IpULY5SwSQDfgEh4",
    authDomain: "my-portfolio-fa45c.firebaseapp.com",
    projectId: "my-portfolio-fa45c",
    storageBucket: "my-portfolio-fa45c.appspot.com",
    messagingSenderId: "368236131738",
    appId: "1:368236131738:web:8ea0f51f1d84dedcf63623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;