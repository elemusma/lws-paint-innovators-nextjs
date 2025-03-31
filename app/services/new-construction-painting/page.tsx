import ContentBlock from "@/app/components/content-block";
import IndustriesServed from "@/app/components/reusable/core-values";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import { Website } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title:
    "New Construction Painting Services - High-Quality Materials & Impeccable Finishes - Expert Coordination with Contractors - Paint Innovators",
  description:
    "Paint Innovators specializes in new construction painting services across Arkansas, Oklahoma, and Colorado. We provide high-quality materials, impeccable finishes, and expert coordination with contractors to ensure optimal coverage and protection for residential and commercial buildings. Get your free estimate today.",
  openGraph: {
    title:
      "New Construction Painting Services - High-Quality Materials & Impeccable Finishes - Expert Coordination with Contractors - Paint Innovators",
    description:
      "Paint Innovators specializes in new construction painting services across Arkansas, Oklahoma, and Colorado. We provide high-quality materials, impeccable finishes, and expert coordination with contractors to ensure optimal coverage and protection for residential and commercial buildings. Get your free estimate today.",
    url: `${Website}/services/new-construction-painting`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/work/Paint-Innovators-NWA-Homes.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "New Construction Painting Services - High-Quality Materials & Impeccable Finishes - Expert Coordination with Contractors - Paint Innovators",
      },
    ],
  },
};
export default function NewConstructionPaintingServices() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/work/Paint-Innovators-NWA-Homes.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
                    src={"/services/Services-Residential-Painting.jpg"}
                    alt="Wall paper removal"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ objectFit: "cover", objectPosition: "right" }}
                    fill
                  /> */}
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
          <h1 className="md:text-6xl text-4xl uppercase font-proxima-bold text-shadow">
            New Construction Painting
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            We Get the Job Done Right!
          </h2>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />

      {/* <div className="spacer"></div> */}
      <IndustriesServed />

      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <div className="divider"></div>
        <p className="text-gray-700 text-2xl pt-8 mb-4 font-aspira-bold">
          Paint Innovators specializes in painting services for new construction
          projects across Arkansas, Oklahoma, and Colorado. We understand the
          unique requirements of newly built structures, providing comprehensive
          painting solutions from foundation to finish.
        </p>
      </ContentBlock>

      <ProjectsWorkedOn />

      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <div className="divider"></div>
        <h2 className="text-4xl font-aspira-light pt-4">
          NEW CONSTRUCTION PAINTING SERVICES
        </h2>
      </ContentBlock>

      {/* <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > */}
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Commercial-Painting-09.jpg"
        imageAlt="Wallpaper"
        overlayText="HIGH-QUALITY MATERIALS"
        heading="Transform a Room"
        content="Our team coordinates seamlessly with contractors, ensuring precise application and perfect timing. We use high-quality materials specifically selected for new construction, providing optimal coverage and protection."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Contractor-Services-09.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="IMPECCABLE FINISHES"
        heading="Transform a Room"
        content="We deliver impeccable finishes that meet the highest industry standards, adding value and beauty to new residential and commercial buildings. Our expertise ensures a flawless final touch to your new construction project."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

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
