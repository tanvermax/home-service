import React, { useContext, useEffect, useState } from "react";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { User } = useContext(AuhtContext);

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch(`http://localhost:5000/addservice?email=${User.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handledelet = (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (confirmed) {
      fetch(`http://localhost:5000/addservice/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Data deleted successfully");
            // Remove the deleted item from the state
            setData((prevData) => prevData.filter((item) => item._id !== _id));
          }
        });
    }
  };

  return (
    <div className="w-11/12 mx-auto py-10">
       <Helmet>
        <title>Manage  Service</title>
      </Helmet>
      <h1>mange service{data.length}</h1>
      <div className="grid grid-cols-3 gap-10">
        {data.map((loadData) => (
          <div key={loadData._id} className="loadData   shadow-xl">
            <figure>
              <img
                className="h-96 w-full"
                src={loadData.imageUrl}
                alt="Shoes"
              />
            </figure>
            <div className="loadData-body">
              <div className="flex justify-between items-center">
                <div className="py-5 px-3">
                  <h2 className="loadData-title text-3xl font-semibold">
                    {loadData.serviceName}
                  </h2>
                  <p className="h-24 text-gray-600 overflow-hidden py-3 text-base">
                    {loadData.description} in serviceArea :{" "}
                    <span className="badge badge-secondary font-semibold">
                      {loadData.serviceArea}
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p className="text-xl  px-3 font-semibold">
                    {loadData.price}$
                  </p>
                </div>
              </div>
              <div className=" flex justify-between p-5 items-center">
                <div className="badge badge-outline">
                  {loadData.providername}
                </div>
                <div className=" border-warning rounded-full border-2">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={loadData.providerphoto}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <Link
                to={`/addservice2/${loadData._id}`}
                className="nav_link font-semibold "
              >
                <span className="relative z-10">Edit</span>
              </Link>
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                // onClick={() => handledelet(loadData._id)}
                className="nav_link font-semibold "
              >
                <span className="relative z-10">Delet</span>
              </button>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* The button to open modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">do you want to delete this service </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button
                      onClick={() => handledelet(loadData._id)}
                      className="btn"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* ....................... */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">ServiceId</span>
                    </label>
                    <input
                      type="text"
                      className="input amarform"
                      name="orderid"
                      defaultValue={loadData._id}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Name</span>
                    </label>
                    <input
                      type="text"
                      name="servicename"
                      className="input amarform  "
                      defaultValue={loadData.serviceName}
                    />
                  </div>
                  <input
                    type="hidden"
                    name="serviceStatus"
                    value="Pending" // Default value
                  />

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Area</span>
                    </label>
                    <input
                      type="text"
                      name="serviceprovider"
                      className="input amarform"
                      defaultValue={loadData.serviceArea}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service image</span>
                    </label>
                    <input
                      type="text"
                      name="serviceprovideremail"
                      className="input amarform"
                      defaultValue={loadData.imageUrl}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service dicription</span>
                    </label>
                    <input
                      type="url"
                      className="input amarform"
                      defaultValue={loadData.description}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Cost $</span>
                    </label>
                    <input
                      type="text"
                      name="cost"
                      className="input amarform"
                      defaultValue={loadData.price}
                    />
                  </div>
                  <input type="submit" className="btn" value="Submite" />
                </form>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
