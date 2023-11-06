import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const allServices = useLoaderData();
    console.log(allServices);
    return (
        <div>
            <h2 className="text-center text-5xl text-emerald-600 font-bold py-4">Total Services:{allServices.length}</h2>
            <div className="grid md:grid-cols-2 gap-5 md:w-11/12 mx-auto py-5">
                {
                    allServices.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;