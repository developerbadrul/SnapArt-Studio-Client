import { Button, Spinner } from "flowbite-react";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialMediaSignIn = () => {
    const { loginWithGoogle, loding } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleLogin = () => {
        if (loding) {
            return <div className="text-center">
                <Spinner color="success" aria-label="Success spinner example" size="xl" />
            </div>
        }

        loginWithGoogle()
            .then(result => {
                navigate(location?.state ? location.state : "/")
                console.log(result);
            })
            .catch(err => console.log(err.message))
    }
    return (
        <Button onClick={handleGoogleLogin} outline gradientDuoTone="purpleToBlue" className="w-10/12 mx-auto my-3">
            Sign In With Google
        </Button>
    );
};

export default SocialMediaSignIn;