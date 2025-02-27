"use client";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContentBlock from "../content-block";

export interface Slide {
  imageSrc: string;
  imageAlt?: string;
}

export interface SwiperCarouselProps {
  slides: Slide[];
  sliderId?: string;
}

export default function ProjectsWorkedOn() {
  const slides: Slide[] = [
    { imageSrc: "/photos/Project1.jpg", imageAlt: "Project 1" },
    { imageSrc: "/photos/Project2.jpg", imageAlt: "Project 2" },
    { imageSrc: "/photos/Project3.jpg", imageAlt: "Project 3" },
    { imageSrc: "/photos/Project4.jpg", imageAlt: "Project 4" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  // Prepare slides for Lightbox
  const lightboxSlides = slides.map((slide) => ({
    src: slide.imageSrc,
    alt: slide.imageAlt || "Slide Image",
  }));

  return (
    <>
      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName=""
      >
        <div className="lg:w-full w-full text-center">
          <h2 className="font-aspira-light text-5xl uppercase">
            Projects We've Worked On
          </h2>
        </div>

        <div className="lg:w-1/3 md:w-1/2 w-full text-center box-shadow">
          <Swiper
            loop={true}
            spaceBetween={30}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 6000 }} // Enable autoplay
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper !static overflow-hidden !mx-[50px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt || "Slide Image"}
                    className="w-full h-[200px] object-cover"
                    width={300}
                    height={500}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Lightbox for fullscreen viewing */}
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={lightboxSlides}
              index={photoIndex}
            />
          )}
        </div>

        <div className="bg-accent text-white">
          <h3>Residential</h3>
        </div>
        <div className="bg-[#e5e5e5]">
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </ContentBlock>
    </>
  );
}
