import React, { useEffect, useState } from "react";
import "./sevice.css";
import { Link } from "react-router-dom";
const PopularService = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addservice?limit=6")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="py-10">
     
      <div className="grid grid-cols-3 gap-10">
        {data.map((card) => (
          <div key={card._id} className="card   shadow-xl">
            <figure>
              <img className="h-96 w-full" src={card.imageUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">
                    {card.serviceName}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="h-14 text-gray-600 overflow-hidden">
                    {card.description}
                  </p>
                </div>
                <div>
                  <p>{card.price}$</p>
                </div>
              </div>
              <div className="card-actions justify-between items-center">
                <div className=" text-xl">Service provider : {card.providername}</div>
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

export default PopularService;
