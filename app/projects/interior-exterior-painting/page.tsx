import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import "../../styles/gallery.scss";
import InteriorExteriorPaintingProjectsGallery from "./interiorExteriorPaintingGallery";

export const metadata: Metadata = {
  title:
    "Interior & Exterior Painting Services - Walls, Doors & Cabinets - Paint Innovators",
  description:
    "Transform your home or business with expert interior and exterior painting services. We specialize in walls, doors, and cabinet refinishing. Get a free estimate today.",
  openGraph: {
    title:
      "Interior & Exterior Painting Services - Walls, Doors & Cabinets - Paint Innovators",
    description:
      "Transform your home or business with expert interior and exterior painting services. We specialize in walls, doors, and cabinet refinishing. Get a free estimate today.",
    url: `${Website}/projects/interior-exterior-painting`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/website/Paint-Innovators-09.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Interior & Exterior Painting Services - Walls, Doors & Cabinets - Paint Innovators",
      },
    ],
  },
};
export default function InteriorExteriorPaintingProjects() {
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
              src={"/website/Paint-Innovators-09.jpg"}
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
      <InteriorExteriorPaintingProjectsGallery />
    </>
  );
}
