import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddOperator from "../pages/AddOperator/AddOperator";
import OperatorList from "../pages/OperatorList/OperatorList";
import AddShop from "../pages/AddShop/AddShop";
import ShopList from "../pages/ShopList/ShopList";
import Services from "../pages/Services/Services";
import AddNewService from "../pages/AddNewService/AddNewService";
import SingleServiceDetails from "../pages/Services/SingleServiceDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                index:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/add-operator",
                element: <AddOperator></AddOperator>
            },
            {
                path:"/operator-list",
                element: <OperatorList></OperatorList>
            },
            {
                path:"/add-shop",
                element: <AddShop></AddShop>
            },
            {
                path:"/shop-list",
                element: <ShopList></ShopList>
            },
            {
                path:"/services",
                element: <PrivateRoute><Services></Services></PrivateRoute>,
                loader: ()=> fetch("http://localhost:5000/services")
            },
            {
                path:"/services/:id",
                element: <PrivateRoute><SingleServiceDetails></SingleServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"/add-new-service",
                element: <PrivateRoute><AddNewService></AddNewService></PrivateRoute>
            },
            {
                path:"/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
        ]
    }
])

export default router