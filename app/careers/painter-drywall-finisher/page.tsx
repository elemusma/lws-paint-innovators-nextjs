import CareerOfficeAssociate from "@/app/components/forms/CareerEnglish";
import { Website } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title:
    "Drywall Finisher - Fastening Pre-Made Panels & Finishing Joints - Paint Innovators",
  description:
    "Drywall finishers fasten pre-made drywall panels and finish or tape joints to prepare surfaces for final finishes.",
  openGraph: {
    title:
      "Drywall Finisher - Fastening Pre-Made Panels & Finishing Joints - Paint Innovators",
    description:
      "Drywall finishers fasten pre-made drywall panels and finish or tape joints to prepare surfaces for final finishes.",
    url: `${Website}/careers/painter-drywall-finisher`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Drywall Finisher - Fastening Pre-Made Panels & Finishing Joints - Paint Innovators",
      },
    ],
  },
};
export default function PainterDrywallFinisher() {
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
            Painter / Drywall Finisher
          </h1>

          <p className="my-2 text-sm">
            Painters work on job sites on a daily basis. They are directly
            involved in both residential and commercial painting projects.
            Painters are detail oriented, take pride in their work and deliver
            extraordinary experiences for customers. Drywall finishers fasten
            pre-made <strong>drywall</strong> panels to the interiors of rooms,
            finishing or taping joints to prepare surfaces for final finish
            work.
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
