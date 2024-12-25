import React, { useContext } from "react";
import Banner from "./Banner";
import PopularService from "./PopularService";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";

const Home = () => {
  const {User} = useContext(AuthContext);

  // console.log(User.email);
  
  return (
    <>
    
    <Banner></Banner>
   
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home - Service Sharing</title>
      </Helmet>
    
     <PopularService></PopularService>
     <div className="py-10">
     <Section1></Section1>
     </div>
     <Section3></Section3>
     <Section2></Section2>
      {/* {User.displayName ? User.displayName : " "} */}
     
    </div></>
  );
};

export default Home;
