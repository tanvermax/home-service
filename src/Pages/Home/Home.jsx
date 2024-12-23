import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";
import Banner from "./Banner";
import PopularService from "./PopularService";

const Home = () => {
  const {User} = useContext(AuhtContext);

  // console.log(User.email);
  
  return (
    <div className="w-11/12 mx-auto">
     <Banner></Banner>
     <PopularService></PopularService>
      {/* {User.displayName ? User.displayName : " "} */}
     
    </div>
  );
};

export default Home;
