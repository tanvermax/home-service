import React from "react";
import photo from "./../../assets/logo2.png";
import Imageslide from "./Swiper/Imageslide";

const Aboutus = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 w-11/12 mx-auto lg:py-20">
        <div>
          <img src={photo} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold py-5">Know About Us</h1>
          <p className="lg:text-xl text-xs">
            Fixitnest is a virtual marketplace for service providers offering
            one-stop solutions for various services you require at households
            and offices every now and then. Fixitnest offers you an array of
            essential day-to-day services to avail from experienced technicians,
            skilled workers, and craftspeople. Also, you will find dynamic
            independent freelancers and consultants offering their professional
            services to meet your work demand. Fixitnest We are offering you a
            hassle-free journey to find the right professionals for the job. You
            can easily choose from a pool of professionals in your area, skip
            the bargaining stress by having either pre-agreed rates, and use
            secured payment and transaction tracking. Trade License Number:
            TRAD/DNCC/062213/2022
          </p>
          <ul className=" list-disc py-3 ml-10 space-y-2">
            <li className="hover:text-orange-400">
              Complete Sanitization and cleaning of bathroom
            </li>
            <li className="hover:text-orange-400">
              It's a long established way
            </li>
            <li className="hover:text-orange-400">
              Biodegradable chemicals are used
            </li>
          </ul>
        </div>
      </div>
      <section className="grid lg:grid-cols-2 w-11/12 mx-auto lg:py-20">
        <div>
          <h1 className="text-3xl font-bold py-5">Start As Service provider</h1>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://www.poshorabd.com/assets/uploads/media-uploader/4905418c115548a996d36deac6d5fd5b1704883862.jpg"
            alt=""
          />
        </div>
      </section>
      <section>
        <Imageslide></Imageslide>
      </section>
    </>
  );
};

export default Aboutus;
