import CareerOfficeAssociate from "@/app/components/forms/CareerEnglish";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import { Website } from "../../components/globals";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title: "Project Estimator - Job Application - Paint Innovators",
  description:
    "Apply for the Project Estimator position at Paint Innovators. Work with commercial and residential clients, prepare proposals, and ensure customer satisfaction.",
  openGraph: {
    title: "Project Estimator - Job Application - Paint Innovators",
    description:
      "Apply for the Project Estimator position at Paint Innovators. Work with commercial and residential clients, prepare proposals, and ensure customer satisfaction.",
    url: `${Website}/careers/project-estimator`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Project Estimator - Job Application - Paint Innovators",
      },
    ],
  },
};
export default function CareersProjectEstimator() {
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
            Project Estimator
          </h1>

          <p className="my-2 text-sm">
            Project Estimators interact with commercial customers, prepare
            proposals, answer customer questions, and ensure customer
            satisfaction. Residential Project Estimators interact with
            residential customers by evaluating their painting project needs,
            preparing a customized project plan, and ensuring customer
            satisfaction.
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
