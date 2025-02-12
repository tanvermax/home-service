import React, { useContext } from "react";
import { ImPlay2 } from "react-icons/im";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Section2 = () => {
  const { day } = useContext(AuthContext);
  
  return (
    <div className="py-10">
      <p className={`lg:text-xl lg:text-center ml-2 ${day ? "text-white" : "text-gray-500"}`}>---How it works</p>
      
      <h1 className={`lg:text-3xl font-semibold lg:text-center ml-2 mb-6 ${day ? "text-white" : "text-gray-500"}`}>
        Easiest way to get a service
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto py-5 gap-8">
        <div className="relative">
          <span className="hover:text-green-900 absolute lg:top-1/2 top-36 left-1/2 transform -translate-x-1/2 text-5xl text-red-700">
            <ImPlay2 />
          </span>
          <img
            className="border-2 w-full  h-[400px] object-cover hover:border-teal-800"
            src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
            alt="How it works"
          />
        </div>

        <div className="my-auto space-y-8">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-20 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              1
            </div>
            <div className="ml-4">
              <h3 className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Select the Service</h3>
              <p className={`lg:text-lg text-[10px] ${day ? "text-white" : "text-gray-500"}`}>
                Pick the service you are looking for—from the website or the app.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-28 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              2
            </div>
            <div className="ml-4">
              <h3 className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Pick your schedule</h3>
              <p className={`lg:text-lg text-[10px] ${day ? "text-white" : "text-gray-500"}`}>
                Choose a convenient date and time for your service. Select a provider based on their rating.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-32 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              3
            </div>
            <div className="ml-4">
              <h3 className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Place Your Order & Relax</h3>
              <p className={`lg:text-lg text-[10px] ${day ? "text-white" : "text-gray-500"}`}>
                Review and place your order. Sit back and relax while we assign the expert service provider to your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
