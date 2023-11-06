/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Utility/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loding, setLoding] = useState(true)
    const auth = getAuth(app);

    const createUserWithPaaword = (email, password) =>{
        setLoding(true)
        return createUserWithPaaword(auth, email, password)
    }  

    const value = {
        loding,
        setLoding,
        createUserWithPaaword,
    }
    return (
        <AuthContext.Provider userInfo={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;