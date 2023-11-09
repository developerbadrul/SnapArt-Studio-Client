import Lottie from "lottie-react";
import ErrorPageAnimation from "../../assets/ErrorPage.json"
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoHome = () =>{
        navigate("/");
    }
    return (
        <div>
            <Button onClick={handleGoHome} className="my-5 mx-auto" gradientMonochrome="success"> <HiOutlineArrowLeft className="ml-2 h-5 w-5" /> Go Home</Button>
            <Lottie animationData={ErrorPageAnimation}></Lottie>
        </div>
    );
};

export default ErrorPage;