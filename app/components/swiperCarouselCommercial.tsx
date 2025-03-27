"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper-hero.scss";
import "../styles/swiper.scss";

const SwiperCarouselCommercial = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          loop={true} // Enable looping
          slidesPerView={1} // Show 5 items at a time
          spaceBetween={0}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          speed={1500} // Increased speed for slower transition
        >
          <SwiperSlide>
            <div className="relative flex min-h-[81vh] w-full justify-center pt-[100px] overflow-hidden">
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex min-h-[81vh] w-full justify-center pt-[100px] overflow-hidden">
              <Image
                src="/home/Paint-Innovators-2025-07.jpg"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex min-h-[81vh] w-full justify-center pt-[100px] overflow-hidden">
              <Image
                src="/home/Paint-Innovators-2025-01.jpg"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex min-h-[81vh] w-full justify-center pt-[100px] overflow-hidden">
              <Image
                src="/home/Paint-Innovators-Commercial-02.jpg"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex min-h-[81vh] w-full justify-center pt-[100px] overflow-hidden">
              <Image
                src="/home/Paint-Innovators-Commercial-01.jpg"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex min-h-[81vh] w-full justify-center pt-[100px] overflow-hidden">
              <Image
                src="/home/Paint-Innovators-2025-06.jpg"
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
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-[250px] lg:w-3/4 w-full px-4">
          <div className="relative flex w-full text-white z-10">
            <div
              style={{ background: "red", minWidth: "5px" }}
              className="w-[5px] h-[100px] mr-[10px]"
            ></div>
            <div>
              <h1 className="mb-[15px] text-shadow mt-[-8px] font-proxima-bold uppercase">
                Your Preferred Painter for Commercial &amp; Industrial Projects
              </h1>
              {/* <h2 className="font-aspira-bold text-2xl text-shadow">
                Arkansas <span className="text-accent">&bull;</span> Oklahoma{" "}
                <span className="text-accent">&bull;</span> Colorado
              </h2> */}
              <p className="text-shadow text-xl">
                <strong>
                  Whether it&apos;s new construction or renovations, our expert
                  team ensures a flawless finish that enhances durability,
                  boosts property value, and leaves a lasting impression.
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
    </>
  );
};

export default SwiperCarouselCommercial;
