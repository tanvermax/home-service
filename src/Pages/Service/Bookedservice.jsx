import React, { useContext, useEffect, useState } from "react";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";

const Bookedservice = () => {
  const { User } = useContext(AuhtContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${User.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [User.email]);

  return (
    <div>
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
              {/* row 1 */}
              {data.map((card) => (
                <tr>
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
                        <div className="font-bold">
                          {card.ordergivenusername}
                        </div>
                        <div className="text-sm opacity-50">{User.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {card.instruction}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {card.servicename}
                    </span>
                  </td>
                  <td className="text-green-400">{card.serviceStatus}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
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
