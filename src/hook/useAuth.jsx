import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
    const {loding,
        setLoding,
        createUserWithPaaword
    } = useContext(AuthContext)
    
    return {
        loding,
        setLoding,
        createUserWithPaaword
    }
};

export default useAuth;