// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-76ffd.firebaseapp.com",
  projectId: "real-estate-76ffd",
  storageBucket: "real-estate-76ffd.appspot.com",
  messagingSenderId: "558842119486",
  appId: "1:558842119486:web:e2e29bf7bf2b946ea9586f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
