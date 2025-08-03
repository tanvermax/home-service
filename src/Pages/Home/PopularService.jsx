import React, { useContext, useEffect, useState } from "react";
import "./sevice.css";
import Aos from "aos";
import "aos/dist/aos.css";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";
import ServiceCard from "../../Component/ServiceCard/ServiceCard";

const PopularService = () => {
  const { day } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://serverside-bay.vercel.app/addservice?limit=6")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className={`lg:py-10 p-5 ${day ? "bg-black" : "bg-white"}`}>
      <div className="w-11/12 mx-auto text-center mb-10">
        <h2
          className={`lg:text-3xl md:text-4xl font-bold ${day ? "text-white" : "text-black"
            }`}
          data-aos="fade-down"
        >
          Popular Services
        </h2>
        <p
          className={`text-xs md:text-lg lg:mt-3 ${day ? "text-gray-400" : "text-gray-600"
            }`}
          data-aos="fade-down"
        >
          Explore our most sought-after services designed to cater to your
          specific needs.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
      >
        {data.map((card) => (
          <ServiceCard key={card._id} card={card} day={day} />
        ))}
      </div>
    </div>
  );
};

export default PopularService;
