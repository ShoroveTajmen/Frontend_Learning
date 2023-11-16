import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log('this is user', user)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
    

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
        setUser(currentUser);
        if(currentUser){
            //get  token and store client side
            const userInfo = {email: currentUser.email}
            axiosPublic.post('/jwt', userInfo)
            .then(res => {
               if(res.data.token){
                localStorage.setItem('access-token', res.data.token)
               }
            })
        }else{
            //TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
            localStorage.removeItem('access-token');
        }
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