import CareerOfficeAssociate from "@/app/components/forms/CareerEnglish";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import { Website } from "../../components/globals";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title: "Project Manager - Job Application - Paint Innovators",
  description:
    "Apply for the Project Manager position at Paint Innovators. Manage painting teams, organize job sites, and ensure exceptional customer communication.",
  openGraph: {
    title: "Project Manager - Job Application - Paint Innovators",
    description:
      "Apply for the Project Manager position at Paint Innovators. Manage painting teams, organize job sites, and ensure exceptional customer communication.",
    url: `${Website}/careers/project-estimator`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Project Manager - Job Application - Paint Innovators",
      },
    ],
  },
};
export default function CareersProjectManager() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-5"
      >
        <div className="text-center md:w-3/4 w-full mx-auto pb-[50px]">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Project Manager
          </h1>

          <p className="my-2 text-sm">
            Project Managers work with paint crews on job sites and manage the
            organization of painting teams and customer communication. This
            position delivers exceptional hands-on customer experience.
          </p>
        </div>
        <CareerOfficeAssociate />
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
    </>
  );
}
