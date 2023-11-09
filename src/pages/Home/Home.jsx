import axios from "axios";
import { useEffect, useState } from "react";
import Service from "../Services/Service";
import { Button, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import PageTitle from "../../components/PageTitle/PageTitle";
import AboutUs from "../../components/AboutUs/AboutUs";
import Faq from "../../components/FAQ/FAQ";

const Home = () => {
    const [loadServices, setLoadServices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://snapart-server.vercel.app/services");
                // console.log(response);
                setLoadServices(response.data);
                setLoading(false);
            } catch (err) {
                // Handle the error
                console.error("Error fetching data:", err);
                setError(err);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    // console.log("load service Home Page", loadServices);

    return (
        <div>
            <PageTitle title={"SnapArt || Home"}></PageTitle>
            {/* banner section  */}
            <div className="w-11/12 mx-auto my-2">
            <Banner></Banner>
            </div>

            {/* Popular Service Section  */}
            {loading ? (
                <div className="text-center">
                    <Spinner color="success" aria-label="Success spinner example" size="xl" className="h-screen" />
                </div>
            ) : error ? (
                <div className="text-center">
                    <p>Error Fetching Data: {error.message}</p>
                </div>
            ) : (
                <div>
                    <div>
                        <h1 className="text-center text-5xl text-emerald-600 font-bold py-4">Popular Services</h1>
                        <div className="grid md:grid-cols-2 gap-5 w-10/12 mx-auto">
                            {loadServices?.slice(0, 4)?.map((service) => (
                                <Service key={service._id} service={service}></Service>
                            ))}
                        </div>
                        <Link className="w-10/12 block mx-auto my-3" to="/services"><Button gradientMonochrome="success" className="font-bold mx-auto">See All Services</Button></Link>
                    </div>
                </div>
            )}

            {/* About us section  */}
            {/* <h1>About Us</h1>  */}
            <AboutUs></AboutUs>

            {/* Faq Section  */}
            <div className="w-11/12 mx-auto my-5">
            <h1 className="my-5 text-5xl text-center font-bold text-green-600">Some FAQ</h1>
            <Faq></Faq> 
            </div>

        </div>
    );
};

export default Home;
