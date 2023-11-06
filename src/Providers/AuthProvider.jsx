/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Utility/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loding, setLoding] = useState(true)
    const auth = getAuth(app);

    const createUserWithPass = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }  

    const value = {
        loding,
        setLoding,
        createUserWithPass ,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;