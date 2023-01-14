import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent({ icon }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <img
            className="h-50 w-full object-fill"
            src={icon[0]}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-50 w-full object-fill"
            src={icon[1]}
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-50 w-full object-fill"
            src={icon[2]}
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
