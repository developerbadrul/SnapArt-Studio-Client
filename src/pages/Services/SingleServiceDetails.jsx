import { useLoaderData } from "react-router-dom";
import UserDammy from "../../assets/user-picture.png"

const SingleServiceDetails = () => {
    const singleService = useLoaderData()
    // console.log(singleService);
    return (
        <div>
            Service Detail For: {singleService._id}
            <img className="w-10/12" src={singleService.serviceImage} alt="" />
            <h1 className="text-5xl">Service Name: {singleService.serviceName}</h1>
            <p>Service Discription: {singleService.serviceDescription}</p>
            <h3>Service Price: ${singleService.servicePrice}</h3>
            <div>
                <img src={UserDammy} alt="" />
                <h2>Service Provider Name: {singleService.serviceProvider.name}</h2>
                <h3>Address: {singleService.serviceProvider.location}</h3>
            </div>
        </div>
    );
};

export default SingleServiceDetails;