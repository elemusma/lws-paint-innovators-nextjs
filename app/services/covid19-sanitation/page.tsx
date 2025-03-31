import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import IndustriesServed from "@/app/components/reusable/core-values";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "COVID-19 Sanitation Services - Professional Painting & Cleaning - Paint Innovators",
  description:
    "Ensure a safe and clean environment with our expert COVID-19 sanitation services. We use EPA-approved products and professional-grade equipment for homes and businesses. Get your free estimate today.",
  openGraph: {
    title:
      "COVID-19 Sanitation Services - Professional Painting & Cleaning - Paint Innovators",
    description:
      "Ensure a safe and clean environment with our expert COVID-19 sanitation services. We use EPA-approved products and professional-grade equipment for homes and businesses. Get your free estimate today.",
    url: `${Website}/services/covid19-sanitation`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/services/Services-Covid-19-Sanitation-Paint-Innvovators.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function Covid19SanitationServices() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Covid-19-Sanitation-Paint-Innvovators.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
              src={
                "/services/Services-Covid-19-Sanitation-Paint-Innvovators.jpg"
              }
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
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold text-shadow">
            COVID-19 Sanitation
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
          COVID-19 sanitation rids your home or office or the virus. We utilize
          high powered systems to kill bacteria and viruses in the air. We can
          help with a one-time cleaning or a reoccurring sanitations that occurs
          monthly or quarterly.
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
          COVID-19 SANITATION SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/services/Services-Covid-19-Sanitation-Paint-Innvovators-01.jpg"
        imageAlt="Wallpaper"
        overlayText="EPA-APPROVED SANITIZATION"
        heading="Transform a Room"
        content="Using EPA-approved sanitization products and professional-grade equipment, we thoroughly eliminate harmful pathogens. Our systematic approach ensures comprehensive coverage and maximum protection against viral transmission."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-11.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="CLEAN ENVIRONMENTS"
        heading="Transform a Room"
        content="We deliver peace of mind through meticulous sanitation services, helping businesses and homeowners maintain safe, clean environments during challenging times. Our solutions meet the highest standards of health and safety."
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
