"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "../styles/swiper-hero.scss";
import "../styles/swiper.scss";

const SwiperCarouselNewService = () => {
  return (
    <Swiper
      loop={true} // Enable looping
      slidesPerView={1} // Show 5 items at a time
      spaceBetween={0}
      navigation
      // pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      speed={1000} // Increased speed for slower transition
    >
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/photos/Introducing-Our-Newest-Service-01.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                INTRODUCING OUR NEWEST SERVICE
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-06.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/photos/Introducing-Our-Newest-Service-03.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Wet &amp; Dry Abrasive Technologies
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-19.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-20.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-22.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-28.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-33.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-36.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex min-h-[76vh] w-full justify-center pt-[100px] overflow-hidden">
          <Image
            src="/gallery/Industrial-38.jpg"
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
          <div className="relative flex justify-center lg:w-3/4 w-5/6 text-white">
            <div className="text-center">
              <h2 className="mb-[15px] text-4xl text-shadow mt-[-8px] font-aspira-thin uppercase">
                Sandblasting &amp; Painting in Colorado
              </h2>
              <div className="" style={{ height: 290 }}></div>
              <Image
                src="/photos/BlastCraft-Sandblasting-Paint-Logo.PNG"
                alt="Paint Innovators Industrial"
                style={{ objectFit: "cover" }}
                className="relative mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarouselNewService;
