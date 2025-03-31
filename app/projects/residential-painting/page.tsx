import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import "../../styles/gallery.scss";
import ResidentialPaintingProjectsGallery from "./residentialPaintingGallery";

export const metadata: Metadata = {
  title:
    "Residential Painting Projects - Interior, Exterior, Trim, Siding & Molding - Paint Innovators",
  description:
    "Specializing in residential painting projects, including interior & exterior, trim, siding, molding, sheds, and more. Get a free estimate today.",
  openGraph: {
    title:
      "Residential Painting Projects - Interior, Exterior, Trim, Siding & Molding - Paint Innovators",
    description:
      "Specializing in residential painting projects, including interior & exterior, trim, siding, molding, sheds, and more. Get a free estimate today.",
    url: `${Website}/projects/residential-painting`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/services/Services-Interior-Painting-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Residential Painting Projects - Interior, Exterior, Trim, Siding & Molding - Paint Innovators",
      },
    ],
  },
};

export default function ResidentialPaintingProjects() {
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
              src={"/services/Services-Interior-Painting-01.jpg"}
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
            Residential Painting Projects
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">Interior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Exterior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Home</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Shed</span>
            <br></br>
            <span className="text-shadow">Trim</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Siding</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Molding</span>
          </h2>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <ResidentialPaintingProjectsGallery />
    </>
  );
}
