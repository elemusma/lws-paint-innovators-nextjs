import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import "../../styles/gallery.scss";
import OtherContractorServicesPaintingProjectsGallery from "./otherContractorServicesGallery";

export const metadata: Metadata = {
  title:
    "Other Contractor Services - Cabinets, Tables, Epoxy Floors & Deck Coatings - Paint Innovators",
  description:
    "Offering a range of contractor services including custom cabinets, tables, epoxy flooring, and industrial & deck coatings. Get a free estimate today.",
  openGraph: {
    title:
      "Other Contractor Services - Cabinets, Tables, Epoxy Floors & Deck Coatings - Paint Innovators",
    description:
      "Offering a range of contractor services including custom cabinets, tables, epoxy flooring, and industrial & deck coatings. Get a free estimate today.",
    url: `${Website}/projects/other-contractor-services`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-Commercial-02.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Other Contractor Services - Cabinets, Tables, Epoxy Floors & Deck Coatings - Paint Innovators",
      },
    ],
  },
};
export default function OtherContractingPaintingProjects() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center px-4"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-Commercial-02.jpg"}
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
            Other Contractor Services
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">Cabinets</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Tables</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Epoxy Floors</span> <br></br>
            <span className="text-shadow">Industrial &amp; Deck Coatings</span>
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <OtherContractorServicesPaintingProjectsGallery />
    </>
  );
}
