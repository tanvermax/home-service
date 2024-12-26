import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsMic } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const AllService = () => {
  const { day } = useContext(AuthContext);
  const data = useLoaderData();
  const [loadeDAta, setData] = useState(data);

  const [search, setSearch] = useState("");

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>ALL service - Service Sharing</title>
      </Helmet>

      <div className="lg:flex items-center  justify-between">
        <h1
          className={`lg:py-4 lg:text-2xl text-sm ml-5 font-medium ${
            day ? "text-white" : "text-black"
          }`}
        >
          ALL SERVICES Here What You Need
        </h1>

        <div className="flex items-center py-5">
          <span className="lg:text-2xl lg:mr-3 ">
            {" "}
            <CiSearch />
          </span>
          <input
            placeholder="search your service"
            onChange={(e) => setSearch(e.target.value)}
            className="border-[1px] lg:p-2 p-1 border-black w-56"
            type="search"
            name=""
            id=""
          />
          <span className="relative p-1 right-8 text-blue-500 border-l-2 border-gray-400 ">
            {" "}
            <BsMic />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-9">
        {loadeDAta
          .filter((card) => {
            return search === ""
              ? true
              : card.serviceName.toLowerCase().includes(search.toLowerCase());
          })
          .map((card) => (
            <div key={card._id} className="card   shadow-xl">
              <figure>
                <img className="h-72 w-full" src={card.imageUrl} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <div>
                    <h2
                      className={`card-title lg:text-xl text-xs ${
                        day ? "text-white" : "text-black"
                      }`}
                    >
                      {card.serviceName}
                    </h2>
                    <p
                      className={`h-14 lg:text-xs text-[8px] overflow-y-scroll py-2 ${
                        day ? "text-white" : "text-gray-600"
                      } `}
                    >
                      {card.description} in{" "}
                      <span className="badge badge-secondary lg:text-base text-[8px] font-semibold">
                        {card.serviceArea}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className={`  ${day ? "text-white" : "text-black"}`}>
                      {card.price}$
                    </p>
                  </div>
                </div>
                <div className="card-actions  items-center   justify-between">
                  <div className={`${day ? "nav_link2" : "nav_link"}`}>
                    prov :{" "}
                    <span className="relative z-10 hover:mr-10 hover:font-bold ">
                      {card.providername}
                    </span>
                  </div>
                  <div className=" border-warning rounded-full border-2">
                    <img
                      className="lg:h-14 h-8 lg:w-14 w-8 rounded-full"
                      src={card.providerphoto}
                      alt=""
                    />
                  </div>
                </div>
                <Link to={`/addservice/${card._id}`}>
                  <button className={`${day ? "nav_link2" : "nav_link"}`}>
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

export default AllService;
