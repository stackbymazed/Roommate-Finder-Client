import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(user);


    const provider = new GoogleAuthProvider();

    const SignUpGoogle = () => {
       return signInWithPopup(auth, provider)
            
    }



    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const SignOut = () => {
        return signOut(auth)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const userinfo = {
        SignUpUser,
        SignInUser,
        SignUpGoogle,
        user,
        setUser,
        SignOut,
        updateUser,
        setLoading,
        loading
    }
    return (
        <AuthContext value={userinfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;