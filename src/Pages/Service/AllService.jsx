import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllService = () => {
  const data = useLoaderData();
  const [loadeDAta, setData]= useState(data);

  const [search, setSearch] = useState("");

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
      <title>ALL service - Service Sharing</title>
      </Helmet>
      <h1 className="py-4 text-2xl ml-5 font-medium">ALL SERVICES Here What You Need</h1>

      <input placeholder="search your service" onChange={(e)=>setSearch(e.target.value)} className="border-2 border-black" type="search" name="" id="" />
      <div className="grid grid-cols-3 gap-14 py-9">
        
        {loadeDAta.filter(card=>{return search === "" ? true : card.serviceName.toLowerCase().includes(search.toLowerCase());

         }).map((card) => (
          <div key={card._id} className="card   shadow-xl">
            <figure>
              <img className="h-72 w-full" src={card.imageUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">{card.serviceName}</h2>
                  <p className="h-14 text-gray-600 overflow-hidden">
                    {card.description} in{" "}
                    <span className="badge badge-secondary font-semibold">
                      {card.serviceArea}
                    </span>
                  </p>
                </div>
                <div>
                  <p>{card.price}$</p>
                </div>
              </div>
              <div className="card-actions  items-center   justify-between">
                <div className="navlink ">prov :  <span className="relative z-10 hover:mr-10 hover:font-bold ">{card.providername}</span></div>
                <div className=" border-warning rounded-full border-2">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={card.providerphoto}
                    alt=""
                  />
                </div>
              </div>
              <Link to={`/addservice/${card._id}`}>
                <button className="navlink">
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
