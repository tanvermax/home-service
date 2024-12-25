import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";


const Editservice = () => {
    const {User}= useContext(AuthContext);

  const data = useLoaderData();

  const [loadData, useData] = useState(data);

  const handleEdit = (e) => {
    e.preventDefault();
    const form= e.target;
    const imageUrl = form.imageUrl.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const provideremail = User.email;
    const providerphoto= User.photoURL;
    const providername = User.displayName;

    const newService = {
        imageUrl,
        serviceName,
        price,
        serviceArea,
        description,provideremail,providerphoto,providername
      };
    console.log(newService);
    fetch(`http://localhost:5000/addservice2/${loadData._id}`,{
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newService)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("inside data" , data);
        
    })
    
  };

  return (
    <div>
      <div className="w-9/12 mx-auto">
       <form onSubmit={handleEdit}> 
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
              name="serviceName"
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
              name="serviceArea"
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
              name="imageUrl"
              className="input amarform"
              defaultValue={loadData.imageUrl}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Service dicription</span>
            </label>
            <input
              type="text"
              name="description"
              className="input amarform"
              defaultValue={loadData.description}
            
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Cost $</span>
            </label>
            <input
              type="text"
              name="price"
              className="input amarform"
              defaultValue={loadData.price}
            />
          </div>
          <input type="submit" className="btn" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default Editservice;
