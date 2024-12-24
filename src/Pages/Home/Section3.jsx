import React from 'react';
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";



const Section3 = () => {
    return (
        <div className='py-5'>
            <div className="bg-yellow-400 flex items-center justify-between p-4 rounded-lg  mx-auto">

  <div className="flex items-center space-x-4">

    <div className=" rounded-full flex items-center justify-center">
      <img  src="https://joboy.in/assets/images/download-aap-now.png" alt="Mobile Icon" className="w-20 h-20"/>
    </div>
  
    <p className="text-black font-medium text-sm">
      Get a Better FixitNest Experience on Mobile. Download the FixitNest app now!
    </p>
  </div>

  
  <div className="flex space-x-2">
    <a href="#" className="bg-black text-white text-xl font-medium py-2 px-4 rounded-md flex items-center">
    <span className='text-4xl mr-3'><BsApple /></span> Download <br /> App Store
    </a>
    <a href="#" className="bg-black text-white text-xl font-medium py-2 px-4 rounded-md flex items-center">
    <span className='text-4xl mr-3 '><FaGooglePlay /></span> Download <br /> Google Play
    </a>
  </div>
</div>

        </div>
    );
};

export default Section3;