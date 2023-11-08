import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewService = () => {
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
        const servicePrice = parseFloat(form.servicePrice.value); // Parse to a float if it's a price.
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
        // axios.post('https://snapart-server.vercel.app/services', addNewService)
        axios.post('http://localhost:5000/services', addNewService)
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

        // You can use this data to make a POST request to your backend for adding the new service.
    }

    return (
        <div>
            <h1 className="text-center">Add a New Service</h1>
            <form onSubmit={handleAddService} className="grid md:grid-cols-3 gap-5 w-11/12 mx-auto">
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
                />
                <input
                    type="text"
                    name="serviceProvider_name"
                    placeholder="Provider Name"
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
            </form>
        </div>
    );
};

export default AddNewService;
