import React, { useContext } from "react";
import Banner from "./Banner";
import PopularService from "./PopularService";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";
import Testimoni from "./Testimoni";
import Imageslide from "./Swiper/Imageslide";

const Home = () => {
  const { User } = useContext(AuthContext);

  // console.log(User.email);

  return (
    <>

      <Banner></Banner>

      <div className="lg:w-11/12 mx-auto">
        <Helmet>
          <title>Home - Service Sharing</title>
        </Helmet>

        <PopularService></PopularService>
        <div className="py-10">
          <Section1></Section1>
        </div>
        <Section3></Section3>

        <Section2></Section2>
        {/* <Testimoni></Testimoni> */}
        <section>
          <Imageslide></Imageslide>
        </section>
        {/* {User.displayName ? User.displayName : " "} */}

      </div></>
  );
};

export default Home;
