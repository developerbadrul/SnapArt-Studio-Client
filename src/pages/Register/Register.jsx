import { Spinner } from "flowbite-react";
import SocialMediaSignIn from "../../components/SocialMediaSignIn/SocialMediaSignIn";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const Register = () => {
    const { loding, createUserWithPass } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (loding) {
            <div className="text-center">
                <Spinner color="success" aria-label="Success spinner example"  size="xl"/>
            </div>
        }

        createUserWithPass(email, password)
            .then(result => {
                navigate(location?.state ? location.state : "/");
                console.log(result.user);
            })
            .catch(err => console.log(err))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <SocialMediaSignIn></SocialMediaSignIn>
                </div>
            </div>
        </div>
    );
};

export default Register;