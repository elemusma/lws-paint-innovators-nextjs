import ContentBlock from "@/app/components/content-block";
import { CommercialProjectsImages } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import SwiperCarouselProjectsIndustries from "@/app/components/swiperCarouselProjectsIndustries";
import Link from "next/link";

export default function IndustriesCommercial() {
  return (
    <>
      <ContentBlock
        sectionClassName="completed-projects"
        containerClassName="mx-auto"
        rowClassName=""
        columnClassName="flex flex-wrap items-center"
      >
        <div className="md:w-1/2 w-full relative">
          <SwiperCarouselProjectsIndustries
            slides={CommercialProjectsImages}
            sliderId="completed-projects-commercial"
          />
        </div>
        <div className="md:w-1/2 w-full px-10">
          <h1>Commercial Buildings</h1>
          <p>
            Paint Innovators has experience with all types of commercial
            painting projects including interior painting, exterior painting,
            office painting, rental property painting, and building painting.
          </p>
          <Link href="/get-estimate" className="btn-main">
            Get Free Estimate
          </Link>
          <Link
            href="/projects/commercial-painting"
            className="btn-main white ml-2"
          >
            View Commercial Projects
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
