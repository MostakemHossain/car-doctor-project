import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SingUp from "../pages/Home/SignUp/SingUp";
import Login from "../pages/Login/Login";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";

const router = createBrowserRouter([
    {
        path: "/",
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
                path: '/signup',
                element: <SingUp />

            },
            {
                path: '/service-detail/:id',
                element: <ServiceDetail></ServiceDetail>
            }
        ]
    },
]);

export default router;