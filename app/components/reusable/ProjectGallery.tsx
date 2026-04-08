"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface GalleryImage {
  imageSrc: string;
  imageAlt?: string;
  className?: string; // full control per image
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = images.map((img) => ({
    src: img.imageSrc,
    alt: img.imageAlt || "",
  }));

  return (
    <>
      <div className="flex flex-wrap px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative aspect-[4/3] cursor-pointer overflow-hidden group ${img.className || "w-full sm:w-1/2 lg:w-1/3"}`}
            onClick={() => openLightbox(index)}
          >
            <div className="p-4">
            <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={img.imageSrc}
              alt={img.imageAlt || ""}
              width={1200}
            height={900}
              className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold tracking-widest uppercase">
                View Image
              </span>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={photoIndex}
      />
    </>
  );
}