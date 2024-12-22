import React from 'react';
import AuhtContext from './AuhtContext';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const gooogleprovider = new GoogleAuthProvider();


const AuthPovider = ({children}) => {


    const registerwihtgmail =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password )
    }

    const googlelogin =()=>{

        return signInWithPopup( auth , gooogleprovider);
    }

const auhtinfo = {
    registerwihtgmail,googlelogin
} 

    return (
       <AuhtContext.Provider value={auhtinfo}>
        {children}
       </AuhtContext.Provider>
    );
};

export default AuthPovider;