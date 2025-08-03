import React, { useContext, useEffect } from "react";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { MdOutlineWash, MdOutlineSupportAgent } from "react-icons/md";
import { GiGloves } from "react-icons/gi";
import 'aos/dist/aos.css';
import Aos from "aos";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const features = [
  {
    icon: <RiSurgicalMaskLine />,
    title: "Ensuring Masks",
  },
  {
    icon: <MdOutlineSupportAgent />,
    title: "24/7 Support",
  },
  {
    icon: <MdOutlineWash />,
    title: "Sanitising Hands & Equipment",
  },
  {
    icon: <GiGloves />,
    title: "Ensuring Gloves",
  },
];

const Section1 = () => {
  const { day } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className={`py-10 px-5 ${day ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="text-center mb-10">
        <p className={`text-xl md:text-2xl font-medium ${day ? "text-white" : "text-black"}`}>
          ___Why Choose Us
        </p>
        <h1 className={`text-2xl md:text-4xl font-bold mt-3 ${day ? "text-white" : "text-gray-800"}`}>
          Because we care about your safety.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`flex items-center gap-4 p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 ${
              day ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <span className="text-5xl text-teal-500">{item.icon}</span>
            <p className="text-lg md:text-xl font-semibold">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="text-center my-12" data-aos="fade-left">
        <img
          className="mx-auto h-[300px] md:h-[400px] object-contain"
          src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
          alt="Construction"
        />
      </div>

      <div className="w-11/12 mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div
            className={`rounded-lg p-6 shadow-md ${
              day ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            data-aos="fade-up"
          >
            <div className="text-primary hidden lg:block mb-2">
              <svg className="inline h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Total Installations</h3>
            <p className="text-3xl font-bold text-primary mb-2">25.6K</p>
            <p className="text-sm">21% more than last month</p>
          </div>

          <div
            className={`rounded-lg p-6 shadow-md ${
              day ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            data-aos="fade-up"
          >
            <div className="text-secondary hidden lg:block mb-2">
              <svg className="inline h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Website Views</h3>
            <p className="text-3xl font-bold text-secondary mb-2">2.6M</p>
            <p className="text-sm">21% more than last month</p>
          </div>

          <div
            className={`rounded-lg p-6 shadow-md ${
              day ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-1">Orders Done on Delivery Day</h3>
            <p className="text-3xl font-bold mb-2">86%</p>
            <p className="text-sm text-secondary">31 tasks remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
