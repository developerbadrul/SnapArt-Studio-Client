import axios from "axios";
import { Spinner, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const ManageService = () => {
    const {loggedUser} = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orders, setOrders] = useState([]);
    const clientEmail = loggedUser.email;

    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${clientEmail}`)
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

    return (
        <div>
            {loading ? (
                <div className="text-center">
                    <Spinner color="success" aria-label="Loading spinner" size="xl" className="h-screen" />
                </div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Service Name</Table.HeadCell>
                        <Table.HeadCell>Service Provider</Table.HeadCell>
                        <Table.HeadCell>Order Date</Table.HeadCell>
                        <Table.HeadCell>Service Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {orders.map(order => (
                            <Table.Row key={order._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark-text-white">
                                    {order.serviceName}
                                </Table.Cell>
                                <Table.Cell>{order.serviceProviderName}</Table.Cell>
                                <Table.Cell>{order.OrderDate}</Table.Cell>
                                <Table.Cell>${order.ServicePrice}</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

export default ManageService;
