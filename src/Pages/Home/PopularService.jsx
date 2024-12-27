import React, { useContext, useEffect, useState } from "react";
import "./sevice.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const PopularService = () => {
  const { day } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://serverside-bay.vercel.app/addservice?limit=6")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  console.log(data);

  return (
    <div className={`lg:py-10 p-5 ${day ? "bg-black" : "bg-white"}`}>
      <div className="w-11/12 mx-auto text-center mb-10">
        <h2
          className={`lg:text-3xl md:text-4xl font-bold ${
            day ? "text-white" : "text-black"
          }`}
          data-aos="fade-down"
        >
          Popular Services
        </h2>
        <p
          className={`text-xs md:text-lg lg:mt-3 ${
            day ? "text-gray-400" : "text-gray-600"
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
          <div
            key={card._id}
            className={`shadow-xl rounded-lg overflow-hidden ${
              day ? "bg-gray-800" : "bg-white"
            }`}
            data-aos="fade-up"
          >
            <figure>
              <img
                className="h-64 w-full object-cover"
                src={card.imageUrl}
                alt="Service"
              />
            </figure>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h2
                    className={`card-title text-base lg:text-xl font-semibold ${
                      day ? "text-white" : "text-black"
                    }`}
                  >
                    {card.serviceName}
                    <div className="badge badge-secondary lg:text-base text-xs ml-2">NEW</div>
                  </h2>
                  <p
                    className={`h-16 lg:text-sm text-xs overflow-hidden mt-2 ${
                      day ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
                <div>
                  <p
                    className={`font-bold lg:text-lg text-sm ${
                      day ? "text-white" : "text-black"
                    }`}
                  >
                    ${card.price}
                  </p>
                </div>
              </div>
              <div className="card-actions mt-5 flex justify-between items-center">
                <div
                  className={`text-sm ${
                    day ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Provider: {card.providername}
                </div>
                <div className="border-warning rounded-full border-2">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={card.providerphoto}
                    alt=""
                  />
                </div>
              </div>
              <Link to={`/addservice/${card._id}`}>
                <button
                  className={`lg:mt-5 mt-2 w-full py-2 font-medium ${
                    day ? "navlink2  text-white" : "navlink text-white"
                  } `}
                >
                  <span className="relative z-10">View Detail</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularService;
