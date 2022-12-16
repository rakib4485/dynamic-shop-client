import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../../layouts/LoginLayout";
import Main from "../../layouts/Main";
import About from "../../pages/About/About/About";
import Categories from "../../pages/Categories/Categories/Categories";
import Contacts from "../../pages/Contacts/Contacts/Contacts";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Shared/Login/Login";
import Register from "../../pages/Shared/Register/Register";
import PrivetRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/packages/:id',
                loader: ({params})=> fetch(`https://dynamic-shop-server.vercel.app/packages/${params.id}`),
                element: <PrivetRoutes><Categories></Categories></PrivetRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contacts',
                element: <Contacts></Contacts>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
])