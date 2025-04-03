"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper-hero.scss";
import "../styles/swiper.scss";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const SwiperCarouselCommercial = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isMobile = useIsMobile();

  // Delay autoplay start on mobile
  useEffect(() => {
    if (isMobile && swiperRef.current) {
      if ("requestIdleCallback" in window) {
        (
          window as unknown as { requestIdleCallback: (cb: () => void) => void }
        ).requestIdleCallback(() => {
          swiperRef.current?.autoplay?.start();
        });
      } else {
        // fallback for older browsers
        setTimeout(() => {
          swiperRef.current?.autoplay?.start();
        }, 5000);
      }
    }
  }, [isMobile]);

  return (
    <div className="relative">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        autoplay={isMobile ? false : { delay: 3000 }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        speed={2000}
      >
        {/* First Slide – eager & priority */}
        <SwiperSlide>
          <div className="relative flex lg:min-h-[530px] md:min-h-[629px] min-h-[611px] w-full justify-center pt-[100px] overflow-hidden">
            <Image
              src="/home/Paint-Innovators-2025-12.jpg"
              alt="Paint Innovators Industrial"
              style={{ objectFit: "cover" }}
              className="absolute top-0 left-0 w-full h-full kenburns"
              fill
              sizes="100vw"
              loading="eager"
              priority={true}
            />
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 82%)",
              }}
            ></div>
          </div>
        </SwiperSlide>

        {/* All other slides – lazy loaded */}
        {[
          "/home/Paint-Innovators-2025-07.jpg",
          "/home/Paint-Innovators-2025-01.jpg",
          "/home/Paint-Innovators-Commercial-02.jpg",
          "/home/Paint-Innovators-Commercial-01.jpg",
          "/home/Paint-Innovators-2025-06.jpg",
        ].map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex lg:min-h-[530px] md:min-h-[629px] min-h-[611px] w-full justify-center pt-[100px] overflow-hidden">
              <Image
                src={src}
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="absolute top-0 left-0 w-full h-full kenburns"
                fill
                sizes="100vw"
                loading="lazy"
              />
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 82%)",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:w-3/4 w-full lg:px-4 px-[45px]">
        <div className="relative flex w-full text-white z-10">
          <div
            className="w-[5px] h-[100px] mr-[10px]"
            style={{ background: "red" }}
          ></div>
          <div>
            <h1 className="md:text-5xl text-2xl mb-[15px] text-shadow mt-[-8px] font-proxima-bold uppercase">
              Your Preferred Painter for Commercial &amp; Industrial Projects
            </h1>
            <p className="text-shadow md:text-xl">
              <strong>
                Whether it&apos;s new construction or renovations, our expert
                team ensures a flawless finish that enhances durability, boosts
                property value, and leaves a lasting impression.
              </strong>
            </p>
            <Link href="/get-estimate" className="btn-main mt-[20px]">
              Get Free Estimate
            </Link>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCarouselCommercial;
