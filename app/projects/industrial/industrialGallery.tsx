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
export default function IndustrialPaintingProjectsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    {
      src: "/gallery/Industrial-01.jpg",
      alt: "Industrial Projects Paint Innovators 01",
    },
    {
      src: "/gallery/Industrial-02.jpg",
      alt: "Industrial Projects Paint Innovators 02",
    },
    {
      src: "/gallery/Industrial-03.jpg",
      alt: "Industrial Projects Paint Innovators 03",
    },
    {
      src: "/gallery/Industrial-04.jpg",
      alt: "Industrial Projects Paint Innovators 04",
    },
    {
      src: "/gallery/Industrial-05.jpg",
      alt: "Industrial Projects Paint Innovators 05",
    },
    {
      src: "/gallery/Industrial-06.jpg",
      alt: "Industrial Projects Paint Innovators 06",
    },
    {
      src: "/gallery/Industrial-07.jpg",
      alt: "Industrial Projects Paint Innovators 07",
    },
    {
      src: "/gallery/Industrial-08.jpg",
      alt: "Industrial Projects Paint Innovators 08",
    },
    {
      src: "/gallery/Industrial-09.jpg",
      alt: "Industrial Projects Paint Innovators 09",
    },
    {
      src: "/gallery/Industrial-10.jpg",
      alt: "Industrial Projects Paint Innovators 10",
    },
    {
      src: "/gallery/Industrial-11.jpg",
      alt: "Industrial Projects Paint Innovators 11",
    },
    {
      src: "/gallery/Industrial-12.jpg",
      alt: "Industrial Projects Paint Innovators 12",
    },
    {
      src: "/gallery/Industrial-13.jpg",
      alt: "Industrial Projects Paint Innovators 13",
    },
    {
      src: "/gallery/Industrial-14.jpg",
      alt: "Industrial Projects Paint Innovators 14",
    },
    {
      src: "/gallery/Industrial-15.jpg",
      alt: "Industrial Projects Paint Innovators 15",
    },
    {
      src: "/gallery/Industrial-16.jpg",
      alt: "Industrial Projects Paint Innovators 16",
    },
    {
      src: "/gallery/Industrial-17.jpg",
      alt: "Industrial Projects Paint Innovators 17",
    },
    {
      src: "/gallery/Industrial-18.jpg",
      alt: "Industrial Projects Paint Innovators 18",
    },
    {
      src: "/gallery/Industrial-19.jpg",
      alt: "Industrial Projects Paint Innovators 19",
    },
    {
      src: "/gallery/Industrial-20.jpg",
      alt: "Industrial Projects Paint Innovators 20",
    },
    {
      src: "/gallery/Industrial-21.jpg",
      alt: "Industrial Projects Paint Innovators 01",
    },
    {
      src: "/gallery/Industrial-22.jpg",
      alt: "Industrial Projects Paint Innovators 22",
    },
    {
      src: "/gallery/Industrial-23.jpg",
      alt: "Industrial Projects Paint Innovators 23",
    },
    {
      src: "/gallery/Industrial-24.jpg",
      alt: "Industrial Projects Paint Innovators 24",
    },
    {
      src: "/gallery/Industrial-25.jpg",
      alt: "Industrial Projects Paint Innovators 25",
    },
    {
      src: "/gallery/Industrial-26.jpg",
      alt: "Industrial Projects Paint Innovators 26",
    },
    {
      src: "/gallery/Industrial-27.jpg",
      alt: "Industrial Projects Paint Innovators 27",
    },
    {
      src: "/gallery/Industrial-28.jpg",
      alt: "Industrial Projects Paint Innovators 28",
    },
    {
      src: "/gallery/Industrial-29.jpg",
      alt: "Industrial Projects Paint Innovators 29",
    },
    {
      src: "/gallery/Industrial-30.jpg",
      alt: "Industrial Projects Paint Innovators 30",
    },
    {
      src: "/gallery/Industrial-31.jpg",
      alt: "Industrial Projects Paint Innovators 31",
    },
    {
      src: "/gallery/Industrial-32.jpg",
      alt: "Industrial Projects Paint Innovators 32",
    },
    {
      src: "/gallery/Industrial-33.jpg",
      alt: "Industrial Projects Paint Innovators 33",
    },
    {
      src: "/gallery/Industrial-34.jpg",
      alt: "Industrial Projects Paint Innovators 34",
    },
    {
      src: "/gallery/Industrial-35.jpg",
      alt: "Industrial Projects Paint Innovators 35",
    },
    {
      src: "/gallery/Industrial-36.jpg",
      alt: "Industrial Projects Paint Innovators 36",
    },
    {
      src: "/gallery/Industrial-37.jpg",
      alt: "Industrial Projects Paint Innovators 37",
    },
    {
      src: "/gallery/Industrial-38.jpg",
      alt: "Industrial Projects Paint Innovators 38",
    },
    {
      src: "/gallery/Industrial-39.jpg",
      alt: "Industrial Projects Paint Innovators 39",
    },
    {
      src: "/gallery/Industrial-40.jpg",
      alt: "Industrial Projects Paint Innovators 40",
    },
    {
      src: "/gallery/Industrial-41.jpg",
      alt: "Industrial Projects Paint Innovators 41",
    },
    {
      src: "/gallery/Industrial-42.jpg",
      alt: "Industrial Projects Paint Innovators 42",
    },
    {
      src: "/gallery/Industrial-43.jpg",
      alt: "Industrial Projects Paint Innovators 43",
    },
    {
      src: "/gallery/Industrial-44.jpg",
      alt: "Industrial Projects Paint Innovators 44",
    },
    {
      src: "/gallery/Industrial-45.jpg",
      alt: "Industrial Projects Paint Innovators 45",
    },
    {
      src: "/gallery/Industrial-46.jpg",
      alt: "Industrial Projects Paint Innovators 46",
    },
    {
      src: "/gallery/Industrial-47.jpg",
      alt: "Industrial Projects Paint Innovators 47",
    },
    {
      src: "/gallery/Industrial-48.jpg",
      alt: "Industrial Projects Paint Innovators 48",
    },
    {
      src: "/gallery/Industrial-49.jpg",
      alt: "Industrial Projects Paint Innovators 49",
    },
    {
      src: "/gallery/Industrial-50.jpg",
      alt: "Industrial Projects Paint Innovators 50",
    },
    {
      src: "/gallery/Industrial-51.jpg",
      alt: "Industrial Projects Paint Innovators 51",
    },
    {
      src: "/gallery/Industrial-52.jpg",
      alt: "Industrial Projects Paint Innovators 52",
    },
    {
      src: "/gallery/Industrial-53.jpg",
      alt: "Industrial Projects Paint Innovators 53",
    },
    {
      src: "/gallery/Industrial-54.jpg",
      alt: "Industrial Projects Paint Innovators 54",
    },
    {
      src: "/gallery/Industrial-55.jpg",
      alt: "Industrial Projects Paint Innovators 55",
    },
    {
      src: "/gallery/Industrial-56.jpg",
      alt: "Industrial Projects Paint Innovators 56",
    },
    {
      src: "/gallery/Industrial-57.jpg",
      alt: "Industrial Projects Paint Innovators 57",
    },
    {
      src: "/gallery/Industrial-58.jpg",
      alt: "Industrial Projects Paint Innovators 58",
    },
    {
      src: "/gallery/Industrial-59.jpg",
      alt: "Industrial Projects Paint Innovators 59",
    },
    {
      src: "/gallery/Industrial-60.jpg",
      alt: "Industrial Projects Paint Innovators 60",
    },
    {
      src: "/gallery/Industrial-61.jpg",
      alt: "Industrial Projects Paint Innovators 01",
    },
    {
      src: "/gallery/Industrial-62.jpg",
      alt: "Industrial Projects Paint Innovators 62",
    },
    {
      src: "/gallery/Industrial-63.jpg",
      alt: "Industrial Projects Paint Innovators 63",
    },
    {
      src: "/gallery/Industrial-64.jpg",
      alt: "Industrial Projects Paint Innovators 64",
    },
    {
      src: "/gallery/Industrial-65.jpg",
      alt: "Industrial Projects Paint Innovators 65",
    },
    {
      src: "/gallery/Industrial-66.jpg",
      alt: "Industrial Projects Paint Innovators 66",
    },
    {
      src: "/gallery/Industrial-67.jpg",
      alt: "Industrial Projects Paint Innovators 67",
    },
    {
      src: "/gallery/Industrial-68.jpg",
      alt: "Industrial Projects Paint Innovators 68",
    },
    {
      src: "/gallery/Industrial-69.jpg",
      alt: "Industrial Projects Paint Innovators 69",
    },
    {
      src: "/gallery/Industrial-70.jpg",
      alt: "Industrial Projects Paint Innovators 70",
    },
    {
      src: "/gallery/Industrial-71.jpg",
      alt: "Industrial Projects Paint Innovators 71",
    },
    {
      src: "/gallery/Industrial-72.jpg",
      alt: "Industrial Projects Paint Innovators 72",
    },
    {
      src: "/gallery/Industrial-73.jpg",
      alt: "Industrial Projects Paint Innovators 73",
    },
    {
      src: "/gallery/Industrial-74.jpg",
      alt: "Industrial Projects Paint Innovators 74",
    },
    {
      src: "/gallery/Industrial-75.jpg",
      alt: "Industrial Projects Paint Innovators 75",
    },
    {
      src: "/gallery/Industrial-76.jpg",
      alt: "Industrial Projects Paint Innovators 76",
    },
    {
      src: "/gallery/Industrial-77.jpg",
      alt: "Industrial Projects Paint Innovators 77",
    },
    {
      src: "/gallery/Industrial-78.jpg",
      alt: "Industrial Projects Paint Innovators 78",
    },
    {
      src: "/gallery/Industrial-79.jpg",
      alt: "Industrial Projects Paint Innovators 79",
    },
    {
      src: "/gallery/Industrial-80.jpg",
      alt: "Industrial Projects Paint Innovators 80",
    },
    {
      src: "/gallery/Industrial-81.jpg",
      alt: "Industrial Projects Paint Innovators 81",
    },
    {
      src: "/gallery/Industrial-82.jpg",
      alt: "Industrial Projects Paint Innovators 82",
    },
    {
      src: "/gallery/Industrial-83.jpg",
      alt: "Industrial Projects Paint Innovators 83",
    },
    {
      src: "/gallery/Industrial-84.jpg",
      alt: "Industrial Projects Paint Innovators 84",
    },
    {
      src: "/gallery/Industrial-85.jpg",
      alt: "Industrial Projects Paint Innovators 85",
    },
    {
      src: "/gallery/Industrial-86.jpg",
      alt: "Industrial Projects Paint Innovators 86",
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

        <div className="flex flex-wrap justify-around my-4">
          {[21, 22, 23].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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

        <div className="flex flex-wrap justify-around my-4">
          {[28, 29, 30].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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

        <div className="flex flex-wrap justify-around my-4">
          {[35, 36, 37].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[38, 39, 40, 41].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[42, 43, 44].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[45, 46, 47, 48].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[49, 50, 51].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[52, 53, 54, 55].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[56, 57, 58].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[59, 60, 61, 62].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[63, 64, 65].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[66, 67, 68, 69].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[70, 71, 72].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[73, 74, 75, 76].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[77, 78, 79].map((i) => (
            <div
              key={i}
              className="relative lg:py-0 py-2 md:w-1/3 w-full px-2 h-[350px] cursor-pointer hover-img"
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
          {[80, 81, 82, 83].map((i) => (
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

        <div className="flex flex-wrap justify-around my-4">
          {[84, 85].map((i) => (
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
