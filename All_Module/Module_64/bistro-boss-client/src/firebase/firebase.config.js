// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7b1TPctoQphL2-k245ZRf4Zg8ZXLKcLo",

  authDomain: "bistro-boss2-3edad.firebaseapp.com",

  projectId: "bistro-boss2-3edad",

  storageBucket: "bistro-boss2-3edad.appspot.com",

  messagingSenderId: "875295118459",

  appId: "1:875295118459:web:05fefde9456e1f2be03ede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
