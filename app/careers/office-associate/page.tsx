import CareerOfficeAssociate from "@/app/components/forms/CareerEnglish";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import { Website } from "../../components/globals";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title: "Office Associate Application - Join Our Team - Paint Innovators",
  description:
    "Apply for the Office Associate position at Paint Innovators. Help with scheduling, customer service, and team coordination. Join our team and make a difference today.",
  openGraph: {
    title: "Office Associate Application - Join Our Team - Paint Innovators",
    description:
      "Apply for the Office Associate position at Paint Innovators. Help with scheduling, customer service, and team coordination. Join our team and make a difference today.",
    url: `${Website}/careers/office-associate`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Office Associate Application - Join Our Team - Paint Innovators",
      },
    ],
  },
};
export default function CareersOfficeAssociate() {
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
            Office Associate Application
          </h1>

          <p className="my-2 text-sm">
            Customer service and organization are key for Office Associates.
            They answer incoming calls, help with scheduling and develop working
            relationships with all team members to ensure expectations are met
            with customers and the team.
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
