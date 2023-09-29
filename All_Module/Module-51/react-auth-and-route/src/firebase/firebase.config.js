// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdnzRviPptGtn4-INgG0aVbqFyT74tYv0",
  authDomain: "react-auth-and--route.firebaseapp.com",
  projectId: "react-auth-and--route",
  storageBucket: "react-auth-and--route.appspot.com",
  messagingSenderId: "641256282637",
  appId: "1:641256282637:web:7d2b0eec6f05b6a3955344",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
