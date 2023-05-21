// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNhRcbDNR0OcMMwefLtFCb-W57zYY_jp0",
    authDomain: "e-commerce-ad4d5.firebaseapp.com",
    projectId: "e-commerce-ad4d5",
    storageBucket: "e-commerce-ad4d5.appspot.com",
    messagingSenderId: "641420639894",
    appId: "1:641420639894:web:874cd971791999c067ccb7",
    measurementId: "G-6SQLQMYKRV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(); 
