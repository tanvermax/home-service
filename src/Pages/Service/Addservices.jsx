import React, { useContext } from "react";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";
import "./addservic.css";
import { useNavigate } from "react-router-dom";


const Addservices = () => {
  const { User } = useContext(AuhtContext);
  console.log("Logged in User:", User);
  const navigate = useNavigate();
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const provideremail = User.email;
    const providerphoto = User.photoURL;
    const providername = User.displayName;

    const newService = {
      imageUrl,
      serviceName,
      price,
      serviceArea,
      description,
      provideremail,
      providerphoto,
      providername,
    };

    console.log("New Service:", newService);

    // Example: Sending data to the backend
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/allservices");
          alert("Service added successfully!");
          form.reset();
          
        }
      })
      .catch((err) => console.error("Error adding service:", err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add Service
        </h2>
        <form onSubmit={handleAddService} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              className="input border-[1px] border-black rounded-none w-full"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Name
            </label>
            <input
              type="text"
              name="serviceName"
              className="input border-[1px] border-black rounded-none w-full"
              placeholder="Enter service name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="input border-[1px] border-black rounded-none w-full"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Area
            </label>
            <input
              type="text"
              name="serviceArea"
              className="input border-[1px] border-black rounded-none w-full"
              placeholder="Enter service area"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              className="input border-[1px] border-black rounded-none w-full"
              placeholder="Enter service description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="nav_link    ">
              <span className="relative z-10  "> Add Service</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservices;
