import axios from "axios";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewService = () => {
    const { loggedUser } = useAuth()
    console.log(loggedUser);
    const navigate = useNavigate()
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const serviceProviderName = form.serviceProvider_name.value;
        const serviceProviderImage = form.serviceProvider_image.value;
        const serviceProviderLocation = form.serviceProvider_location.value;
        const serviceProviderShortDescription = form.serviceProvider_shortDescription.value;
        const servicePrice = parseFloat(form.servicePrice.value);
        const serviceDescription = form.serviceDescription.value;

        const addNewService = {
            serviceImage,
            serviceName,
            serviceDescription,
            serviceProvider: {
                name: serviceProviderName,
                image: serviceProviderImage,
                location: serviceProviderLocation,
                shortDescription: serviceProviderShortDescription,
            },
            servicePrice,
        }
        // axios.post('http://localhost:5000/services', addNewService)
        axios.post('https://snapart-server.vercel.app/services', addNewService)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "New Service Created!",
                        text: "SuccessFully Create New Service!",
                        icon: "success"
                    });
                    navigate("/manage-service")
                }
            })
            .catch(err => {
                console.log(err);
            })
        // console.log(addNewService);

    }

    return (
        <div>
            {/* <form onSubmit={handleAddService} className="grid md:grid-cols-3 gap-5 w-11/12 mx-auto">
                <input
                    type="text"
                    name="serviceImage"
                    placeholder="Service Image URL"
                />
                <input
                    type="text"
                    name="serviceName"
                    placeholder="Service Name"
                />
                <input
                    type="text"
                    name="serviceProvider_image"
                    placeholder="Provider Image URL"
                    defaultValue={loggedUser?.photoURL}
                    readOnly
                />
                <input
                    type="text"
                    name="serviceProvider_name"
                    placeholder="Provider Name"
                    defaultValue={loggedUser?.displayName ? loggedUser.displayName : "Dummy Name"}
                    readOnly
                />
                <input
                    type="text"
                    name="serviceProvider_location"
                    placeholder="Provider Location"
                />
                <input
                    type="text"
                    name="serviceProvider_shortDescription"
                    placeholder="Provider Short Description"
                />
                <input
                    type="number"
                    name="servicePrice"
                    placeholder="Service Price"
                />
                <textarea className="col-span-3"
                    name="serviceDescription"
                    placeholder="Service Description"
                />
                <div className="col-span-3 my-4 w-11/12 mx-auto">
                    <button className="btn btn-neutral btn-block" type="submit">Add Service</button>
                </div>
            </form> */}
            {/* <form onSubmit={handleAddService} className="space-y-6 h-screen">
                <h3 className="text-xl font-bold text-green-600 dark:text-white">Add a New Service</h3>
                <div className="flex items-center justify-around">
                    <div>
                        <label htmlFor="serviceImage" className="font-medium text-gray-900 dark:text-white">
                            Service Image URL
                        </label>
                        <input
                            type="text"
                            id="serviceImage"
                            name="serviceImage"
                            placeholder="Service Image URL"
                            className="input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceName" className="font-medium text-gray-900 dark:text-white">
                            Service Name
                        </label>
                        <input
                            type="text"
                            id="serviceName"
                            name="serviceName"
                            placeholder="Service Name"
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    <div>
                        <label htmlFor="serviceProvider_image" className="font-medium text-gray-900 dark:text-white">
                            Provider Image URL
                        </label>
                        <input
                            type="text"
                            id="serviceProvider_image"
                            name="serviceProvider_image"
                            placeholder="Provider Image URL"
                            defaultValue={loggedUser?.photoURL || ""}
                            className="input"
                            readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceProvider_name" className="font-medium text-gray-900 dark:text-white">
                            Provider Name
                        </label>
                        <input
                            type="text"
                            id="serviceProvider_name"
                            name="serviceProvider_name"
                            placeholder="Provider Name"
                            defaultValue={loggedUser?.displayName || "Dummy Name"}
                            className="input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceProvider_location" className="font-medium text-gray-900 dark:text-white">
                            Provider Location
                        </label>
                        <input
                            type="text"
                            id="serviceProvider_location"
                            name="serviceProvider_location"
                            placeholder="Provider Location"
                            className="input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceProvider_shortDescription" className="font-medium text-gray-900 dark:text-white">
                            Provider Short Description
                        </label>
                        <input
                            type="text"
                            id="serviceProvider_shortDescription"
                            name="serviceProvider_shortDescription"
                            placeholder="Provider Short Description"
                            className="input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="servicePrice" className="font-medium text-gray-900 dark:text-white">
                            Service Price
                        </label>
                        <input
                            type="number"
                            id="servicePrice"
                            name="servicePrice"
                            placeholder="Service Price"
                            className="input"
                            required
                        />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="serviceDescription" className="font-medium text-gray-900 dark:text-white">
                            Service Description
                        </label>
                        <textarea
                            id="serviceDescription"
                            name="serviceDescription"
                            placeholder="Service Description"
                            className="input"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="my-5">
                    <button className="mx-auto my-5 p-3 font-bold btn btn-neutral btn-block" type="submit">
                        Add Service
                    </button>
                </div>
            </form> */}

            <h3 className="text-2xl font-bold text-green-600 dark:text-white text-center">Add a New Service</h3>
            <form onSubmit={handleAddService} className="space-y-6 h-screen grid md:grid-cols-2 w-11/12 mx-auto gap-5">

                <div className="flex flex-col">
                    <label htmlFor="serviceImage" className="font-medium text-gray-900 dark:text-white">
                        Service Image URL
                    </label>
                    <input
                        type="text"
                        id="serviceImage"
                        name="serviceImage"
                        placeholder="Service Image URL"
                        className="input"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="serviceName" className="font-medium text-gray-900 dark:text-white">
                        Service Name
                    </label>
                    <input
                        type="text"
                        id="serviceName"
                        name="serviceName"
                        placeholder="Service Name"
                        className="input"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="serviceProvider_image" className="font-medium text-gray-900 dark:text-white">
                        Provider Image URL
                    </label>
                    <input
                        type="text"
                        id="serviceProvider_image"
                        name="serviceProvider_image"
                        placeholder="Provider Image URL"
                        defaultValue={loggedUser?.photoURL || ""}
                        className="input"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="serviceProvider_name" className="font-medium text-gray-900 dark:text-white">
                        Provider Name
                    </label>
                    <input
                        type="text"
                        id="serviceProvider_name"
                        name="serviceProvider_name"
                        placeholder="Provider Name"
                        defaultValue={loggedUser?.displayName || "Dummy Name"}
                        className="input"
                        readOnly
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="serviceProvider_location" className="font-medium text-gray-900 dark:text-white">
                        Provider Location
                    </label>
                    <input
                        type="text"
                        id="serviceProvider_location"
                        name="serviceProvider_location"
                        placeholder="Provider Location"
                        className="input"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="serviceProvider_shortDescription" className="font-medium text-gray-900 dark:text-white">
                        Provider Short Description
                    </label>
                    <input
                        type="text"
                        id="serviceProvider_shortDescription"
                        name="serviceProvider_shortDescription"
                        placeholder="Provider Short Description"
                        className="input"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="servicePrice" className="font-medium text-gray-900 dark:text-white">
                        Service Price
                    </label>
                    <input
                        type="number"
                        id="servicePrice"
                        name="servicePrice"
                        placeholder="Service Price"
                        className="input"
                        required
                    />
                </div>
                <div className="flex flex-col col-span-3">
                    <label htmlFor="serviceDescription" className="font-medium text-gray-900 dark:text-white">
                        Service Description
                    </label>
                    <textarea
                        id="serviceDescription"
                        name="serviceDescription"
                        placeholder="Service Description"
                        className="input"
                        required
                    ></textarea>
                </div>

                <div className="my-5 col-span-3">
                    <button className="mx-auto my-5 p-3 font-bold btn btn-neutral btn-block" type="submit">
                        Add Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewService;
