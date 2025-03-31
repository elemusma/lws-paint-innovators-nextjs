import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import "../../styles/gallery.scss";
import IndustrialPaintingProjectsGallery from "./industrialGallery";

export const metadata: Metadata = {
  title:
    "Industrial Painting Services - Graffiti, Concrete & Equipment Coatings - Paint Innovators",
  description:
    "Transform your commercial space with expert painting services. We specialize in office, rental property, and building projects. Get a free estimate today.",
  openGraph: {
    title:
      "Industrial Painting Services - Graffiti, Concrete & Equipment Coatings - Paint Innovators",
    description:
      "Transform your commercial space with expert painting services. We specialize in office, rental property, and building projects. Get a free estimate today.",
    url: `${Website}/projects/industrial`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/photos/Introducing-Our-Newest-Service-03.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Industrial Painting Services - Graffiti, Concrete & Equipment Coatings - Paint Innovators",
      },
    ],
  },
};
export default function IndustrialProjects() {
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
              src={"/photos/Introducing-Our-Newest-Service-03.jpg"}
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
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold text-shadow">
            Industrial Projects
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">GRAFFITI</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">CONCRETE</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">EQUIPMENT</span>
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <IndustrialPaintingProjectsGallery />
    </>
  );
}
