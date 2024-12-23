import { useContext } from "react";
import "./navber.css";
import { NavLink } from "react-router-dom";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";

const Nabver = () => {
  const { User, logout } = useContext(AuhtContext);
  const navber = (
    <>
      <NavLink className="nav-link" to={"/"}>
        <span className="relative z-20  ">Home</span>
      </NavLink>
      <NavLink className="nav-link " to={"/allservices"}>
        <span className="relative z-10  ">ALL Service</span>
      </NavLink>

      {User ? (
        <>
          {" "}
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className=" m-1">
              <div className="nav-link bottom-1">
                <NavLink to={"/dashbord"}>
                  <span className="relative z-10  ">Dashbord</span>
                </NavLink>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu gap-3 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavLink className="nav-link" to={"/addService"}>
                <span className="relative z-10  ">Add-A-Service</span>
              </NavLink>
              <NavLink className="nav-link" to={"/manageservices"}>
                <span className="relative z-10  ">Manage-Services</span>
              </NavLink>
              <NavLink className="nav-link" to={"/bookedservice"}>
                <span className="relative z-10  ">Booked Service</span>
              </NavLink>
              <NavLink className="nav-link" to={"/servicetodo"}>
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
        <div className="navbar-end gap-3">
          {User ? (
            <>
              <p>{User?.displayName ? User.displayName : User.email}</p>
              <button onClick={logout} className="nav-link">
                <span className="relative z-10  ">logout</span>
              </button>
            </>
          ) : (
            <NavLink className="nav-link " to={"/login"}>
              <span className="relative z-10  "> login</span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabver;
