import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../src/MainLayout.jsx/Mainlayout';

const Routs = createBrowserRouter([
    {
        path:"/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <h1>route not found</h1>,
    }
])

export default Routs;