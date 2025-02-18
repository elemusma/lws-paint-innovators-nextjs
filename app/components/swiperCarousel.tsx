"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper.scss";

const SwiperCarousel = () => {
  return (
    <Swiper
      slidesPerView={1} // Show 5 items at a time
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative flex h-[76vh] w-full justify-center items-center">
          <Image
            src="/assets/Paint-Innovators-Industrial.jpg"
            alt="Paint Innovators Industrial"
            style={{ objectFit: "cover" }}
            className="absolute top-0 eft-0 w-full h-full"
            fill
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7049413515406162) 82%)",
            }}
          ></div>
          <div className="relative flex lg:w-1/2 w-5/6 text-white">
            <div
              style={{ background: "red", minWidth: "5px" }}
              className="w-[5px] h-[100px] mr-[10px]"
            ></div>
            <div>
              <h1 className="mb-[15px] text-shadow mt-[-8px]">
                THE PREFERRED PAINTERS
              </h1>
              <p className="text-shadow font-bold">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <Link href="/contact" className="btn-main mt-[20px]">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p>hello theressss123</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p>hello theressss123</p>
        </div>
      </SwiperSlide>
      {/* {[...Array(12)].map((_, index) => (
        <SwiperSlide key={index} className="bg-gray-200 p-6 rounded-md">
          <h4 className="text-center">Slide {index + 1}</h4>
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};

export default SwiperCarousel;
