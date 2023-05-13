import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const singIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  
  const logOut = ()=>{
   setLoading(true)
   return signOut(auth)
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
       console.log('current user',currentUser)
       setLoading(false)
    });
    return ()=>{
      return unsubcribe();
    }
  },[])

  const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        signInWithGoogle,
        logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;