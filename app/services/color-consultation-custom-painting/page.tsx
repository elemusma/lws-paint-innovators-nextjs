import ContentBlock from "@/app/components/content-block";
import IndustriesServed from "@/app/components/reusable/core-values";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";
import { Company, Website } from "../../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
  description: "Professional painting.",
  openGraph: {
    title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
    description: "Professional painting.",
    url: `${Website}/wallpaper-removal`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: "/services/Services-Wallpaper-Removal.jpg", // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function ColorConsultationCustomPainting() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/home/Paint-Innovators-2025-12.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
          <h1 className="text-6xl uppercase font-proxima-bold text-shadow">
            Color Consultation Custom Painting
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
          {Company} offers expert color consultation services that transform
          your vision into reality. Our design professionals provide
          personalized recommendations that harmonize with your space&apos;s
          unique characteristics and design potential.
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
          COLOR CONSULTATION &amp; CUSTOM PAINTING
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Commercial-Painting-08-Rectangular.jpg"
        imageAlt="Wallpaper"
        overlayText="COLOR PSYCHOLOGY"
        heading="Transform a Room"
        content="We dive deep into color psychology, lighting considerations, and architectural nuances to create truly customized painting solutions. Our experts guide you through color selection, ensuring a perfect match for your aesthetic and functional needs."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-15-Rectangular.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="UNIQUE FINISHES"
        heading="Transform a Room"
        content="Our custom painting services go beyond standard applications, offering unique finishes and precise color mixing. We deliver one-of-a-kind environments that reflect your individual style across Arkansas, Oklahoma, and Colorado."
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
