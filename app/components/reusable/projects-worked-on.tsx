"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContentBlock from "../content-block";
// import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "../globals.js"; // Adjust path as needed

export interface Slide {
  imageSrc: string;
  imageAlt?: string;
}

export interface SwiperCarouselPropsResidentialProjects {
  ResidentialProjectsImages: Slide[];
  sliderId?: string;
}
export interface SwiperCarouselPropsCommercialProjects {
  CommercialProjectsImages: Slide[];
  sliderId?: string;
}
export interface SwiperCarouselPropsIndustrialProjects {
  IndustrialProjectsImages: Slide[];
  sliderId?: string;
}

export default function ProjectsWorkedOn() {
  // Create refs for each Swiper instance
  // const resSwiperRef = useRef<any>(null);
  // const commSwiperRef = useRef<any>(null);
  // const indSwiperRef = useRef<any>(null);

  // Use &apos;typeof&apos; to get the type of Swiper
  // const resSwiperRef = useRef<typeof Swiper | null>(null);
  // const commSwiperRef = useRef<typeof Swiper | null>(null);
  // const indSwiperRef = useRef<typeof Swiper | null>(null);
  const resSwiperRef = useRef<SwiperRef | null>(null); // Use SwiperRef
  const commSwiperRef = useRef<SwiperRef | null>(null); // Use SwiperRef
  const indSwiperRef = useRef<SwiperRef | null>(null); // Use SwiperRef

  useEffect(() => {
    // base delay for the first slider (3000ms)
    // then, add an offset for the second (200ms) and third (400ms) sliders.
    const baseDelay = 3000;
    const interval = setInterval(() => {
      // trigger the first slider immediately at each cycle
      // resSwiperRef.current?.slideNext();
      resSwiperRef.current?.swiper.slideNext(); // access swiper property

      // trigger the second slider after 200ms
      setTimeout(() => {
        commSwiperRef.current?.swiper.slideNext();
      }, 500);

      setTimeout(() => {
        indSwiperRef.current?.swiper.slideNext();
      }, 1000);
    }, baseDelay);

    return () => clearInterval(interval);
  });

  // Separate lightbox states for each swiper
  const [residentialLightbox, setResidentialLightbox] = useState(false);
  const [commercialLightbox, setCommercialLightbox] = useState(false);
  const [industrialLightbox, setIndustrialLightbox] = useState(false);

  // Separate photo indices for each swiper
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);
  const [industrialIndex, setIndustrialIndex] = useState(0);

  // Open lightbox functions for each swiper
  const openResidentialLightbox = (index: number) => {
    setResidentialIndex(index);
    setResidentialLightbox(true);
  };

  const openCommercialLightbox = (index: number) => {
    setCommercialIndex(index);
    setCommercialLightbox(true);
  };

  const openIndustrialLightbox = (index: number) => {
    setIndustrialIndex(index);
    setIndustrialLightbox(true);
  };

  // Prepare slides for Lightbox
  const residentialLightboxSlides = ResidentialProjectsImages.map((slide) => ({
    src: slide.imageSrc,
    alt: slide.imageAlt || "Slide Image",
  }));

  const commercialLightboxSlides = CommercialProjectsImages.map((slide) => ({
    src: slide.imageSrc,
    alt: slide.imageAlt || "Slide Image",
  }));

  const industrialLightboxSlides = IndustrialProjectsImages.map((slide) => ({
    src: slide.imageSrc,
    alt: slide.imageAlt || "Slide Image",
  }));

  return (
    <>
      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName=""
        columnClassName="flex flex-wrap"
      >
        <div className="lg:w-3/4 w-full m-auto text-center pb-10">
          <h2 className="font-aspira-light md:text-5xl text-4xl uppercase">
            Commercial &amp; Industrial Projects We&apos;ve Worked On
          </h2>
        </div>

        {/* Commercial Projects */}
        <div className="lg:w-1/3 md:w-1/2 w-full p-5">
          <div className="box-shadow">
            <div className="w-full">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={false}
                // navigation
                // pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => (commSwiperRef.current = { swiper })}
                className="mySwiper w-full overflow-hidden"
              >
                {CommercialProjectsImages.map((slide, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="relative cursor-pointer"
                      onClick={() => openCommercialLightbox(index)}
                      style={{ minWidth: "100%" }}
                    >
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt || "Slide Image"}
                        style={{ objectFit: "cover", height: "200px" }}
                        className="w-full h-full"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Commercial Lightbox */}
            <Lightbox
              open={commercialLightbox}
              close={() => setCommercialLightbox(false)}
              slides={commercialLightboxSlides}
              index={commercialIndex}
            />

            <div className="bg-accent-primary text-white">
              <h3 className="font-aspira-bold uppercase text-center text-2xl">
                Commercial
              </h3>
            </div>
            <div className="bg-[#e5e5e5] p-5">
              <p>
                Paint Innovators handles new construction and remodel projects
                and offers additional contractor services such as epoxy floors,
                concrete staining, pressure washing, trim and siding painting,
                and gutter painting to meet all your commercial needs.
              </p>
            </div>
          </div>
        </div>

        {/* Industrial Projects */}
        <div className="lg:w-1/3 md:w-1/2 w-full p-5">
          <div className="box-shadow">
            <div className="w-full">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={false}
                // navigation
                // pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => (indSwiperRef.current = { swiper })}
                className="mySwiper w-full overflow-hidden"
              >
                {IndustrialProjectsImages.map((slide, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="relative cursor-pointer"
                      onClick={() => openIndustrialLightbox(index)}
                      style={{ minWidth: "100%" }}
                    >
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt || "Slide Image"}
                        style={{ objectFit: "cover", height: "200px" }}
                        className="w-full h-full"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Industrial Lightbox */}
            <Lightbox
              open={industrialLightbox}
              close={() => setIndustrialLightbox(false)}
              slides={industrialLightboxSlides}
              index={industrialIndex}
            />

            <div className="bg-accent-primary text-white">
              <h3 className="font-aspira-bold uppercase text-center text-2xl">
                Industrial
              </h3>
            </div>
            <div className="bg-[#e5e5e5] p-5">
              <p>
                Paint Innovators&apos; protective coatings are designed to solve
                corrosion problems in various industrial applications, including
                commercial heating, cooling, refrigeration, and other components
                regularly exposed to corrosive conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Residential Projects */}
        <div className="lg:w-1/3 md:w-1/2 w-full p-5">
          <div className="box-shadow">
            <div className="w-full">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={false}
                // navigation
                // pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => (resSwiperRef.current = { swiper })}
                className="mySwiper w-full overflow-hidden"
              >
                {ResidentialProjectsImages.map(
                  (slide: Slide, index: number) => (
                    <SwiperSlide key={index} className="w-full">
                      <div
                        className="relative cursor-pointer"
                        onClick={() => openResidentialLightbox(index)}
                        style={{ minWidth: "100%" }}
                      >
                        <Image
                          src={slide.imageSrc}
                          alt={slide.imageAlt || "Slide Image"}
                          style={{ objectFit: "cover", height: "200px" }}
                          className="w-full h-full"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
            {/* Residential Lightbox */}
            <Lightbox
              open={residentialLightbox}
              close={() => setResidentialLightbox(false)}
              slides={residentialLightboxSlides}
              index={residentialIndex}
            />

            <div className="bg-accent-primary text-white">
              <h3 className="font-aspira-bold uppercase text-center text-2xl">
                Residential
              </h3>
            </div>
            <div className="bg-[#e5e5e5] p-5">
              <p>
                We also provide color consultation and custom painting to
                perfectly match your style and personality. Beyond painting, we
                offer services like drywall repair, popcorn ceiling removal,
                wallpaper removal, and deck coating to ensure a flawless finish
                for your home.
              </p>
            </div>
          </div>
        </div>
      </ContentBlock>
    </>
  );
}
