import React, { useContext } from "react";
import { ImPlay2 } from "react-icons/im";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const steps = [
  {
    step: 1,
    title: "Select the Service",
    description:
      "Pick the service you are looking for—from the website or the app.",
  },
  {
    step: 2,
    title: "Pick your Schedule",
    description:
      "Choose a convenient date and time. Select a provider based on their rating.",
  },
  {
    step: 3,
    title: "Place Your Order & Relax",
    description:
      "Review and place your order. Sit back while we assign the expert.",
  },
];

const Section2 = () => {
  const { day } = useContext(AuthContext);

  return (
    <section className={`py-14 ${day ? "bg-gray-900" : "bg-white"}`}>
      <div className="text-center mb-12 px-5">
        <p className={`text-lg md:text-xl ${day ? "text-gray-300" : "text-gray-600"}`}>
          --- How it works
        </p>
        <h2
          className={`text-2xl md:text-4xl font-bold mt-2 ${
            day ? "text-white" : "text-gray-800"
          }`}
        >
          Easiest way to get a service
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 items-center">
        {/* Left Image with Play Icon */}
        <div className="relative group">
          <img
            src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
            alt="How it works"
            className="w-full h-[400px] object-cover rounded-lg shadow-md border-2 border-gray-200 group-hover:border-teal-600 transition-all"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="bg-white bg-opacity-80 rounded-full p-4 hover:scale-110 transition-transform cursor-pointer shadow-lg">
              <ImPlay2 className="text-red-600 text-5xl" />
            </div>
            <p className="mt-4 text-sm md:text-lg font-medium text-gray-600 bg-white bg-opacity-70 px-3 py-1 rounded-md shadow">
              Watch How It Works
            </p>
          </div>
        </div>

        {/* Right Side Steps */}
        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-500 text-white text-xl md:text-2xl font-bold flex items-center justify-center shadow-md">
                {item.step}
              </div>
              <div>
                <h3
                  className={`text-lg md:text-2xl font-semibold ${
                    day ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-1 text-sm md:text-base ${
                    day ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
