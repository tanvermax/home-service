import React from 'react';
import AuhtContext from './AuhtContext';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthPovider = ({children}) => {


    const registerwihtgmail =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password )
    }

const auhtinfo = {
    registerwihtgmail
} 

    return (
       <AuhtContext.Provider value={auhtinfo}>
        {children}
       </AuhtContext.Provider>
    );
};

export default AuthPovider;