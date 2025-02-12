import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS

const Imageslide = () => {


  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
      loop={true}
    >
      <SwiperSlide>
        <div className="flex justify-center items-center h-64 bg-gray-200">
          <img src="https://via.placeholder.com/400" alt="Slide 1" />
          <p className="text-xl font-bold ml-4">Slide 1 Text</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-64 bg-gray-300">
          <img src="https://via.placeholder.com/400" alt="Slide 2" />
          <p className="text-xl font-bold ml-4">Slide 2 Text</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-64 bg-gray-400">
          <img src="https://via.placeholder.com/400" alt="Slide 3" />
          <p className="text-xl font-bold ml-4">Slide 3 Text</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Imageslide;
