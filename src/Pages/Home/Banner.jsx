import React, { useContext } from "react";
import Slider from "react-slick";
import './sevice.css'
import image1 from "./../../assets/pexels-minan1398-906150.jpg";
import image2 from "./../../assets/pexels-pixabay-280229.jpg";
import image3 from "./../../assets/pexels-binyaminmellish-1396132.jpg";
import "slick-carousel/slick/slick.css"; 

import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";


const Banner = () => {
  const {day}= useContext(AuthContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: "Transform Your Home, Stress-Free – Trusted Services at Your Doorstep!",
      description:
        "Get hassle-free home transformations with reliable, professional service that fits your schedule and budget.",
      image: image1,
    },
    {
      id: 2,
      title: "Your Home, Our Expertise – Quality Services You Deserve!",
      description: "Top-notch craftsmanship for repairs and renovations, delivered with precision and care.",
      image: image2,
    },
    {
      id: 3,
      title: "From Repairs to Renovations – We Bring Your Vision to Life!",
      description:
        "rom small fixes to major makeovers, our experts bring your ideas to life with exceptional quality.",
      image: image3,
    },
  ];
  return (
    <div >
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[350px] lg:h-[650px]">
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex flex-col items-center justify-center text-center text-white px-4">
                  <h1 data-aos="fade-left" className="lg:text-5xl md:text-2xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p data-aos="fade-up" className="lg:text-lg text-[8px] md:text-xs lg:text-xl mb-6">{slide.description}</p>
                  <Link to={'/allservices'} data-aos="fade-right" className={`${day ? "nav-link2 bg-black" : " nav-link "}`}>
                    <span className="relative z-10 text-white hover:text-yellow-400" >Get service</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
     
    </div>
  );
};

export default Banner;
