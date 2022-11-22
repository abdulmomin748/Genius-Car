import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Order from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({params}) => fetch(`https://genius-car-server-five-ebon.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Order /></PrivateRoute>,
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
])
export default router;