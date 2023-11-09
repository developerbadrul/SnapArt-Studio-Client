import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import useAuth from "../../hook/useAuth";
import UserDammy from "../../assets/user-picture.png"
import { Spinner } from "flowbite-react";

const Navbar = () => {
    const { loding, loggedUser, logOut } = useAuth();
    const links = (
        <ul>
            {!loggedUser ? (
                <div className="flex">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    {/* Add more links for logged-in users here */}
                </div>
            ) : (
                <div className="flex">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/add-new-service">Add Service</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/manage-service">Manage Service</NavLink></li>
                    {/* <li><NavLink to="/my-schedule">My Schedule</NavLink></li> */}
                    {/* <li><NavLink to="/dashboard">Dashboard</NavLink></li> */}
                    {/* Add more links for non-logged-in users here */}
                </div>
            )}
        </ul>
    );


    const handleLogout = () => {

        if (loding) {
            return <div className="text-center">
                <Spinner color="success" aria-label="Success spinner example" size="xl" />
            </div>
        }

        logOut()
            .then(result => {
                console.log(result, "Logout");
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{links}</li>
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl"><img className="w-3/4" src={Logo} alt="Operater Manager  " /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                loggedUser ?
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={loggedUser?.photoURL ? loggedUser.photoURL : UserDammy} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                        {loggedUser?.displayName ? loggedUser.displayName : loggedUser?.email}
                    </div>
                    : <div className="navbar-end"></div>

            }
        </div>
    );
};

export default Navbar;