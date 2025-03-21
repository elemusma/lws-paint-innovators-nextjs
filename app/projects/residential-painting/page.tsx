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

export default function ResidentialPaintingProjects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    { src: "/gallery/Residential-Painting-01.jpg", alt: "Hero Image" },
    { src: "/gallery/Residential-Painting-02.jpg", alt: "Grid Image 1" },
    { src: "/gallery/Residential-Painting-03.jpg", alt: "Grid Image 2" },
    { src: "/gallery/Residential-Painting-04.jpg", alt: "Grid Image 3" },
    { src: "/gallery/Residential-Painting-05.jpg", alt: "Full Width Image" },
    { src: "/gallery/Residential-Painting-06.jpg", alt: "Column Image 1" },
    { src: "/gallery/Residential-Painting-07.jpg", alt: "Column Image 2" },
    { src: "/gallery/Residential-Painting-08.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-09.jpg", alt: "Grid Image 1" },
    { src: "/gallery/Residential-Painting-10.jpg", alt: "Grid Image 2" },
    { src: "/gallery/Residential-Painting-11.jpg", alt: "Grid Image 3" },
    { src: "/gallery/Residential-Painting-12.jpg", alt: "Full Width Image" },
    { src: "/gallery/Residential-Painting-13.jpg", alt: "Column Image 1" },
    { src: "/gallery/Residential-Painting-14.jpg", alt: "Column Image 2" },
    { src: "/gallery/Residential-Painting-15.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-16.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-17.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-18.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-19.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-20.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-21.jpg", alt: "Hero Image" },
    { src: "/gallery/Residential-Painting-22.jpg", alt: "Grid Image 1" },
    { src: "/gallery/Residential-Painting-23.jpg", alt: "Grid Image 2" },
    { src: "/gallery/Residential-Painting-24.jpg", alt: "Grid Image 3" },
    { src: "/gallery/Residential-Painting-25.jpg", alt: "Full Width Image" },
    { src: "/gallery/Residential-Painting-26.jpg", alt: "Column Image 1" },
    { src: "/gallery/Residential-Painting-27.jpg", alt: "Column Image 2" },
    { src: "/gallery/Residential-Painting-28.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-29.jpg", alt: "Grid Image 1" },
    { src: "/gallery/Residential-Painting-30.jpg", alt: "Grid Image 2" },
    { src: "/gallery/Residential-Painting-31.jpg", alt: "Grid Image 3" },
    { src: "/gallery/Residential-Painting-32.jpg", alt: "Full Width Image" },
    { src: "/gallery/Residential-Painting-33.jpg", alt: "Column Image 1" },
    { src: "/gallery/Residential-Painting-34.jpg", alt: "Column Image 2" },
    { src: "/gallery/Residential-Painting-35.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-36.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-37.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-38.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-39.jpg", alt: "Column Image 3" },
    { src: "/gallery/Residential-Painting-40.jpg", alt: "Column Image 3" },
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
              src={"/work/Paint-Innovators-NWA-Homes.jpg"}
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
          <h1 className="text-6xl uppercase font-aspira-light text-shadow">
            Residential Painting Projects
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">Interior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Exterior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Home</span>
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Shed</span>
            <br></br>
            <span className="text-shadow">Trim</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Siding</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Molding</span>
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <div className="max-w-screen-lg mx-auto py-12 px-4">
        {/* Example: Full Width Image */}
        <div
          className="relative w-full h-[400px] mb-4 cursor-pointer hover-img"
          onClick={() => openLightbox(0)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around gap-4 my-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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

        {/* Example: Another full-width image */}
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(4)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[5, 6, 7].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(8)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[8].src}
              alt={galleryImages[8].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[9, 10, 11].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(12)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[12].src}
              alt={galleryImages[12].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[13, 14, 15].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        {/* Example: Full Width Image */}
        <div
          className="relative w-full h-[400px] mb-4 cursor-pointer hover-img"
          onClick={() => openLightbox(16)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[16].src}
              alt={galleryImages[16].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: 3-column Grid */}
        <div className="flex flex-wrap justify-around gap-4 my-4">
          {[17, 18, 19].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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

        {/* Example: Another full-width image */}
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(20)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[20].src}
              alt={galleryImages[20].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[21, 22, 23].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(24)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[24].src}
              alt={galleryImages[24].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[25, 26, 27].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(28)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[28].src}
              alt={galleryImages[28].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[29, 30, 31].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(32)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[32].src}
              alt={galleryImages[32].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[33, 34, 35].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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
        <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(36)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[36].src}
              alt={galleryImages[36].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Example: Bottom 3-column section */}
        <div className="flex flex-wrap justify-around gap-4">
          {[37, 38, 39].map((i) => (
            <div
              key={i}
              className="relative w-[32%] h-[250px] cursor-pointer hover-img"
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

        {/* <div
          className="relative w-full h-[300px] my-4 cursor-pointer hover-img"
          onClick={() => openLightbox(40)}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-full w-full will-change-transform"
          >
            <Image
              src={galleryImages[40].src}
              alt={galleryImages[40].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div> */}

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
