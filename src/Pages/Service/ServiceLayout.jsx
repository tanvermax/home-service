import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const ServiceLayout = () => {
  const { User } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/order?email2=${User.email}`, {
        withCredentials: "include",
      })
      .then((res) => setData(res.data));

    // fetch(`http://localhost:5000/order?email2=${User.email}`)
    //   .then((res) => res.json())
    //   .then((card) => setData(card));
  }, [User.email]);

  const handleStatusChange = (e, id) => {
    e.preventDefault();

    const form = e.target;
    const serviceStatus = form.serviceStatus.value;

    console.log(`Updating service ID: ${id} with status: ${serviceStatus}`);

    fetch(`http://localhost:5000/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ serviceStatus }),
    })
      .then((res) => res.json())
      .then((updatedService) => {
        console.log("Updated service:", updatedService);

        // Update the state with the new service status
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
    <div className="w-9/12 mx-auto">
      <Helmet>
        <title>To Do service</title>
      </Helmet>
      <h1>You have total {data.length} order</h1>
      <div className="grid grid-cols-3 gap-5 p-4">
        {data.map((card) => (
          <div key={card._id} className="border-[1px] border-teal-600 p-1">
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
                  className="input"
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
                  className="input"
                  defaultValue={card.servicename}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Order given by</span>
                </label>
                <input
                  type="text"
                  name="ordergivenuseremail"
                  className="input"
                  defaultValue={card.ordergivenuseremail}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label border-2 p-5">
                  <span className="label-text">Service Status</span>
                </label>
                <select className="p-5" name="serviceStatus" defaultValue={card.serviceStatus}>
                  <option className="p-5" value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
              <div className="py-5">
              <input type="submit" className="border-[1px]  p-3 border-black hover:bg-black hover:text-white" value="Update Status" />

              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLayout;
