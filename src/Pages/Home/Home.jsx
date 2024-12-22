import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";

const Home = () => {
  const {User} = useContext(AuhtContext);
  console.log(User);
  
  return (
    <div className="w-11/12 mx-auto">
      <h1>this is home</h1>
     
      {User.displayName ? User.displayName : " "}
     
    </div>
  );
};

export default Home;
