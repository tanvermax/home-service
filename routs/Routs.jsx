import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../src/MainLayout.jsx/Mainlayout";
import Login from "../src/Pages/Auth/Login";
import Register from "../src/Pages/Auth/Register";
import Home from "../src/Pages/Home/Home";
import AllService from "../src/Pages/Service/AllService";
import ServiceLayout from "../src/Pages/Service/ServiceLayout";
import Addservices from "../src/Pages/Service/Addservices";
import ManageService from "../src/Pages/Service/ManageService";
import Bookedservice from "../src/Pages/Service/Bookedservice";

const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h1>route not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "allservices",
        element: <AllService></AllService>,
      },
      {
        path: "servicetodo",
        element: <ServiceLayout></ServiceLayout>,
      },
      {
        path: "addService",
        element: <Addservices></Addservices>,
      },
      {
        path: "manageservices",
        element: <ManageService></ManageService>,
      },
      {
        path: 'bookedservice',
        element: <Bookedservice></Bookedservice>
      }
    ],
  },
]);

export default Routs;
