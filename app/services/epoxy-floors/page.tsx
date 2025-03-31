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
    "Epoxy Floor Services - Durable Concrete Coatings for Home & Commercial Use - Paint Innovators",
  description:
    "Transform your space with high-quality epoxy floor coatings for garages, basements, patios, and commercial applications. Get a free estimate today.",
  openGraph: {
    title:
      "Epoxy Floor Services - Durable Concrete Coatings for Home & Commercial Use - Paint Innovators",
    description:
      "Transform your space with high-quality epoxy floor coatings for garages, basements, patios, and commercial applications. Get a free estimate today.",
    url: `${Website}/services/epoxy-floors`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/services/Services-Epoxy-Floors-Concrete-Staining.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Epoxy Floor Services - Durable Concrete Coatings for Home & Commercial Use - Paint Innovators",
      },
    ],
  },
};
export default function EpoxyFloorsServices() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Epoxy-Floors-Concrete-Staining.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
          <h1 className="md:text-6xl text-4xl uppercase font-proxima-bold text-shadow">
            EPOXY FLOORS
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
          Paint Innovators use long-lasting, high quality, durable products that
          protect, and beautify interior and exterior concrete: including
          garages, basements, sidewalks, and patios.
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
          EPOXY FLOORS SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-39.jpg"
        imageAlt="Wallpaper"
        overlayText="GLOSSY FINISH LOOK"
        heading="Transform a Room"
        content="Protect your home investment and transform your space with epoxy floor coating. Epoxy floors are safe for home application like garages, laundry rooms, basements, sidewalks, and patios. Floor coatings are very useful for preserving concrete surfaces while giving them a glossy finish look."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-45.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="COST EFFECTIVE"
        heading="Transform a Room"
        content="There are many advantages of epoxy floors; cost effective, long lasting, eco-friendly, strength, light maintenance, jut to name a few. Epoxy floor coating is made from epoxide resin, additives, and polyamine hardener. It seals and cures the surface where it is applied."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-84.jpg"
        imageAlt="Smooth &amp; Clean"
        overlayText="EASE OF MAINTENANCE"
        heading="Transform a Room"
        content="Mica or decorative chips may be used to add a speckled look and traction. Ease of maintenance on epoxy floors make this application popular, you can use a broom or map, or even a vacuum to clean epoxy floors."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-83.jpg"
        imageAlt="We Make It Easy"
        overlayText="COMMERCIAL APPLICATIONS"
        heading="Transform a Room"
        content="Epoxy floors are also a great choice for your commercial applications since there are many color options. Epoxy floors are very durable, do not peel or tear, they hold out in high traffic areas and are very cost effective. Paint Innovators use long-lasting, high quality, durable products that protect, and beautify interior and exterior concrete."
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
