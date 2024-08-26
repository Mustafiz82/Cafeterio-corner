import React from 'react';
import App from './App';
import Home from './Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Foods from './Pages/Foods';
import AddFoods from './Pages/AddFoods';
import MyOrder from './Pages/MyOrder';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Regestration from './Pages/Regestration';
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/foods",
                element: <Foods></Foods>
            },
            {
                path: "/addFoods",
                element: <PrivetRoute><AddFoods></AddFoods></PrivetRoute>
            },
            {
                path: "/myOrder",
                element: <PrivetRoute><MyOrder></MyOrder></PrivetRoute>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/registration",
        element: <Regestration></Regestration>
    },
]);

export default router;