import { useContext, useEffect } from "react";
import "./navber.css";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import logo1 from './../../assets/logo2.png'
import logo2 from './../../assets/logo5.png'
import AuthContext from "../../AuthProvider.jsx/AuhtContext";
import { img } from "framer-motion/client";

const Nabver = () => {
  const { User, logout,day, togglebutton} = useContext(AuthContext);

  useEffect(() => {
    Aos.init({
      duration: 2000, // Duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const navber = (
    <>
      <NavLink className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`}  to={"/"}>
        <span className="relative z-20  ">Home</span>
      </NavLink>
      <NavLink className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`} to={"/allservices"}>
        <span className="relative z-10  ">ALL Service</span>
      </NavLink>

      {User ? (
        <>
          {" "}
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className=" m-1">
              <div className={ `bottom-1 ${day ? "nav-link2 bg-black" : " nav-link bg-white"}`}>
                <button>
                  <span className="relative z-10  ">Dashbord</span>
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="  dropdown-content menu gap-3  rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavLink className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`} to={"/addService"}>
                <span className="relative z-10  ">Add-A-Service</span>
              </NavLink>
              <NavLink className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`}  to={"/manageservices"}>
                <span className="relative z-10  ">Manage-Services</span>
              </NavLink>
              <NavLink className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`} to={"/bookedservice"}>
                <span className="relative z-10  ">Booked Service</span>
              </NavLink>
              <NavLink className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`}  to={"/servicetodo"}>
                <span className="relative z-10  ">Service To Do</span>
              </NavLink>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}

      {/* <NavLink className="nav-link" to={"/singleservices"}>
        <span className="relative z-10  ">Single Services</span>
      </NavLink> */}
    </>
  );
  return (
    <div className={`relative z-10 ${day ? "bg-black" : "bg-white"}`}>
      <div className="navbar  lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              data-aos="fade-right"
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navber}
            </ul>
          </div>
          {day ? <img
            data-aos="fade-right"
            className="lg:h-20 w-20 lg:w-48"
            src={logo2}
            alt=""
          /> : <img
          data-aos="fade-right"
          className="lg:h-20 w-20 lg:w-48"
          src={logo1}
          alt=""
        />}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul data-aos="fade-up" className="menu gap-4 menu-horizontal px-1">
            {navber}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {User ? (
            <>
              
              <img className="lg:h-14 h-6 w-6 lg:w-14 rounded-full border-black border-2" src={User.photoURL} alt="" />
              <p className={`text-xs ${day ? "text-white" : "text-black"}`}>{User?.displayName ? User.displayName : User.email}</p>
              <button onClick={logout} className={` ${day ? "nav-link2 bg-black" : " nav-link bg-white"}`}>
                <span className="relative z-10  ">logout</span>
              </button>
            </>
          ) : (
            <NavLink data-aos="fade-left" className={`${day ? "nav-link2 bg-black" : " nav-link bg-white"}`} to={"/login"}>
              <span className="relative z-10  "> login</span>
            </NavLink>
          )}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onClick={togglebutton}
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off lg:h-10 h-5 w-5 lg:w-10 fill-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* moon icon */}
            <svg
              className="swap-on lg:h-10 h-5 w-5 lg:w-10 fill-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nabver;
