import React from "react";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { MdOutlineWash } from "react-icons/md";
import { GiGloves } from "react-icons/gi";

import { MdOutlineSupportAgent } from "react-icons/md";

const Section1 = () => {
  return (
    <div className="py-10 ">
      <p className="text-xl">___Why Choose US</p>
      <h1 className="text-3xl font-semibold">
        Because we care about your safety..
      </h1>
      <div className="grid grid-cols-2 py-2 w-9/12 mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <span className="text-7xl text-teal-500  ml-2">
              <RiSurgicalMaskLine />
            </span>
            <p>Ensuring Masks</p>
          </div>
          <div>
            <span className="text-7xl text-teal-500 ml-2">
              <MdOutlineSupportAgent />
            </span>

            <p>24/7 Support</p>
          </div>
          <div>
            <span className="text-7xl text-teal-500 ml-2">
              <MdOutlineWash />
            </span>

            <p>Sanitising Hands & Equipment</p>
          </div>
          <div>
            <span className="text-7xl text-teal-500 ml-2">
              <GiGloves />
            </span>

            <p>Ensuring Gloves</p>
          </div>
        </div>
        <div>
          <img className=" mx-auto h-[400px] p-10"
            src="https://cdn.pixabay.com/photo/2024/02/09/08/56/construction-8562655_960_720.png"
            alt=""
          />
        </div>
      </div>
      <div className="py-5">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
