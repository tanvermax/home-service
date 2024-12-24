import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuhtContext from "../../AuthProvider.jsx/AuhtContext";
import Banner from "./Banner";
import PopularService from "./PopularService";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const {User} = useContext(AuhtContext);

  // console.log(User.email);
  
  return (
    <>
    <Banner></Banner>
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home - Service Sharing</title>
      </Helmet>
    
     <PopularService></PopularService>
     <Section1></Section1>
     <Section3></Section3>
     <Section2></Section2>
      {/* {User.displayName ? User.displayName : " "} */}
     
    </div></>
  );
};

export default Home;
