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
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import { data } from "react-router-dom";
const gooogleprovider = new GoogleAuthProvider();

const AuthPovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    console.log(User);

  const registerwihtgmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gooogleprovider);
  };
  const loginwihtpass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user name photo
  const updateUser = async (updatedData) => {
    await updateProfile(auth.currentUser, updatedData);
    setUser({ ...auth.currentUser });
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture", currentUser);
      if (currentUser?.email) {
        const user =  {email : currentUser.email}
        axios.post('http://localhost:5000/jwt', user,{
          withCredentials:true
        })
        .then(res=>
          console.log(res.data)
        )
      }
      else{
        axios.post('http://localhost:5000/logout',{},{
          withCredentials:true
        })
        .then(res=> console.log("logou", res,data)
        )
      }
      setLoading(false);
    });
    return () => {
      unsubscriber();
    };
  }, []);

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const auhtinfo = {
    registerwihtgmail,
    googlelogin,
    User,
    logout,
    setLoading,
    setUser,
    loginwihtpass,
    loading,
    updateUser,
  };

  return (
    <AuhtContext.Provider value={auhtinfo}>{children}</AuhtContext.Provider>
  );
};

export default AuthPovider;
