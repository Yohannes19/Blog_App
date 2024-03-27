// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5SNer4AwdGdLNuTWFk9bOx0kXcVfoyMc",
  authDomain: "blog-app-27c50.firebaseapp.com",
  projectId: "blog-app-27c50",
  storageBucket: "blog-app-27c50.appspot.com",
  messagingSenderId: "644444750838",
  appId: "1:644444750838:web:152f24ed5e0702e4f0bdd7",
  measurementId: "G-WM1VY59S7Z"
 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; // Export the authentication instance
