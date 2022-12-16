import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContexts = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children}) => {
    const [user , setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSingIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const setUserName = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName : name
        })
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false);
        }) ;

        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        setUserName,
        loginUser,
        googleSingIn,
        logOut,
        
    }

    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;