import React from 'react';
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const Section3 = () => {
    return (
        <div className='lg:py-10  '>
            <div className="bg-yellow-400 flex items-center justify-between lg:p-6 p-3 rounded-lg mx-auto w-11/12 md:w-9/12">

                <div className="flex items-center space-x-4">
                    <div className="rounded-full flex items-center justify-center">
                        <img 
                            src="https://joboy.in/assets/images/download-aap-now.png" 
                            alt="Mobile Icon" 
                            className="lg:w-20 lg:h-20" 
                        />
                    </div>
                    <p className="text-black font-medium text-[8px] md:text-base">
                        Get a Better FixitNest Experience on Mobile. Download the FixitNest app now!
                    </p>
                </div>

                <div className="flex lg:space-x-4 space-x-1">
                    <a 
                        href="#"
                        className="bg-black text-white text-[8px] md:text-xl font-medium py-2 px-4 rounded-md flex items-center space-x-2"
                    >
                        <span className='lg:text-4xl'>
                            <BsApple />
                        </span>
                        <span>
                            Download <br /> App Store
                        </span>
                    </a>
                    <a 
                        href="#"
                        className="bg-black text-white text-[8px] md:text-xl font-medium py-2 px-4 rounded-md flex items-center space-x-2"
                    >
                        <span className='lg:text-4xl'>
                            <FaGooglePlay />
                        </span>
                        <span>
                            Download <br /> Google Play
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section3;
