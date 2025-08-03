import { useContext, useEffect } from "react";
import "./navber.css"; // keep if you have other styles or remove if not needed
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import logoDark from "./../../assets/logo2.png";
import logoLight from "./../../assets/logo5.png";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Nabver = () => {
  const { User, logout, day, togglebutton } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [day]);

  // Tailwind classes for nav links, clean & simple, with hover effects, adapting to theme
  const navLinkClass = day
    ? " border text-black  border-black rounded-md px-4 py-2 text-xs lg:text-base hover:text-blue-600 hover:shadow-lg hover:shadow-white transition duration-300"
    : " text-white border  border-white rounded-md px-4 py-2 text-xs lg:text-base hover:text-blue-600 hover:shadow-lg hover:shadow-black transition duration-300";

 
      const navLinkClass2 = day
    ? " border text-white  border-white rounded-md px-4 py-2 text-xs lg:text-base hover:text-blue-600 hover:shadow-lg hover:shadow-white transition duration-300"
    : "  text-black border   border-black   rounded-md px-4 py-2 text-xs lg:text-base hover:text-blue-600 hover:shadow-lg hover:shadow-black transition duration-300";

  // Button styles for login/logout buttons, consistent light/dark mode
  const buttonClass = day
    ? "px-4 py-1 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 border shadow-md bg-white text-black hover:bg-yellow-400 hover:text-black hover:shadow-white"
    : "px-4 py-1 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 border shadow-md bg-[#4A00FF] text-white hover:bg-yellow-400 hover:text-black hover:shadow-black";

  const navItems = (
    <>
      <NavLink className={navLinkClass2} to="/">
        HOME
      </NavLink>
      <NavLink className={navLinkClass2} to="/allservices">
        ALL SERVICE
      </NavLink>
      <NavLink className={navLinkClass2} to="/aboutus">
        ABOUT US
      </NavLink>

      {User && (
        <>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className={navLinkClass} style={{ cursor: "pointer" }}>
              DASHBOARD
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow-xl mt-2 z-[50] bg-base-100 rounded-box w-56"
            >
              <NavLink className={navLinkClass} to="/addService">
                Add A Service
              </NavLink>
              <NavLink className={navLinkClass} to="/manageservices">
                Manage Services
              </NavLink>
              <NavLink className={navLinkClass} to="/bookedservice">
                Booked Service
              </NavLink>
              <NavLink className={navLinkClass} to="/servicetodo">
                Service To Do
              </NavLink>
            </ul>
          </div>
          <NavLink className={navLinkClass} to="/faq">
            FAQ
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <header
      className={`sticky bg-white top-0 backdrop-blur-md z-50 shadow-sm transition-all duration-300 ${
        day ? "  bg-opacity-70" : " bg-opacity-70"
      }`}
    >
      <div className="navbar container mx-auto py-2 px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost text-xl">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content gap-3 mt-2 shadow bg-base-100 rounded-box w-52 z-50">
              {navItems}
            </ul>
          </div>
          
          <p className={`text-xl ${day ? "text-white" : "text-black" } `}>TrustyHands</p>
        </div>

        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 px-1" data-aos="fade-down">
            {navItems}
          </ul>
        </nav>

        <div className="navbar-end space-x-3">
          {User ? (
            <>
              <img
                className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-gray-300"
                src={User.photoURL}
                alt="User"
              />
              <span className="text-xs md:text-sm font-medium truncate max-w-[100px]">
                {User.displayName || User.email}
              </span>
              <button onClick={logout} className={buttonClass}>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={buttonClass}>
              Login
            </NavLink>
          )}

          {/* Theme Toggle */}
          <label className="z-50 swap swap-rotate cursor-pointer">
            <input type="checkbox" onChange={togglebutton} className="theme-controller" checked={day} />
            <svg className="swap-off h-6 w-6 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64 17l-.71.71a1 1 0 0 0 0 1.41..." />
            </svg>
            <svg className="swap-on h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14..." />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Nabver;
