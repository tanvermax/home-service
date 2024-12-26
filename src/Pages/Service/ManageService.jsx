import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";
import axios from "axios";

const ManageService = () => {
  const { User, day } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://serverside-bay.vercel.app/addservice23?email=${User.email}`, {
        withCredentials: "include",
      })
      .then((res) => setData(res.data));
  }, [User.email]);

  const handleDelet = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://serverside-bay.vercel.app/addservice/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setData((prevData) =>
                prevData.filter((item) => item._id !== _id)
              );
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div
      className={`min-h-screen w-full py-10 px-4 ${
        day ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Helmet>
        <title>Manage Service</title>
      </Helmet>

      <h1 className="text-2xl font-bold text-center mb-10">
        Manage Your Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length === 0 ? (
          <div
            className={`col-span-1 sm:col-span-2 lg:col-span-3 text-center py-10 ${
              day ? "text-white" : "text-gray-600"
            }`}
          >
            <h2 className="text-lg font-semibold">No services found!</h2>
            <p className="text-base">
              You haven't added any services yet.
              <br />
              <Link to="/addService" className="text-blue-500 underline">
                Add a service
              </Link>{" "}
              to get started.
            </p>
          </div>
        ) : (
          data.map((loadData) => (
            <div
              key={loadData._id}
              className={`shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 ${
                day ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <figure>
                <img
                  className="h-56 w-full object-cover"
                  src={loadData.imageUrl}
                  alt={loadData.serviceName}
                />
              </figure>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {loadData.serviceName}
                </h2>
                <p className="text-sm mb-2">
                  {loadData.description}
                  <br />
                  <span className="badge badge-secondary">
                    {loadData.serviceArea}
                  </span>
                </p>
                <p className="text-lg font-bold mb-2">${loadData.price}</p>
                <div className="flex items-center justify-between">
                  <span className="badge badge-outline">
                    {loadData.providername}
                  </span>
                  <img
                    className="h-12 w-12 rounded-full border"
                    src={loadData.providerphoto}
                    alt={loadData.providername}
                  />
                </div>
              </div>
              <div
                className={`flex justify-between p-4 ${
                  day ? "bg-gray-900" : "bg-gray-200"
                }`}
              >
                <Link
                  to={`/addservice2/${loadData._id}`}
                  className="text-sm font-semibold hover:text-blue-500"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelet(loadData._id)}
                  className="text-sm font-semibold hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageService;
