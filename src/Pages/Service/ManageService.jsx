import React, { useContext, useEffect, useState } from "react";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";
import { Link } from "react-router-dom";

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
  fetch(`http://localhost:5000/addservice/${_id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.deletedCount) {
        alert('data deleted')
      }
    });
};

//   const handleupdate = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const imageUrl = form.imageUrl.value;
//     const serviceName = form.serviceName.value;
//     const price = form.price.value;
//     const serviceArea = form.serviceArea.value;
//     const description = form.description.value;
//     const provideremail = User.email;
//     const providerphoto = User.photoURL;
//     const providername = User.displayName;
//     const newService = {
//       imageUrl,
//       serviceName,
//       price,
//       serviceArea,
//       description,
//       provideremail,
//       providerphoto,
//       providername,
//     };
//     console.log(newService);

//     fetch(`http://localhost:5000/addservice?email=${data._id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

  return (
    <div className="w-11/12 mx-auto py-10">
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
              <button onClick={() => handledelet(loadData._id)} className="nav_link font-semibold ">
                <span className="relative z-10">Delet</span>
              </button>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            {/* ....................... */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form  method="dialog">
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
