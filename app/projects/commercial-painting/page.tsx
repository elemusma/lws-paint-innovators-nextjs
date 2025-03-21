"use client";
import ContentBlock from "@/app/components/content-block";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { Link } from "lucide-react";
// import * as motion from "motion/react-client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../../styles/gallery.scss";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CommercialPaintingProjects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    {
      src: "/gallery/Commercial-Painting-01.jpg",
      alt: "Commercial Paintin 01",
    },
    {
      src: "/gallery/Commercial-Painting-02.jpg",
      alt: "Commercial Paintin 02",
    },
    {
      src: "/gallery/Commercial-Painting-03.jpg",
      alt: "Commercial Paintin 03",
    },
    {
      src: "/gallery/Commercial-Painting-04.jpg",
      alt: "Commercial Paintin 04",
    },
    {
      src: "/gallery/Commercial-Painting-05.jpg",
      alt: "Commercial Paintin 05",
    },
    {
      src: "/gallery/Commercial-Painting-06.jpg",
      alt: "Commercial Paintin 06",
    },
    {
      src: "/gallery/Commercial-Painting-07.jpg",
      alt: "Commercial Paintin 07",
    },
    {
      src: "/gallery/Commercial-Painting-08-Rectangular.jpg",
      alt: "Commercial Paintin 08",
    },
    {
      src: "/gallery/Commercial-Painting-09.jpg",
      alt: "Commercial Paintin 09",
    },
    {
      src: "/gallery/Commercial-Painting-10-Rectangular.jpg",
      alt: "Commercial Paintin 10",
    },
    {
      src: "/gallery/Commercial-Painting-11.jpg",
      alt: "Commercial Paintin 11",
    },
    {
      src: "/gallery/Commercial-Painting-12.jpg",
      alt: "Commercial Paintin 12",
    },
    {
      src: "/gallery/Commercial-Painting-13.jpg",
      alt: "Commercial Paintin 13",
    },
    {
      src: "/gallery/Commercial-Painting-14-Rectangular.jpg",
      alt: "Commercial Paintin 14",
    },
    {
      src: "/gallery/Commercial-Painting-15-Rectangular.jpg",
      alt: "Commercial Paintin 15",
    },
    {
      src: "/gallery/Commercial-Painting-16.jpg",
      alt: "Commercial Paintin 16",
    },
    {
      src: "/gallery/Commercial-Painting-17.jpg",
      alt: "Commercial Paintin 17",
    },
    {
      src: "/gallery/Commercial-Painting-18.jpg",
      alt: "Commercial Paintin 18",
    },
    {
      src: "/gallery/Commercial-Painting-19.jpg",
      alt: "Commercial Paintin 19",
    },
    {
      src: "/gallery/Commercial-Painting-20.jpg",
      alt: "Commercial Paintin 20",
    },
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-2025-12.jpg"}
              alt="Wall paper removal"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            <div
              className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
              }}
            ></div>
          </>
        }
      >
        <div className="relative">
          <h1 className="md:text-6xl text-5xl uppercase font-aspira-light text-shadow">
            Commercial Painting Projects
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">Office</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Rental Property</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Building</span>
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
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
          {[17, 18, 19].map((i) => (
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
