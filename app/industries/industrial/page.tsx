import ContentBlock from "@/app/components/content-block";
import { IndustrialProjectsImages, Website } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import SwiperCarouselProjectsIndustries from "@/app/components/swiperCarouselProjectsIndustries";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Industrial Painting & Blasting Services - Automotive, Marine, Fire Restoration - Paint Innovators",
  description:
    "Explore Paint Innovators' industrial painting and blasting services, including automotive, graffiti removal, marine, heavy equipment, and fire restoration projects. Get a free estimate today.",
  openGraph: {
    title:
      "Industrial Painting & Blasting Services - Automotive, Marine, Fire Restoration - Paint Innovators",
    description:
      "Explore Paint Innovators' industrial painting and blasting services, including automotive, graffiti removal, marine, heavy equipment, and fire restoration projects. Get a free estimate today.",
    url: `${Website}/industries/commercial`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/gallery/Industrial-46.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Industrial Painting & Blasting Services - Automotive, Marine, Fire Restoration - Paint Innovators",
      },
    ],
  },
};
export default function IndustriesCommercial() {
  return (
    <>
      <ContentBlock
        sectionClassName="completed-projects"
        containerClassName="mx-auto"
        rowClassName=""
        columnClassName="flex flex-wrap items-center"
      >
        <div className="md:w-1/2 w-full relative md:order-1 order-2">
          <SwiperCarouselProjectsIndustries
            slides={IndustrialProjectsImages}
            sliderId="completed-projects-commercial"
          />
        </div>
        <div className="md:w-1/2 w-full p-10 md:order-2 order-1">
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold">
            Industrial Painting &amp; Blasting
          </h1>
          <p>
            Paint Innovators has experience with all types of industrial
            painting and blasting projects including automotive, graffiti,
            marine, concrete, wood, heavy equipment, fleet vehicles, antiques,
            fire restoration and etching.
          </p>
          <Link href="/get-estimate" className="btn-main my-2">
            Get Free Estimate
          </Link>
          <Link
            href="/projects/industrial"
            className="btn-main white lg:ml-2 my-2"
          >
            Industrial Projects
          </Link>
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
