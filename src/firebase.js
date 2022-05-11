// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnlSBaZRZU9IWvsSaN6gB_NtuenhbKmOQ",
  authDomain: "book-selling-website.firebaseapp.com",
  projectId: "book-selling-website",
  storageBucket: "book-selling-website.appspot.com",
  messagingSenderId: "821985280641",
  appId: "1:821985280641:web:5e0586441473cae96dc380",
  measurementId: "G-0QKJM6074W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {getAuth};