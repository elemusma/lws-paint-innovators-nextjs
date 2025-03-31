"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
export default function ResidentialPaintingProjectsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    {
      src: "/gallery/Residential-Painting-01.jpg",
      alt: "Residential Painting 01",
    },
    {
      src: "/gallery/Residential-Painting-02.jpg",
      alt: "Residential Painting 02",
    },
    {
      src: "/gallery/Residential-Painting-03.jpg",
      alt: "Residential Painting 03",
    },
    {
      src: "/gallery/Residential-Painting-04.jpg",
      alt: "Residential Painting 04",
    },
    {
      src: "/gallery/Residential-Painting-05.jpg",
      alt: "Residential Painting 05",
    },
    {
      src: "/gallery/Residential-Painting-06.jpg",
      alt: "Residential Painting 06",
    },
    {
      src: "/gallery/Residential-Painting-07.jpg",
      alt: "Residential Painting 07",
    },
    {
      src: "/gallery/Residential-Painting-08.jpg",
      alt: "Residential Painting 08",
    },
    {
      src: "/gallery/Residential-Painting-09.jpg",
      alt: "Residential Painting 09",
    },
    {
      src: "/gallery/Residential-Painting-10.jpg",
      alt: "Residential Painting 10",
    },
    {
      src: "/gallery/Residential-Painting-11.jpg",
      alt: "Residential Painting 11",
    },
    {
      src: "/gallery/Residential-Painting-12.jpg",
      alt: "Residential Painting 12",
    },
    {
      src: "/gallery/Residential-Painting-13.jpg",
      alt: "Residential Painting 13",
    },
    {
      src: "/gallery/Residential-Painting-14.jpg",
      alt: "Residential Painting 14",
    },
    {
      src: "/gallery/Residential-Painting-15.jpg",
      alt: "Residential Painting 15",
    },
    {
      src: "/gallery/Residential-Painting-16.jpg",
      alt: "Residential Painting 16",
    },
    {
      src: "/gallery/Residential-Painting-17.jpg",
      alt: "Residential Painting 17",
    },
    {
      src: "/gallery/Residential-Painting-18.jpg",
      alt: "Residential Painting 18",
    },
    {
      src: "/gallery/Residential-Painting-19.jpg",
      alt: "Residential Painting 19",
    },
    {
      src: "/gallery/Residential-Painting-20.jpg",
      alt: "Residential Painting 20",
    },
    {
      src: "/gallery/Residential-Painting-21.jpg",
      alt: "Residential Painting 21",
    },
    {
      src: "/gallery/Residential-Painting-22.jpg",
      alt: "Residential Painting 22",
    },
    {
      src: "/gallery/Residential-Painting-23.jpg",
      alt: "Residential Painting 23",
    },
    {
      src: "/gallery/Residential-Painting-24.jpg",
      alt: "Residential Painting 24",
    },
    {
      src: "/gallery/Residential-Painting-25.jpg",
      alt: "Residential Painting 25",
    },
    {
      src: "/gallery/Residential-Painting-26.jpg",
      alt: "Residential Painting 26",
    },
    {
      src: "/gallery/Residential-Painting-27.jpg",
      alt: "Residential Painting 27",
    },
    {
      src: "/gallery/Residential-Painting-28.jpg",
      alt: "Residential Painting 28",
    },
    {
      src: "/gallery/Residential-Painting-29.jpg",
      alt: "Residential Painting 29",
    },
    {
      src: "/gallery/Residential-Painting-30.jpg",
      alt: "Residential Painting 30",
    },
    {
      src: "/gallery/Residential-Painting-31.jpg",
      alt: "Residential Painting 31",
    },
    {
      src: "/gallery/Residential-Painting-32.jpg",
      alt: "Residential Painting 32",
    },
    {
      src: "/gallery/Residential-Painting-33.jpg",
      alt: "Residential Painting 33",
    },
    {
      src: "/gallery/Residential-Painting-34.jpg",
      alt: "Residential Painting 34",
    },
    {
      src: "/gallery/Residential-Painting-35.jpg",
      alt: "Residential Painting 35",
    },
    {
      src: "/gallery/Residential-Painting-36.jpg",
      alt: "Residential Painting 36",
    },
    {
      src: "/gallery/Residential-Painting-37.jpg",
      alt: "Residential Painting 37",
    },
    {
      src: "/gallery/Residential-Painting-38.jpg",
      alt: "Residential Painting 38",
    },
    {
      src: "/gallery/Residential-Painting-39.jpg",
      alt: "Residential Painting 39",
    },
    {
      src: "/gallery/Residential-Painting-40.jpg",
      alt: "Residential Painting 40",
    },
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto py-12 px-4">
        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around my-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full h-[350px] px-2 cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-around my-4">
          {[3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 lg:w-1/4 md:w-1/2 w-full px-2 h-[350px] cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around my-4">
          {[7, 8, 9].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full h-[350px] px-2 cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-around my-4">
          {[10, 11, 12, 13].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 lg:w-1/4 md:w-1/2 w-full px-2 h-[350px] cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around my-4">
          {[14, 15, 16].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full h-[350px] px-2 cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-around my-4">
          {[17, 18, 19, 20].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 lg:w-1/4 md:w-1/2 w-full px-2 h-[350px] cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around my-4">
          {[21, 22, 23].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full h-[350px] px-2 cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-around my-4">
          {[24, 25, 26, 27].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 lg:w-1/4 md:w-1/2 w-full px-2 h-[350px] cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around my-4">
          {[28, 29, 30].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full h-[350px] px-2 cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-around my-4">
          {[31, 32, 33, 34].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 lg:w-1/4 md:w-1/2 w-full px-2 h-[350px] cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around my-4">
          {[35, 36, 37].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full h-[350px] px-2 cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-around my-4">
          {[38, 39].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/2 w-full px-2 h-[350px] cursor-pointer hover-img"
              onClick={() => openLightbox(i)}
            >
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative h-full w-full will-change-transform"
              >
                <Image
                  src={galleryImages[i].src}
                  alt={galleryImages[i].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Lightbox Component */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryImages.map(({ src, alt }) => ({ src, alt }))}
          index={photoIndex}
        />
      </div>
    </>
  );
}
