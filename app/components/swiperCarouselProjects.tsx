"use client";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles/swiper-projects.scss";
import "../styles/swiper.scss";

export interface Slide {
  imageSrc: string;
  imageAlt?: string;
}

export interface SwiperCarouselProps {
  slides: Slide[];
  sliderId?: string;
}

const SwiperCarouselProjects: React.FC<SwiperCarouselProps> = ({ slides }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  // Prepare slides for the lightbox (each slide requires at least a src and alt)
  const lightboxSlides = slides.map((slide) => ({
    src: slide.imageSrc,
    alt: slide.imageAlt || "Slide Image",
  }));

  return (
    <>
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
        // Uncomment autoplay if needed:
        // autoplay={{ delay: 6000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper !static overflow-hidden !mx-[50px]"
        wrapperClass="hello-there-again"
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
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                width={300}
                height={500}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxOpen && (
        <>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={lightboxSlides}
            index={photoIndex}
          />
        </>
      )}
    </>
  );
};

export default SwiperCarouselProjects;
