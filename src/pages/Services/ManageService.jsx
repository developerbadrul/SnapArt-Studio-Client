import axios from "axios";
import { Spinner, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import PageTitle from "../../components/PageTitle/PageTitle";

const ManageService = () => {
    const { loggedUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orders, setOrders] = useState([]);
    const clientEmail = loggedUser.email;

    useEffect(() => {
        axios.get(`https://snapart-server.vercel.app/orders/${clientEmail}`)
            .then((response) => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, [clientEmail]);

    const handleDeleteOrder = (orderId) => {
        // axios.delete(`https://snapart-server.vercel.app/orders/${orderId}`)
        axios.delete(`localhost/orders/${orderId}`)
            .then(() => {
                // Update the state to remove the deleted order
                setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1 className="text-5xl text-green-600 font-bold text-center my-5">Your Order List</h1>
            {loading ? (
                <div className="text-center">
                    <Spinner color="success" aria-label="Loading spinner" size="xl" className="h-screen" />
                </div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <PageTitle title={"SnapArt || Manage Service"}></PageTitle>
                    {orders.length === 0 ? (
                        <p className="text-center text-2xl text-red-600 font-bold py-4">
                            You have no orders
                        </p>
                    ) : (
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>Service Name</Table.HeadCell>
                                <Table.HeadCell>Service Provider</Table.HeadCell>
                                <Table.HeadCell>Order Date</Table.HeadCell>
                                <Table.HeadCell>Service Price</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Actions</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {orders.map((order) => (
                                    <Table.Row key={order._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark-text-white">
                                            {order.serviceName}
                                        </Table.Cell>
                                        <Table.Cell>{order.serviceProviderName}</Table.Cell>
                                        <Table.Cell>{order.OrderDate}</Table.Cell>
                                        <Table.Cell>${order.ServicePrice}</Table.Cell>
                                        <Table.Cell className="mx-3">
                                            <a href="#" className="block font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Edit
                                            </a>
                                            <button
                                                className="block btn btn-error"
                                                onClick={() => handleDeleteOrder(order._id)}
                                            >
                                                Delete
                                            </button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    )}
                </div>
            )}
        </div>
    );
};

export default ManageService;
