import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Routs from "../routs/Routs.jsx";
import AuthPovider from "./AuthProvider.jsx/AuthPovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPovider>
    <RouterProvider router={Routs}></RouterProvider>
    </AuthPovider>
  </StrictMode>
);
