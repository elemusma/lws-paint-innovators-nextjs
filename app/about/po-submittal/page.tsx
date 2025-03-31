import ContactFormPOSubmittal from "@/app/components/forms/ContactFormPOSubmittal";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import { Website } from "../../components/globals";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title: "Internal PO Submittal - Paint Innovators",
  description:
    "Enter the name of the general contractor. Use the name we will bill. Estimated start date. Quickbooks time. Bid / contract price.",
  openGraph: {
    title: "Internal PO Submittal - Paint Innovators",
    description:
      "Enter the name of the general contractor. Use the name we will bill. Estimated start date. Quickbooks time. Bid / contract price.",
    url: `${Website}/careers/office-associate`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Internal PO Submittal - Paint Innovators",
      },
    ],
  },
};
export default function InternalPOSubmittal() {
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
            PO# Submittal
          </h1>
        </div>
        <ContactFormPOSubmittal />
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
    </>
  );
}
