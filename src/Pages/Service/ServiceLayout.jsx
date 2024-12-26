import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const ServiceLayout = () => {
  const { User, day } = useContext(AuthContext); // Assuming `day` is part of AuthContext

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://serverside-bay.vercel.app/order?email2=${User.email}`, {
        headers: {
          Authorization: `Barer ${localStorage.getItem("token")}`,
        },
        withCredentials: "include",
      })
      .then((res) => setData(res.data));
  }, [User.email]);

  const handleStatusChange = (e, id) => {
    e.preventDefault();

    const form = e.target;
    const serviceStatus = form.serviceStatus.value;

    fetch(`https://serverside-bay.vercel.app/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ serviceStatus }),
    })
      .then((res) => res.json())
      .then((updatedService) => {
        setData((prevData) =>
          prevData.map((service) =>
            service._id === id
              ? { ...service, serviceStatus: updatedService.serviceStatus }
              : service
          )
        );
      })
      .catch((err) => console.error("Error updating status:", err));
  };

  return (
    <div
      className={`w-11/12 mx-auto ${
        day ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Helmet>
        <title>To Do Service</title>
      </Helmet>
      <h1
        className={`text-2xl font-semibold py-4 ${
          day ? "text-white" : "text-gray-800"
        }`}
      >
        You have total {data.length} orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {data.map((card) => (
          <div
            key={card._id}
            className={`border-[1px] ${
              day ? "border-teal-400" : "border-teal-600"
            } p-4 rounded-xl`}
          >
            <form
              onSubmit={(e) => {
                handleStatusChange(e, card._id);
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service ID</span>
                </label>
                <input
                  type="text"
                  className={`input ${
                    day ? "bg-gray-700 text-gray-800" : "bg-gray-100 text-gray-800"
                  }`}
                  name="orderid"
                  defaultValue={card._id}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  className={`input ${
                    day ? "bg-gray-700 text-gray-800" : "bg-gray-100 text-gray-800"
                  }`}
                  defaultValue={card.servicename}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Order Given By</span>
                </label>
                <input
                  type="text"
                  name="ordergivenuseremail"
                  className={`input ${
                    day ? "bg-gray-700 text-gray-800" : "bg-gray-100 text-gray-800"
                  }`}
                  defaultValue={card.ordergivenuseremail}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Status</span>
                </label>
                <select
                  className={`p-2 ${
                    day ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                  }`}
                  name="serviceStatus"
                  defaultValue={card.serviceStatus}
                >
                  <option value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
              <div className="py-4">
                <input
                  type="submit"
                  className={`border-[1px] p-3 rounded-md ${
                    day
                      ? "bg-teal-400 text-black hover:bg-teal-500"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
                  value="Update Status"
                />
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLayout;
