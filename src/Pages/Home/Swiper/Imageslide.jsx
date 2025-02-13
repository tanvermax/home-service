import React, { useContext } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import AuthContext from "../../../AuthProvider.jsx/AuhtContext";

const Imageslide = () => {
  const {day}= useContext(AuthContext);
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
      loop={true}
    >
      <SwiperSlide>
        <section
          data-aos="fade-left"
          className={`py-10 ${day ? "text-white" : "text-black"} `}
        >
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium ">
                  "Fixitnest service was professional. It contains tons of predesigned
                  components and instrument for gardening. Perfect choice for your Home gardening service.""
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium  ">pori moni</div>
                  <div className="pl-3 text-sm font-light ">
                    Gulshan,Bangldesh
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
      <section
          data-aos="fade-left"
          className={`py-10 ${day ? "text-white" : "text-black"} `}
        >
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium ">
                  "Fixitnest service is just awesome. It contains tons of predesigned
                  components and instrument for cleaning home. Perfect choice for your Home cleaning service."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium  ">Shakib al hassan</div>
                  <div className="pl-3 text-sm font-light ">
                    Rajshahi,Bangladesh
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
      <section
          data-aos="fade-left"
          className={`py-10 ${day ? "text-white" : "text-black"} `}
        >
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium ">
                  "Fixitnest service was satisfied. It contains tons of predesigned
                  components and instrument for body massage. Perfect choice for your Home body massage service."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium  ">harry potter</div>
                  <div className="pl-3 text-sm font-light ">
                    Cumilla, Bangladesh
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Imageslide;
