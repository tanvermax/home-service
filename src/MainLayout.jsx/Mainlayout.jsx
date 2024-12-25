import { Outlet } from "react-router-dom";
import Nabver from "../Component/Navber/Nabver";
import Home from "../Pages/Home/Home";
import Fotter from "../Component/Fotter/Fotter";

const Mainlayout = () => {
  return (
    <div>
     <div className="z-50">
     <Nabver></Nabver>
     </div>
      <div className=" min-h-[calc(100vh-300px)] ">
      <Outlet></Outlet>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Mainlayout;
