"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper-hero.scss";
import "../styles/swiper.scss";

export interface Slide {
  imageSrc: string;
  imageAlt?: string;
}

export interface SwiperCarouselProps {
  slides: Slide[];
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ slides }) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={5}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 6000 }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt || "Slide Image"}
              style={{ objectFit: "cover" }}
              className="absolute top-0 left-0 w-full h-full"
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
