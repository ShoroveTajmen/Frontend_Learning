// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeh3xDXzL54p5BNJymvNPDHWAG_4iY8Sw",
  authDomain: "coffee-store-80bfe.firebaseapp.com",
  projectId: "coffee-store-80bfe",
  storageBucket: "coffee-store-80bfe.appspot.com",
  messagingSenderId: "737339593221",
  appId: "1:737339593221:web:27ab8a91a702f050c8426c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;