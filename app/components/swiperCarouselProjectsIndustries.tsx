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
import "../styles/industries.scss";
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

const SwiperCarouselProjectsIndustries: React.FC<SwiperCarouselProps> = ({
  slides,
}) => {
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
        spaceBetween={0}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
        }}
        // Uncomment autoplay if needed:
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper !static overflow-hidden"
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
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
                width={1000}
                height={1000}
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

export default SwiperCarouselProjectsIndustries;
