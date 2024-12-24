import React from "react";
import Slider from "react-slick";
import image1 from "./../../assets/pexels-minan1398-906150.jpg";
import image2 from "./../../assets/pexels-pixabay-280229.jpg";
import image3 from "./../../assets/pexels-binyaminmellish-1396132.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
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
      title: "Discover the Latest Tech Trends",
      description:
        "Explore cutting-edge gadgets and smart devices at unbeatable prices.",
      image: image1,
    },
    {
      id: 2,
      title: "Upgrade Your Life with Smart Gadgets",
      description: "Innovative solutions for a smarter, more connected future.",
      image: image2,
    },
    {
      id: 3,
      title: "Experience the Future of Technology",
      description:
        "Join our community and stay ahead with the latest tech products.",
      image: image3,
    },
  ];
  return (
    <div>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[600px]">
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex flex-col items-center justify-center text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition">
                    Shop Now
                  </button>
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
