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
export default function OtherContractorServicesPaintingProjectsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    {
      src: "/gallery/Contractor-Services-01.jpg",
      alt: "Other Contractor Services 01",
    },
    {
      src: "/gallery/Contractor-Services-02.jpg",
      alt: "Other Contractor Services 02",
    },
    {
      src: "/gallery/Contractor-Services-03.jpg",
      alt: "Other Contractor Services 03",
    },
    {
      src: "/gallery/Contractor-Services-04.jpg",
      alt: "Other Contractor Services 04",
    },
    {
      src: "/gallery/Contractor-Services-05.jpg",
      alt: "Other Contractor Services 05",
    },
    {
      src: "/gallery/Contractor-Services-06.jpg",
      alt: "Other Contractor Services 06",
    },
    {
      src: "/gallery/Contractor-Services-07.jpg",
      alt: "Other Contractor Services 07",
    },
    {
      src: "/gallery/Contractor-Services-08.jpg",
      alt: "Other Contractor Services 08",
    },
    {
      src: "/gallery/Contractor-Services-09.jpg",
      alt: "Other Contractor Services 09",
    },
    {
      src: "/gallery/Contractor-Services-10.jpg",
      alt: "Other Contractor Services 10",
    },
    {
      src: "/gallery/Contractor-Services-11.jpg",
      alt: "Other Contractor Services 11",
    },
    {
      src: "/gallery/Contractor-Services-12.jpg",
      alt: "Other Contractor Services 12",
    },
    {
      src: "/gallery/Contractor-Services-13.jpg",
      alt: "Other Contractor Services 13",
    },
    {
      src: "/gallery/Contractor-Services-14.jpg",
      alt: "Other Contractor Services 14",
    },
    {
      src: "/gallery/Contractor-Services-15.jpg",
      alt: "Other Contractor Services 15",
    },
    {
      src: "/gallery/Contractor-Services-16.jpg",
      alt: "Other Contractor Services 16",
    },
    {
      src: "/gallery/Contractor-Services-17.jpg",
      alt: "Other Contractor Services 17",
    },
    {
      src: "/gallery/Contractor-Services-18.jpg",
      alt: "Other Contractor Services 18",
    },
    {
      src: "/gallery/Contractor-Services-19.jpg",
      alt: "Other Contractor Services 19",
    },
    {
      src: "/gallery/Contractor-Services-20.jpg",
      alt: "Other Contractor Services 20",
    },
    {
      src: "/gallery/Contractor-Services-21.jpg",
      alt: "Other Contractor Services 21",
    },
    {
      src: "/gallery/Contractor-Services-22.jpg",
      alt: "Other Contractor Services 22",
    },
    {
      src: "/gallery/Contractor-Services-23.jpg",
      alt: "Other Contractor Services 23",
    },
    {
      src: "/gallery/Contractor-Services-24.jpg",
      alt: "Other Contractor Services 24",
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
