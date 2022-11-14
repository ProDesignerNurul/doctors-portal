import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../dashboard/Dashboard/Dashboard";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import SignUp from "../../pages/signUp/SignUp";
import PrivateRoute from "../../privateRoutes/PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    // }
]);

export default routes;