import { Spinner } from "flowbite-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Service from "./Service";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [allServices, setAllService] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(() => {
        axios.get("https://snapart-server.vercel.app/services")
            .then((data) => {
                setAllService(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const filtered = allServices.filter((service) =>
            service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredServices(filtered);
    }, [searchQuery, allServices]);

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
                    <PageTitle title={"SnapArt || Services"}></PageTitle>

                    <h2 className="text-center text-5xl text-emerald-600 font-bold py-4">Total Services: {filteredServices.length}</h2>
                    <form className="mx-auto w-11/12 flex gap-5">
                        <input
                            className="w-full rounded-lg"
                            type="search"
                            placeholder="Search By Service Name"
                            name="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <div className="grid md:grid-cols-3 gap-5 md:w-11/12 mx-auto py-5">
                        {filteredServices.map((service) => (
                            <Service key={service._id} service={service} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Services;
