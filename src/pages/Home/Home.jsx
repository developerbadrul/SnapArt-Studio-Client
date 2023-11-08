import axios from "axios";
import { useEffect, useState } from "react";
import Service from "../Services/Service";
import { Button, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    const [loadServices, setLoadServices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://snapart-server.vercel.app/services")
            .then((response) => {
                console.log(response);
                setLoadServices(response.data);
                setLoading(false);
            })
            .catch((err) => {
                // console.error("Error fetching data:", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    // console.log("load service Home Page", loadServices);

    return (
        <div>
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
        </div>
    );
};

export default Home;
