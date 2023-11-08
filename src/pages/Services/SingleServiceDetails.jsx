import { useLoaderData } from "react-router-dom";
import UserDammy from "../../assets/user-picture.png"
import { Button, Card, Datepicker, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";


const SingleServiceDetails = () => {
    const { loggedUser } = useAuth();
    const singleService = useLoaderData()
    const [openModal, setOpenModal] = useState(false);
    const onCloseModal = () => {
        setOpenModal(false);
    }
    // console.log("user in order page", loggedUser);
    // console.log(singleService);

    const handleOrder = e => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.service_name.value;
        const serviceProviderName = form.serviceProvider_name.value;
        const ServiceProviderEmail = form.Service_Provider_Email.value;
        const ClientEmail = form.Client_Email.value;
        const OrderDate = form.order_date.value;
        const ServicePrice = form.Service_Price.value;
        const SpecialInstruction = form.Special_instruction.value;

        const clientOrder = {
            serviceName, serviceProviderName, ServiceProviderEmail, ClientEmail, OrderDate, ServicePrice,
            SpecialInstruction
        }
        
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        axios.post("http://localhost:5000/orders", clientOrder)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        // console.log(clientOrder);
    }
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
                    <Button onClick={() => setOpenModal(true)}>Order Now</Button>
                </div>
            </Card>
            <Modal show={openModal} size="" onClose={onCloseModal} popup >
                <Modal.Header />
                <Modal.Body>
                    <form className="space-y-6 h-screen" onSubmit={handleOrder}>
                        <h3 className="text-xl font-bold text-green-600 dark:text-white">Order Confirmation</h3>
                        <div className="flex items-center justify-around">
                            <div>
                                <img src={singleService.serviceImage} className="md:w-3/12 rounded-md" alt="" />
                                <h3>Service Name: {singleService.serviceName || UserDammy}</h3>
                            </div>
                            <div>
                                <img src={singleService?.serviceProvider?.image ? singleService.serviceProvider.image : UserDammy} className="md:w-3/12 rounded-md" alt="" />
                                <h3>Service Provider: {singleService.serviceProvider.name}</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="grid md:grid-cols-3 gap-5">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="Service Name" value="Service Name" />
                                </div>
                                <TextInput
                                    readOnly
                                    placeholder="name@company.com"
                                    value={singleService.serviceName}
                                    name="service_name"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceProvider" value="Service Provider Name" />
                                </div>
                                <TextInput
                                    name="serviceProvider_name"
                                    readOnly
                                    value={singleService.serviceProvider.name}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="Service Provider Email" value="Service Provider Email" />
                                </div>
                                <TextInput
                                    readOnly
                                    name="Service_Provider_Email"
                                    type="email"
                                    placeholder="name@company.com"
                                    value={singleService?.serviceProvider.email || "dammy@mail.com"}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="Client Email" value="Client Email" />
                                </div>
                                <TextInput
                                    readOnly
                                    name="Client_Email"
                                    type="email"
                                    value={loggedUser?.email || "dammy@mail.com"}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="Service Taking Date" value="Service Taking Date" />
                                </div>
                                <Datepicker
                                    name="order_date" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="Service Price" value="Service Price" />
                                </div>
                                <TextInput
                                    readOnly
                                    name="Service_Price"
                                    value={`$ ${singleService.servicePrice}`}
                                    required
                                />
                            </div>
                            <div className="col-span-3">
                                <div className="mb-2 block">
                                    <Label htmlFor="Special instruction" value="Special instruction" />
                                </div>
                                <Textarea
                                    name="Special_instruction"
                                    placeholder="Anything like address , area, customized service plan"
                                ></Textarea>
                            </div>
                        </div>
                        <div>

                            <Button gradientMonochrome="success" className="mx-auto font-bold my-3"><input type="submit" className="mx-auto font-bold my-3" value="Order Confirm" /></Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SingleServiceDetails;