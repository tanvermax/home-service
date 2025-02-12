import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../src/MainLayout.jsx/Mainlayout";
import Login from "../src/Pages/Auth/Login";
import Register from "../src/Pages/Auth/Register";
import Home from "../src/Pages/Home/Home";
import Aboutus from "../src/Pages/Home/Aboutus";
import AllService from "../src/Pages/Service/AllService";
import ServiceLayout from "../src/Pages/Service/ServiceLayout";
import Addservices from "../src/Pages/Service/Addservices";
import ManageService from "../src/Pages/Service/ManageService";
import Bookedservice from "../src/Pages/Service/Bookedservice";
import PrivetRouts from "../src/Privetrouts/PrivetRouts";
import SignleServices from "../src/Pages/Service/SignleServices";
import Editservice from "../src/Pages/Service/Editservice";
import Errorpage from "../src/Pages/Errorpage";

const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "login",
        element: <Login></Login>,
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "aboutus",
        element: <Aboutus></Aboutus>,
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "register",
        element: <Register></Register>,
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "allservices",
        element: <AllService></AllService>,
        errorElement: <Errorpage></Errorpage>,

        loader: () => fetch("https://serverside-bay.vercel.app/addservice"),
      },
      {
        path: "servicetodo",
        element: (
          <PrivetRouts>
            <ServiceLayout></ServiceLayout>
          </PrivetRouts>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "addService",
        element: (
          <PrivetRouts>
            <Addservices></Addservices>
          </PrivetRouts>
        ),

        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "manageservices",
        errorElement: <h1>route not found</h1>,
        element: (
          <PrivetRouts>
            <ManageService></ManageService>
          </PrivetRouts>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "bookedservice",
        element: (
          <PrivetRouts>
            <Bookedservice></Bookedservice>
          </PrivetRouts>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "addservice/:id",
        element: (
          <PrivetRouts>
            <SignleServices></SignleServices>
          </PrivetRouts>
        ),
        errorElement: <Errorpage></Errorpage>,

        loader: ({ params }) =>
          fetch(`https://serverside-bay.vercel.app/addservice/${params.id}`),
      },
      {
        path: "addservice2/:id",
        element: (
          <PrivetRouts>
            <Editservice></Editservice>
          </PrivetRouts>
        ),
        loader: ({ params }) =>
          fetch(`https://serverside-bay.vercel.app/addservice2/${params.id}`),
        errorElement: <Errorpage></Errorpage>,
      },
    ],
  },
]);

export default Routs;
