// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-lVXFogZRkQhowaY6hHd6PfMQbtOxjfE",
  authDomain: "base-4436d.firebaseapp.com",
  projectId: "base-4436d",
  storageBucket: "base-4436d.appspot.com",
  messagingSenderId: "466963275464",
  appId: "1:466963275464:web:83715ac529d9401e750ffd",
  measurementId: "G-94J137C5LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db }