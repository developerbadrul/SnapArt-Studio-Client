import { Button } from "flowbite-react";
import useAuth from "../../hook/useAuth";

const SocialMediaSignIn = () => {
    const { loginWithGoogle } = useAuth();
    const handleGoogleLogin = () => {
        loginWithGoogle()
    }
    return (
        <Button onClick={handleGoogleLogin} outline gradientDuoTone="purpleToBlue" className="w-10/12 mx-auto my-3">
            Sign In With Google
        </Button>
    );
};

export default SocialMediaSignIn;