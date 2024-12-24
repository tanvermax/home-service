import React from "react";
import { ImPlay2 } from "react-icons/im";

const Section2 = () => {
  return (
    <div>
      <p className="text-xl">How it works</p>

      <h1 className="text-3xl font-semibold">Easiest way to get a service</h1>

      <div className="grid grid-cols-2 w-9/12 mx-auto py-5">
        <div className="mx-auto">
          <span className="hover:text-green-900  relative drop-shadow-2xl text-5xl text-red-700 top-[200px] left-40">
            <ImPlay2 />
          </span>
          <img
            className="border-2 h-[400px] hover:border-teal-800"
            src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
            alt=""
          />
        </div>
        <div class=" my-auto space-y-8">
          <div class="flex items-start">
            <div class="flex items-center justify-center w-20 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              1
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold">Select the Service</h3>
              <p class="text-gray-600">
                Pick the service you are looking for—from the website or the
                app.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex items-center justify-center w-28 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              2
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold">Pick your schedule</h3>
              <p class="text-gray-600">
                Pick your convenient date and time to avail the service. Pick
                the service provider based on their rating.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex items-center justify-center w-32 h-20 bg-teal-500 text-white rounded-full text-lg font-bold">
              3
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold">Place Your Order & Relax</h3>
              <p class="text-gray-600 ">
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
