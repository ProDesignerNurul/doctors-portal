import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews";
import SignUp from "../../pages/signUp/SignUp";

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
            }
        ]
    }
]);

export default routes;