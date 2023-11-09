import { Spinner } from "flowbite-react";
import SocialMediaSignIn from "../../components/SocialMediaSignIn/SocialMediaSignIn";
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, loggedUser, loding } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (loding) {
      return <div className="text-center">
        <Spinner color="success" aria-label="Success spinner example" size="xl" />
      </div>
    }

    userLogin(email, password)
      .then(result => {
        navigate(location?.state ? location.state : "/");
        toast.success('Successfully Login!', result)
       
      })
      .catch(err => {
        toast.error(err.message);
      })
  }

  console.log("After Login", loggedUser);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
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
              <button className="btn btn-primary">Login</button>
              {/* <input className="btn btn-primary" type="submit" value="Login" /> */}
            </div>
          </form>
          <SocialMediaSignIn></SocialMediaSignIn>
          <p className="mx-auto py-5">New User? <Link state={location.state} className="link-primary" to="/register">Registration Please</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;