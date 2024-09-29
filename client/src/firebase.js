// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yegna-blog.firebaseapp.com",
  projectId: "yegna-blog",
  storageBucket: "yegna-blog.appspot.com",
  messagingSenderId: "964481465939",
  appId: "1:964481465939:web:0cd4a2e9e89f4a2a2710a6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
