import React, { useContext, useEffect } from "react";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { MdOutlineWash, MdOutlineSupportAgent } from "react-icons/md";
import { GiGloves } from "react-icons/gi";
import 'aos/dist/aos.css';
import Aos from "aos";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Section1 = () => {
  const { day } = useContext(AuthContext);
  
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);
  
  return (
    <div className="py-10 px-5">
      <p className={`lg:text-2xl lg:text-center py-5 ${day ? "text-white" : "text-black"}`}>___Why Choose Us</p>
      <h1 className={`lg:text-3xl font-semibold px-5 lg:text-center ${day ? "text-white" : "text-black"}`}>
        Because we care about your safety..
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 w-11/12 mx-auto gap-10">
        <div data-aos="fade-right" className="flex items-center gap-4">
          <span className="text-7xl text-teal-500 ml-2">
            <RiSurgicalMaskLine />
          </span>
          <p className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Ensuring <br /> Masks</p>
        </div>
        <div data-aos="fade-left" className="flex items-center gap-4">
          <span className="text-7xl text-teal-500 ml-2">
            <MdOutlineSupportAgent />
          </span>
          <p className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>24/7 <br /> Support</p>
        </div>
        <div data-aos="fade-right" className="flex items-center gap-4">
          <span className="text-7xl text-teal-500 ml-2">
            <MdOutlineWash />
          </span>
          <p className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Sanitising Hands & Equipment</p>
        </div>
        <div data-aos="fade-left" className="flex items-center gap-4">
          <span className="text-7xl text-teal-500 ml-2">
            <GiGloves />
          </span>
          <p className={`lg:text-2xl font-semibold ${day ? "text-white" : "text-black"}`}>Ensuring Gloves</p>
        </div>
      </div>

      <div className="text-center lg:mb-10" data-aos="fade-left">
        <img
          className="mx-auto h-[300px] md:h-[400px] lg:p-10 object-cover"
          src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
          alt="Construction"
        />
      </div>

      <div className="p-5"> 
        <div className="stats shadow flex flex-col md:grid  grid-cols-3  md:grid-cols-3 ">
          <div className="stat text-center">
            <div className="stat-figure text-primary hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="lg:text-2xl md:text-[12px] text-[8px]">Total Installations</div>
            <div className="stat-value lg:text-4xl lg:py-2 text-[16px] text-primary">25.6K</div>
            <div className="stat-desc lg:text-2xl md:text-[12px] text-[8px]">21% more than last month</div>
          </div>

          <div className="stat text-center">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className=" h-8 w-8 stroke-current hidden lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className=" lg:text-2xl md:text-[12px] text-[8px]">Website Views</div>
            <div className="stat-value lg:text-4xl  lg:py-2 text-[16px] text-secondary">2.6M</div>
            <div className="stat-desc lg:text-2xl md:text-[12px] text-[8px]">21% more than last month</div>
          </div>

          <div className="stat text-center">
            <div className="stat-value lg:text-2xl md:text-[12px] text-[8px]">86%</div>
            <div className="stat-value lg:text-3xl lg:py-2 text-[8px] overflow-hidden">Orders Done on Delivery Day</div>
            <div className="stat-desc lg:text-2xl md:text-[12px] text-[8px] text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
