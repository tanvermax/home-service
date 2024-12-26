import { Outlet } from "react-router-dom";
import Nabver from "../Component/Navber/Nabver";
import Home from "../Pages/Home/Home";
import Fotter from "../Component/Fotter/Fotter";
import { useContext } from "react";
import AuthContext from "../AuthProvider.jsx/AuhtContext";

const Mainlayout = () => {
  const {day} =useContext(AuthContext);
  return (
    <div className={`${day ? "bg-black": "bg-white"}`}>
   
     <Nabver></Nabver>
 
      <div className=" min-h-[calc(100vh-300px)] ">
      <Outlet></Outlet>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Mainlayout;
