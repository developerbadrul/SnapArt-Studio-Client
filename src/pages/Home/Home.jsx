import axios from "axios";
import { useEffect, useState } from "react";
import Service from "../Services/Service";
import { Spinner } from "flowbite-react";

const Home = () => {
    const [loadServices, setLoadServices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/services")
            .then((response) => {
                console.log(response);
                setLoadServices(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    console.log("load service Home Page", loadServices);

    return (
        <div>
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
                        <div className="grid md:grid-cols-2 w-10/12 mx-auto">
                            {loadServices?.slice(0, 4)?.map((service) => (
                                <Service key={service._id} service={service}></Service>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
