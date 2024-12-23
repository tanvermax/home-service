import React from "react";
import { ImPlay2 } from "react-icons/im";

const Section2 = () => {
  return (
    <div>
      <p className="text-xl">How it works</p>

      <h1 className="text-3xl font-semibold">Easiest way to get a service</h1>

      <div className="grid grid-cols-2 w-9/12 mx-auto py-5">
        <div>
          <span className="relative drop-shadow-2xl text-5xl text-red-700 top-[200px] left-40">
            <ImPlay2 />
          </span>
          <img
            className="border-2 h-[400px]"
            src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
            alt=""
          />
        </div>
        <div>
          <div className="flex border-2 ">
            <div
              className="p-5 h-10
                w-10 mt-10 bg-teal-500 rounded-full"
            >
              <h1>1</h1>
            </div>
            <div>
              <h1 className="text-2xl">Select the Service</h1>
              <p>
                Pick the service you are looking for- from the website or the
                app.
              </p>
            </div>
          </div>
          <div className="flex border-2 ">
            <h1 className="p-5 h-10 text-center items-center bg-teal-500 rounded-full">
              1
            </h1>
            <div>
              <h1 className="text-2xl">Pick your schedule</h1>
              <p>
                Pick your convenient date and time to avail the service. Pick
                the service provider based on their rating.
              </p>
            </div>
          </div>
          <div className="flex border-2 ">
            <h1 className="p-5 h-10 text-center items-center bg-teal-500 rounded-full">
              1
            </h1>
            <div>
              <h1 className="text-2xl">Place Your Order & Relax</h1>
              <p>
                Review and place the order. Now just sit back and relax. We’ll
                assign the expert service provider’s schedule for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
