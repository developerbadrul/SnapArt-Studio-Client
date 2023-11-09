import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import Footers from "./components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Root;