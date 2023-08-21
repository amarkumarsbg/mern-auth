// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f813c.firebaseapp.com",
  projectId: "mern-auth-f813c",
  storageBucket: "mern-auth-f813c.appspot.com",
  messagingSenderId: "168866738061",
  appId: "1:168866738061:web:b620bd98cd7918071c97c4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
