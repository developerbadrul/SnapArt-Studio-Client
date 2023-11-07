/* eslint-disable react/prop-types */
import { Spinner } from "flowbite-react";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loding, loggedUser } = useAuth();
    const location = useLocation()
    if (loding) {
        return <div className="text-center">
            <Spinner color="success" aria-label="Success spinner example" size="xl"  className="h-screen"/>
        </div>
    }

    if(loggedUser){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;