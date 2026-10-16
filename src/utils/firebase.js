// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJyV3V4FbEKuq9jIEalEfHV2Al24wSwU",
  authDomain: "netflixgpt-598df.firebaseapp.com",
  projectId: "netflixgpt-598df",
  storageBucket: "netflixgpt-598df.firebasestorage.app",
  messagingSenderId: "279284293977",
  appId: "1:279284293977:web:f5c99677a75a67152fec48",
  measurementId: "G-G1XN707SF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
