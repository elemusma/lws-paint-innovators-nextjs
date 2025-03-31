import ContentBlock from "@/app/components/content-block";
import { CommercialProjectsImages, Website } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import SwiperCarouselProjectsIndustries from "@/app/components/swiperCarouselProjectsIndustries";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Commercial Painting Services - Office, Exterior, Interior - Paint Innovators",
  description:
    "Discover Paint Innovators' expertise in commercial painting projects, including office, interior, exterior, and building painting. View completed projects and get a free estimate today.",
  openGraph: {
    title:
      "Commercial Painting Services - Office, Exterior, Interior - Paint Innovators",
    description:
      "Discover Paint Innovators' expertise in commercial painting projects, including office, interior, exterior, and building painting. View completed projects and get a free estimate today.",
    url: `${Website}/industries/commercial`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial Painting Services - Office, Exterior, Interior - Paint Innovators",
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
            slides={CommercialProjectsImages}
            sliderId="completed-projects-commercial"
          />
        </div>
        <div className="md:w-1/2 w-full p-10 md:order-2 order-1">
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold">
            Commercial Buildings
          </h1>
          <p>
            Paint Innovators has experience with all types of commercial
            painting projects including interior painting, exterior painting,
            office painting, rental property painting, and building painting.
          </p>
          <Link href="/get-estimate" className="btn-main my-2">
            Get Free Estimate
          </Link>
          <Link
            href="/projects/commercial-painting"
            className="btn-main white lg:ml-2 my-2"
          >
            Commercial Projects
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
