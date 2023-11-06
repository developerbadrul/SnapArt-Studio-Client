/* eslint-disable react/prop-types */
import { Button, Card } from "flowbite-react";
import UserDammy from "../../assets/user-picture.png"
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    return (
        <Card
            className="max-w-sm"
            renderImage={() => <img src={service.serviceImage} />}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service.serviceName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {service.serviceDescription}
            </p>
            <div className="flex gap-4">
                <div className="shrink-0">
                    <img
                        alt={service?.serviceProvider.name}
                        height="32"
                        src={UserDammy}
                        width="32"
                        className="rounded-full"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{service?.serviceProvider.name}</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${service.servicePrice}
                </div>
            </div>
            <Link to={`http://localhost:5173/services/${service._id}`}><Button gradientMonochrome="success" className="font-bold w-full">View Service Details</Button></Link>
        </Card>
    );
};

export default Service;