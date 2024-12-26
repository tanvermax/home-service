import React, { useContext } from "react";
import { ImPlay2 } from "react-icons/im";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Section2 = () => {
  const {day}= useContext(AuthContext)
  return (
    <div>
      <p className={`text-xl ${day ? "text-white" : "text-gray-500"}`}>---How it works</p>

      <h1 className={`text-3xl font-semibold ${day ? "text-white" : "text-gray-500"}`}>Easiest way to get a service</h1>

      <div className="grid grid-cols-2 w-9/12 mx-auto py-5">
        <div className="mx-auto">
          <span className="hover:text-green-900  relative drop-shadow-2xl text-5xl text-red-700 top-[200px] left-40">
            <ImPlay2 />
          </span>
          <img
            className="border-2 h-[400px] hover:border-teal-800"
            src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
            alt=""
          />
        </div>
        <div className=" my-auto space-y-8">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-20 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              1
            </div>
            <div className="ml-4">
              <h3 className={`text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Select the Service</h3>
              <p className={` ${day ? "text-white" : "text-gray-500"}`}>
                Pick the service you are looking for—from the website or the
                app.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-28 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              2
            </div>
            <div className="ml-4">
              <h3 className={`text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Pick your schedule</h3>
              <p className={` ${day ? "text-white" : "text-gray-500"}`}>
                Pick your convenient date and time to avail the service. Pick
                the service provider based on their rating.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-32 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              3
            </div>
            <div className="ml-4">
              <h3 className={`text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Place Your Order & Relax</h3>
              <p className={` ${day ? "text-white" : "text-gray-500"}`}>
                Review and place the order. Now just sit back and relax. We’ll
                assign the expert service provider’s schedule for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
