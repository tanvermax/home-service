import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import "./addservic.css";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";


const SignleServices = () => {
  const { User } = useContext(AuthContext);

  const loadData = useLoaderData();
  console.log(loadData);
  

  const handleservice = (e) => {
    e.preventDefault();
    const form = e.target;
    const orderid = form.orderid.value;
    const servicename = form.servicename.value;
    const instruction = form.instruction.value;
    const serviceprovider = form.serviceprovider.value;
    const serviceprovideremail = form.serviceprovideremail.value;
    
    const cost = form.cost.value;
    const serviceStatus = form.serviceStatus.value;
    const ordergivenusername = User.displayName;
    const ordergivenuseremail = User.email;
    const serviceDate = form.serviceDate.value;
    const servicedetails = {ordergivenuseremail,serviceprovideremail,serviceStatus,serviceDate,cost,ordergivenusername, orderid,serviceDate,servicename,instruction,serviceprovider};
    
    console.log(servicedetails);
    document.getElementById("my_modal_5").close();
    fetch('http://localhost:5000/order',{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(servicedetails),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("inside data",data);
        if (data.insertedId) {
            alert("data created")
        }
    })
  };

  return (
    <div className="w-8/12 mx-auto py-10">
      <div key={loadData._id} className="loadData   shadow-xl">
        <figure>
          <img className="h-96 w-full" src={loadData.imageUrl} alt="Shoes" />
        </figure>
        <div className="loadData-body">
          <div className="flex justify-between items-center">
            <div className="py-5 px-3">
              <h2 className="loadData-title text-3xl font-semibold">
                {loadData.serviceName}
              </h2>
              <p className="h-24 text-gray-600 overflow-hidden py-3 text-xl">
                {loadData.description} in serviceArea :{" "}
                <span className="badge badge-secondary font-semibold">
                  {loadData.serviceArea}
                </span>{" "}
              </p>
            </div>
            <div>
              <p className="text-xl  px-3 font-semibold">{loadData.price}$</p>
            </div>
          </div>
          <div className=" flex justify-between p-5">
            <div className="badge badge-outline">{loadData.providername}</div>
            <div className=" border-warning rounded-full border-2">
              <img
                className="h-14 w-14 rounded-full"
                src={loadData.providerphoto}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <button
          className="nav_link font-semibold "
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <span className="relative z-10">Book Now</span>
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>

          <div className="">
            <form onSubmit={handleservice}>
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
                  readOnly
                />
              </div>
              <input
              type="hidden"
              name="serviceStatus"
              value="Pending" // Default value
            />

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Provider Name</span>
                </label>
                <input
                  type="text"
                  name="serviceprovider"
                  className="input amarform"
                  defaultValue={loadData.providername}
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Provider email</span>
                </label>
                <input
                  type="text"
                  name="serviceprovideremail"
                  className="input amarform"
                  defaultValue={loadData.provideremail}
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  className="input amarform"
                  defaultValue={User.displayName}
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User email</span>
                </label>
                <input
                  type="text"
                  className="input amarform"
                  defaultValue={User.email}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Taking Date</span>
                </label>
                <input type="date" 
                name="serviceDate" className="input amarform" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Special instruction</span>
                </label>
                <textarea
                  className="border-[1px]"
                  name="instruction"
                  defaultValue=" address , area, customized service plan"
                  id=""
                ></textarea>
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
                  readOnly
                />
              </div>
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-between gap-5 py-5">
                <button
                  className="nav_link font-semibold "
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <span className="relative z-10">Close</span>
                </button>
                <button
                  className="nav_link font-semibold "
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <span className="relative z-10">Purchase</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SignleServices;
