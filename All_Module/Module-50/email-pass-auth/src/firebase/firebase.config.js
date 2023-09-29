// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSDSDBYREoCd2AcPPCMSqXd3sFKvCYffk",
  authDomain: "user-email-password-auth-85d62.firebaseapp.com",
  projectId: "user-email-password-auth-85d62",
  storageBucket: "user-email-password-auth-85d62.appspot.com",
  messagingSenderId: "710796030556",
  appId: "1:710796030556:web:bc51d56a8b22dec0aa2c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;