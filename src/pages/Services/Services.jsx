import Service from "./Service";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [allServices, setAllService] = useState([]);

    useEffect(() => {
        axios.get("https://snapart-server.vercel.app/services")
            .then(data => {
                setAllService(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <div className="text-center">
                    <Spinner color="success" aria-label="Loading spinner" size="xl" className="h-screen" />
                </div>
            ) : error ? (
                <div className="text-center text-red-600">
                    An error occurred: {error.message}
                </div>
            ) : (
                <div>
                    <h2 className="text-center text-5xl text-emerald-600 font-bold py-4">Total Services: {allServices.length}</h2>
                    <div className="grid md:grid-cols-3 gap-5 md:w-11/12 mx-auto py-5">
                        {allServices.map(service => (
                            <Service key={service._id} service={service} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

}
export default Services;
