"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper-hero.scss";
import "../styles/swiper.scss";

const SwiperCarousel = () => {
  return (
    <Swiper
      loop={true} // Enable looping
      slidesPerView={1} // Show 5 items at a time
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 6000 }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/home/Paint-Innovators-2025-03.jpg"
            alt="Paint Innovators Industrial"
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0 w-full h-full kenburns"
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
              <h1 className="mb-[15px] text-shadow mt-[-8px] font-aspira-light uppercase">
                THE PREFERRED PAINTERS
              </h1>
              <p className="text-shadow">
                Transform your house into the home of your dreams with Paint
                Innovators&apos; residential painting services in Arkansas and
                Oklahoma.
              </p>
              <Link href="/get-estimate" className="btn-main mt-[20px]">
                Get Free Estimate
              </Link>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/home/Paint-Innovators-2025-12.jpg"
            alt="Paint Innovators Industrial"
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0 w-full h-full kenburns"
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
              <h2 className="h1 mb-[15px] text-shadow mt-[-8px] font-aspira-light uppercase">
                Commercial Painting
              </h2>
              <p className="text-shadow">
                Enhance your business with Paint Innovators&apos; professional
                commercial painting services across Arkansas and Oklahoma.
              </p>
              <Link href="/get-estimate" className="btn-main mt-[20px]">
                Get Free Estimate
              </Link>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/assets/Paint-Innovators-Industrial.jpg"
            alt="Paint Innovators Industrial"
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0 w-full h-full kenburns"
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
              <h2 className="h1 mb-[15px] text-shadow mt-[-8px] font-aspira-light uppercase">
                Industrial Painting
              </h2>
              <p className="text-shadow">
                Protect your valuable assets with Paint Innovators&apos;
                industrial coating services in Arkansas and Oklahoma.
              </p>
              <Link href="/get-estimate" className="btn-main mt-[20px]">
                Get Free Estimate
              </Link>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;
