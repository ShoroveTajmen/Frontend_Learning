import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log('this is user', user)
    const googleProvider = new GoogleAuthProvider();
    

    //create a uuser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user sigggn in
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

  //log in user via google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

    //for log out a user
    const logOutUser = () => {
        setLoading(true); 
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    
        });
        return  () => {
           return unSubscribe()
        }
    },[])


    const authInfo = {
        user, loading, createUser, signIn, logOutUser, updateUserProfile,googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;