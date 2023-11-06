import { useLoaderData } from "react-router-dom";
import UserDammy from "../../assets/user-picture.png"
import { Card } from "flowbite-react";

const SingleServiceDetails = () => {
    const singleService = useLoaderData()
    // console.log(singleService);
    return (
        <div>
            <h1 className="text-center text-5xl text-green-500 font-bold">Service Details</h1>
            <Card
            className="w-10/12 mx-auto my-5"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={singleService.serviceImage}
        >
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {singleService.serviceName}
                </h5>
            </a>
            <p className="font-bold">Discription: {singleService.serviceDescription}</p>
            <div className="flex items-center gap-4">
                <img className="w-[70px] rounded-full" src={UserDammy} alt="" />
                <div>
                    <h2>Service Provider Name: {singleService.serviceProvider.name}</h2>
                    <h3>Address: {singleService.serviceProvider.location}</h3>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: ${singleService.servicePrice}</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Order Now
                </a>
            </div>
        </Card>
        </div>
    );
};

export default SingleServiceDetails;