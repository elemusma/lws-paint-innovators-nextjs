"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCarousel = () => {
  return (
    <Swiper
      slidesPerView={5} // Show 5 items at a time
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {[...Array(12)].map((_, index) => (
        <SwiperSlide key={index} className="bg-gray-200 p-6 rounded-md">
          <h4 className="text-center">Slide {index + 1}</h4>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
