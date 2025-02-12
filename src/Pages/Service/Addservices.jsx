import React, { useContext, useState } from "react";
import "./addservic.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Addservices = () => {
  const { User, day } = useContext(AuthContext);
  const navigate = useNavigate();

  const maxChar = 100;
  const [description, setDescription] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
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

    fetch("https://serverside-bay.vercel.app/addservice", {
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
          setDescription("");
          setCharCount(0);
        }
      })
      .catch((err) => console.error("Error adding service:", err));
  };

  const handleDescriptionChange = (e) => {
    const inputText = e.target.value;

    if (inputText.length > maxChar) {
      setErrorMessage(`Maximum ${maxChar} characters allowed.`);
    } else {
      setDescription(inputText);
      setCharCount(inputText.length);
      setErrorMessage("");
    }
  };

  return (
    <div
      className={`flex p-5 items-center justify-center min-h-screen ${
        day ? "bg-black" : "bg-white"
      }`}
    >
      <Helmet>
        <title>ADD Service Sharing</title>
      </Helmet>
      <div
        className={`w-full max-w-lg p-8 rounded-lg shadow-lg ${
          day ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h2 className={`text-2xl font-bold text-center mb-6`}>Add Service</h2>
        <form onSubmit={handleAddService} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              className={`input border-[1px] rounded-none w-full ${
                day
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-black bg-white text-gray-800"
              }`}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Service Name</label>
            <input
              type="text"
              name="serviceName"
              className={`input border-[1px] rounded-none w-full ${
                day
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-black bg-white text-gray-800"
              }`}
              placeholder="Enter service name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              className={`input border-[1px] rounded-none w-full ${
                day
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-black bg-white text-gray-800"
              }`}
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Service Area</label>
            <input
              type="text"
              name="serviceArea"
              className={`input border-[1px] rounded-none w-full ${
                day
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-black bg-white text-gray-800"
              }`}
              placeholder="Enter service area"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              className={`input border-[1px] rounded-none w-full ${
                day
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-black bg-white text-gray-800"
              }`}
              placeholder="Enter service description"
              rows="4"
              required
            ></textarea>
            <p className="text-sm mt-1">
              {charCount}/{maxChar} characters
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`nav_link ${
                day ? "bg-blue-500 text-white" : "bg-blue-700 text-white"
              } font-semibold py-2 px-4 rounded`}
              disabled={description.length > maxChar}
            >
              <span className="relative z-10">Add Service</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservices;
