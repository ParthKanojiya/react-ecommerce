import React, { useRef, useState } from "react";
import NikeAir from "../assets/banner-1.png";
import AirJordan from "../assets/banner-2.png";
import NikeAirMax from "../assets/banner-3.png";
import AirJordan102 from "../assets/banner-4.png";
import NikeAirMax720 from "../assets/banner-5.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ShoesData = [
  {
    id: 1,
    name: "Nike Air Force 1 Mid 07 LV",
    url: `${NikeAir}`,
  },
  {
    id: 2,
    name: "Air Jordan 1 Retro High Og",
    url: `${AirJordan}`,
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    url: `${NikeAirMax}`,
  },
  { id: 4, name: "Air Jordan 102 Aqua", url: `${AirJordan102}` },
  {
    id: 5,
    name: "Nike Air Max 720",
    url: `${NikeAirMax720}`,
  },
];

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full m-auto p-4 max-w-screen-2xl xl:max-w-[1400px]"
      >
        {ShoesData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="slide-wrapper flex justify-between md:flex md:justify-between md:items-center md:flex-row flex-col-reverse p-0 md:p-8">
              <p className="shoes-name text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] w-full md:w-6/12 font-unbounded font-black leading-tight opacity-35 text-center md:text-left text-[#4a4c6c]">
                {data.name}
              </p>
              <img
                src={data.url}
                alt={data.name}
                className="md:w-6/12 h-[340px] lg:h-[500px] scale-[1.12] md:scale-[1.16] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
