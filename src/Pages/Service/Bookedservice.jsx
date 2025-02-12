import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";
import axios from "axios";

const Bookedservice = () => {
  const { User, day } = useContext(AuthContext); // Adding day context for day/night mode
  const [data, setData] = useState([]);
  (User.email);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/order?email=${User.email}`, {
        withCredentials: true,
      })
      .then((res) => setData(res.data));
  }, [User.email, setData]);

  return (
    <div
      className={`${
        day ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen`}
    >
      <Helmet>
        <title>Booked Service</title>
      </Helmet>
      <h1 className="lg:text-xl w-11/12 lg:w-9/12 mx-auto py-4 font-semibold text-center">
        Here are all your {data.length} booked services
      </h1>
      <div className="w-11/12 lg:w-10/12 mx-auto py-7">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-separate border-spacing-0 shadow-md rounded-lg text-sm md:text-base">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Order/Location</th>
                <th className="px-4 py-2 text-left hidden md:table-cell">
                  Order Status
                </th>
                <th className="px-4 py-2 text-left hidden md:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-gray-600 py-6">
                    <h2 className="text-base font-semibold">
                      No bookings found!
                    </h2>
                    <p className="text-sm">
                      You haven't booked any services yet.
                    </p>
                    <p>
                      <a href="/services" className="text-blue-500 underline">
                        Browse services
                      </a>{" "}
                      to make your first booking.
                    </p>
                  </td>
                </tr>
              ) : (
                data.map((card) => (
                  <tr
                    key={card._id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    <td className="px-2 py-2 flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-10 w-10">
                          <img src={User.photoURL} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-xs md:text-sm">
                          {card.ordergivenusername}
                        </div>
                        <div className="text-xs opacity-70">{User.email}</div>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-xs md:text-sm">
                      {card.instruction}
                      <br />
                      <span className="badge badge-ghost badge-xs md:badge-sm">
                        {card.servicename}
                      </span>
                    </td>
                    <td
                      className={`px-2 py-2 ${
                        card.serviceStatus === "pending"
                          ? "text-yellow-500"
                          : card.serviceStatus === "complete"
                          ? "text-green-500"
                          : card.serviceStatus === "working"
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {card.serviceStatus}
                    </td>
                    <td className="px-2 py-2">
                      <button className="btn btn-ghost btn-xs text-blue-500 hover:text-blue-700 transition-all duration-200">
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {/* Table Footer */}
            <tfoot>
              <tr className="bg-gray-800 text-white hidden md:table-row">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Job</th>
                <th className="px-4 py-2">Order Status</th>
                <th className="px-4 py-2"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookedservice;
