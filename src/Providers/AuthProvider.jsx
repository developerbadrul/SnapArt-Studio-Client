/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Utility/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loding, setLoding] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [loggedUser, setLoggedUser] = useState(null)

    const createUserWithPass = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("After State Change", currentUser);
            setLoggedUser(currentUser);
            setLoding(false)
        });
        return () => {
            unSubscribe()
        }
    }, [auth])

    const value = {
        loding,
        setLoding,
        createUserWithPass,
        userLogin,
        loginWithGoogle,
        logOut,
        loggedUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;