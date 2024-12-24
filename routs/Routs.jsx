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
import PrivetRouts from "../src/Privetrouts/PrivetRouts";
import SignleServices from "../src/Pages/Service/SignleServices";
import Editservice from "../src/Pages/Service/Editservice";

const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h1>route not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <h1>route not found</h1>,
      },
      {
        path: "login",
        element: <Login></Login>,
        errorElement: <h1>route not found</h1>,
      },
      {
        path: "register",
        element: <Register></Register>,
        errorElement: <h1>route not found</h1>,
      },
      {
        path: "allservices",
        element: <AllService></AllService>,
        errorElement: <h1>route not found</h1>,
        loader: () => fetch("http://localhost:5000/addservice"),
      },
      {
        path: "servicetodo",
        element: <PrivetRouts><ServiceLayout></ServiceLayout></PrivetRouts>,
        errorElement: <h1>route not found</h1>,
      },
      {
        path: "addService",
        element: (
          <PrivetRouts>
            <Addservices></Addservices>
          </PrivetRouts>
        ),

        errorElement: <h1>route not found</h1>,
      },
      {
        path: "manageservices",
        errorElement: <h1>route not found</h1>,
        element: <PrivetRouts><ManageService></ManageService></PrivetRouts>,
      },
      {
        path: "bookedservice",
        element: <PrivetRouts><Bookedservice></Bookedservice></PrivetRouts>,
        errorElement: <h1>route not found</h1>,
        
      },
      {
        path: "addservice/:id",
        element: (
          <PrivetRouts>
            <SignleServices></SignleServices>
          </PrivetRouts>
        ),
        errorElement: <h1>route not found</h1>,
        loader : ({params})=> fetch(`http://localhost:5000/addservice/${params.id}`)
      },
      {
        path: 'addservice2/:id',
        element : <PrivetRouts><Editservice></Editservice></PrivetRouts>,
        loader : ({params})=> fetch(`http://localhost:5000/addservice2/${params.id}`)
      }
    ],
  },
]);

export default Routs;
