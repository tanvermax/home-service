import React from "react";
import { NavLink } from "react-router-dom";

const Nabver = () => {
  const navber = (
    <>
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/allservices"}>ALl Services</NavLink>
      <NavLink to={"/singleservices"}>Single Services</NavLink>
      <NavLink to={"/addService"}>Add-A-Service</NavLink>
      <NavLink to={"/manageservices"}>Manage-Services</NavLink>
      <NavLink to={"/bookedservice"}>Booked Service</NavLink>
      <NavLink to={"/servicetodo"}>Service To Do</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navber}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FixitNest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 menu-horizontal px-1">{navber}</ul>
        </div>
        <div className="navbar-end">
          <NavLink className="btn" to={"/login"}>
            login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nabver;
