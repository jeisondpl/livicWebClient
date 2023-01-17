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
        {icon.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-50 w-full object-fill"
              src={item}
              alt={"image slide 1" + index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
