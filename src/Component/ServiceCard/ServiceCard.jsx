// components/ServiceCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ card, day }) => {
  return (
    <div
      className={`shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 ${
        day ? "bg-gray-800" : "bg-white"
      }`}
      data-aos="fade-up"
    >
      <figure>
        <img
          className="md:h-64 h-32 w-full object-cover"
          src={card.imageUrl}
          alt="Service"
        />
      </figure>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2
              className={`card-title text-[10px] lg:text-xl font-semibold ${
                day ? "text-white" : "text-black"
              }`}
            >
              {card.serviceName}
              <div className="badge badge-secondary lg:text-base text-xs ml-2">
                NEW
              </div>
            </h2>
            <p
              className={`h-16 lg:text-sm text-xs overflow-hidden mt-2 ${
                day ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {card.description}
            </p>
          </div>
          <p
            className={`font-bold lg:text-lg text-sm ${
              day ? "text-white" : "text-black"
            }`}
          >
            ${card.price}
          </p>
        </div>

        <div className="card-actions flex justify-between items-center mt-4">
          <div
            className={`lg:text-sm text-xs font-semibold ${
              day ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Provider: {card.providername}
          </div>
          <img
            className="lg:h-14 h-10 w-10 lg:w-14 rounded-full border-2 border-warning"
            src={card.providerphoto}
            alt="Provider"
          />
        </div>

        <Link to={`/addservice/${card._id}`}>
          <button
            className={`lg:mt-5 mt-3 py-2 px-4 font-medium md:text-sm text-xs rounded-md w-full ${
              day ? "navlink2 text-white" : "navlink text-white"
            }`}
          >
            <span className="relative z-10">View Detail</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
