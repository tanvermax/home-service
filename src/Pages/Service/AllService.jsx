import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsMic } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const ServiceCard = ({ card, day }) => {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <figure className="relative">
        <img className="h-64 w-full object-cover" src={card.imageUrl} alt={card.serviceName} />
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
          ${card.price}
        </div>
      </figure>
      <div className="card-body p-6">
        <h2 className={`text-xl font-bold ${day ? "text-white" : "text-gray-900"} mb-2`}>
          {card.serviceName}
        </h2>
        <p className={`text-sm ${day ? "text-gray-300" : "text-gray-600"} line-clamp-3 mb-4`}>
          {card.description} in{" "}
          <span className="badge bg-secondary text-white px-2 py-1 rounded-md text-xs font-semibold">
            {card.serviceArea}
          </span>
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full border-2 border-warning object-cover"
              src={card.providerphoto}
              alt={card.providername}
            />
            <span className={`text-sm font-medium ${day ? "text-gray-200" : "text-gray-700"}`}>
              {card.providername}
            </span>
          </div>
        </div>
        <Link to={`/addservice/${card._id}`}>
          <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

const AllService = () => {
  const { day } = useContext(AuthContext);
  const data = useLoaderData();
  const [loadeDAta, setData] = useState(data);
  const [search, setSearch] = useState("");

  return (
    <div className="w-11/12 mx-auto max-w-7xl py-8">
      <Helmet>
        <title>All Services - Service Sharing</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <h1
          className={`text-2xl lg:text-3xl font-bold ${day ? "text-white" : "text-gray-900"
            } mb-4 lg:mb-0`}
        >
          All Services
        </h1>

        <div className="relative flex items-center w-full lg:w-auto">
          <CiSearch className="absolute left-3 text-xl text-gray-500" />
          <input
            placeholder="Search services..."
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full lg:w-80 pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${day ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"
              }`}
            type="search"
          />
          <BsMic className="absolute right-3 text-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...loadeDAta]
          .sort((a, b) => a.price - b.price)
          .filter((card) =>
            search === ""
              ? true
              : card.serviceName.toLowerCase().includes(search.toLowerCase())
          )
          .map((card) => (
            <ServiceCard key={card._id} card={card} day={day} />
          ))}
      </div>
    </div>
  );
};

export default AllService;