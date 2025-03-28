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

export default function InteriorExteriorPaintingProjects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    {
      src: "/gallery/Interior-Exterior-Painting-01.jpg",
      alt: "Interior & Exterior Painting Projects 00",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-02.jpg",
      alt: "Interior & Exterior Painting Projects 01",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-03.jpg",
      alt: "Interior & Exterior Painting Projects 02",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-04.jpg",
      alt: "Interior & Exterior Painting Projects 03",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-05.jpg",
      alt: "Interior & Exterior Painting Projects 04",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-06.jpg",
      alt: "Interior & Exterior Painting Projects 05",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-07.jpg",
      alt: "Interior & Exterior Painting Projects 06",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-08.jpg",
      alt: "Interior & Exterior Painting Projects 07",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-09.jpg",
      alt: "Interior & Exterior Painting Projects 08",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-10.jpg",
      alt: "Interior & Exterior Painting Projects 09",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-11.jpg",
      alt: "Interior & Exterior Painting Projects 10",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-12.jpg",
      alt: "Interior & Exterior Painting Projects 11",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-13.jpg",
      alt: "Interior & Exterior Painting Projects 12",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-14.jpg",
      alt: "Interior & Exterior Painting Projects 13",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-15.jpg",
      alt: "Interior & Exterior Painting Projects 14",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-16.jpg",
      alt: "Interior & Exterior Painting Projects 15",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-17.jpg",
      alt: "Interior & Exterior Painting Projects 16",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-18.jpg",
      alt: "Interior & Exterior Painting Projects 17",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-19.jpg",
      alt: "Interior & Exterior Painting Projects 18",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-20.jpg",
      alt: "Interior & Exterior Painting Projects 19",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-21.jpg",
      alt: "Interior & Exterior Painting Projects 20",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-22.jpg",
      alt: "Interior & Exterior Painting Projects 21",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-23.jpg",
      alt: "Interior & Exterior Painting Projects 22",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-24.jpg",
      alt: "Interior & Exterior Painting Projects 23",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-25.jpg",
      alt: "Interior & Exterior Painting Projects 24",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-26.jpg",
      alt: "Interior & Exterior Painting Projects 25",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-27.jpg",
      alt: "Interior & Exterior Painting Projects 26",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-28.jpg",
      alt: "Interior & Exterior Painting Projects 27",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-29.jpg",
      alt: "Interior & Exterior Painting Projects 28",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-30.jpg",
      alt: "Interior & Exterior Painting Projects 29",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-31.jpg",
      alt: "Interior & Exterior Painting Projects 30",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-32.jpg",
      alt: "Interior & Exterior Painting Projects 31",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-33.jpg",
      alt: "Interior & Exterior Painting Projects 32",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-34.jpg",
      alt: "Interior & Exterior Painting Projects 33",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-35.jpg",
      alt: "Interior & Exterior Painting Projects 34",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-36.jpg",
      alt: "Interior & Exterior Painting Projects 35",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-37.jpg",
      alt: "Interior & Exterior Painting Projects 36",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-38.jpg",
      alt: "Interior & Exterior Painting Projects 37",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-39.jpg",
      alt: "Interior & Exterior Painting Projects 38",
    },
    {
      src: "/gallery/Interior-Exterior-Painting-40.jpg",
      alt: "Interior & Exterior Painting Projects 39",
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
              src={"/services/Services-Exterior-Painting.jpg"}
              alt="Interior & Exterior Painting Projects"
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
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold text-shadow">
            Interior &amp; Exterior Painting Projects
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">Interior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Exterior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Doors</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Cabinets</span>
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
