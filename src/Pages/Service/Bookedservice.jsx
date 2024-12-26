import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";
import axios from "axios";

const Bookedservice = () => {
  const { User } = useContext(AuthContext);

  const [data, setData] = useState([]);
console.log(User.email);

  useEffect(() => {
    // axios
    // .get(`https://serverside-bay.vercel.app/order?email2=${User.email}`, {
    //   withCredentials: "include",
    // })
    // .then((res) => setData(res.data));
 axios.get(`https://serverside-bay.vercel.app/order?email=${User.email}`,{
  credentials: "include"
 })
 .then(res=>setData(res(data)))

    // fetch(`https://serverside-bay.vercel.app/order?email=${User.email}`,{
    //   credentials:"include"
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data)
        
    //   });
  }, [User.email]);

  return (
    <div>
      <Helmet>
        <title>Booked Service</title>
      </Helmet>
      <h1 className="text-2xl w-9/12 mx-auto py-4">
        Here all your {data.length} booked servie
      </h1>
      <div className="w-10/12 mx-auto py-7">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Order/location</th>
                <th>Order status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {data.length === 0 ? (
                <div key={data._id} className="text-center text-gray-600">
                  <h2 className="text-xl font-semibold">No bookings found!</h2>
                  <p className="text-base">
                    You haven't booked any services yet.
                  </p>
                  <p>
                    <a href="/services" className="text-blue-500 underline">
                      Browse services
                    </a>{" "}
                    to make your first booking.
                  </p>
                </div>
              ) : (
                data.map((card) => (
                  <tr key={card._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={User.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{card.ordergivenusername}</div>
                          <div className="text-sm opacity-50">{User.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {card.instruction}
                      <br />
                      <span className="badge badge-ghost badge-sm">{card.servicename}</span>
                    </td>
                    <td className={`${card.serviceStatus === "pending" ? "text-yellow-400" : card.serviceStatus === "complete" ? "text-green-400" : card.serviceStatus === "working"  ? "text-red-400"  : "text-gray-400" }`}>{card.serviceStatus}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))
              )}
              
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Order status</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookedservice;
