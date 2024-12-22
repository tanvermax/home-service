import React, { useEffect, useState } from "react";
import AuhtContext from "./AuhtContext";
import auth from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const gooogleprovider = new GoogleAuthProvider();

const AuthPovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   console.log(User.email);

  const registerwihtgmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googlelogin = () => {
    setLoading(true)
    return signInWithPopup(auth, gooogleprovider);
  };
  const loginwihtpass =(email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth ,email,password);
  }

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log("state capture" , currentUser);
        setLoading(false)
        
    });
    return ()=>{
        unsubscriber();
    }
  }, []);

  const logout=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const auhtinfo = {
    registerwihtgmail,
    googlelogin,User,logout,setLoading,
    setUser,loginwihtpass,loading
  };

  return (
    <AuhtContext.Provider value={auhtinfo}>{children}</AuhtContext.Provider>
  );
};

export default AuthPovider;
