import ContentBlock from "@/app/components/content-block";
import { ResidentialProjectsImages, Website } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import SwiperCarouselProjectsIndustries from "@/app/components/swiperCarouselProjectsIndustries";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Residential Painting Services - Interior, Exterior, Trim, Siding & More - Paint Innovators",
  description:
    "Discover Paint Innovators' expertise in residential painting, including interior, exterior, home, trim, siding, and molding painting. Get a free estimate for your project today.",
  openGraph: {
    title:
      "Residential Painting Services - Interior, Exterior, Trim, Siding & More - Paint Innovators",
    description:
      "Discover Paint Innovators' expertise in residential painting, including interior, exterior, home, trim, siding, and molding painting. Get a free estimate for your project today.",
    url: `${Website}/industries/commercial`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-02.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Residential Painting Services - Interior, Exterior, Trim, Siding & More - Paint Innovators",
      },
    ],
  },
};
export default function IndustriesResidential() {
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
            slides={ResidentialProjectsImages}
            sliderId="completed-projects-commercial"
          />
        </div>
        <div className="md:w-1/2 w-full p-10 md:order-2 order-1">
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold">
            Residential Homes
          </h1>
          <p>
            Paint Innovators has experience with all types of residential
            projects including interior painting, exterior painting, home
            painting, shed painting, trim, siding, and molding painting, and
            more.
          </p>
          <Link href="/get-estimate" className="btn-main my-2">
            Get Free Estimate
          </Link>
          <Link
            href="/projects/residential-painting"
            className="btn-main white lg:ml-2 my-2"
          >
            Residential Projects
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
