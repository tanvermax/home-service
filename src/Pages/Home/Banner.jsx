import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthProvider.jsx/AuhtContext";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sevice.css";

const Banner = () => {
  const { day } = useContext(AuthContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      id: 1,
      title: "Transform Your Home, Stress-Free",
      subtitle: "Trusted Services at Your Doorstep!",
      description:
        "Get hassle-free home transformations with reliable, professional service that fits your schedule and budget.",
      image: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Your Home, Our Expertise",
      subtitle: "Quality Services You Deserve!",
      description:
        "Top-notch craftsmanship for repairs and renovations, delivered with precision and care.",
      image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "From Repairs to Renovations",
      subtitle: "We Bring Your Vision to Life!",
      description:
        "From small fixes to major makeovers, our experts bring your ideas to life with exceptional quality.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative  bottom-20">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[400px] md:h-[600px] lg:h-[700px]">
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-6 text-center text-white">
                <h2
                  data-aos="fade-up"
                  className="text-xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2"
                >
                  {slide.title}
                </h2>
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 text-yellow-300"
                >
                  {slide.subtitle}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-sm md:text-base lg:text-lg max-w-2xl mb-6"
                >
                  {slide.description}
                </p>
                <Link
                  to="/allservices"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className={`inline-block px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md ${
                    day
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Get Service
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
