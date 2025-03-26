import ContentBlock from "@/app/components/content-block";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import IndustriesServed from "@/app/components/reusable/core-values";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import type { Metadata } from "next";
import Link from "next/link";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
  description: "Professional painting.",
  openGraph: {
    title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
    description: "Professional painting.",
    url: `{Website}/wallpaper-removal`, // Replace with actual URL
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
export default function CommercialPainting() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Pressure-Washing-Paint-Innovators-in-Arkansas-and-Oklahoma.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
          <h1 className="text-6xl uppercase font-aspira-light text-shadow">
            Pressure Washing
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
          Paint Innovators cleans and protects all surfaces transforming every
          outdoor space of your home and business with a pressure wash. We clean
          decks, patios, siding, brick, driveways, walkways, and more. Let the
          professional at Paint Innovators clean your home or business.
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
          PRESSURE WASHING SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/services/Services-Pressure-Washing-Paint-Innovators-in-Arkansas-and-Oklahoma-01.png"
        imageAlt="Wallpaper"
        overlayText="PROFESSIONAL LOOK"
        heading="Transform a Room"
        content="Pressure washing is the technique of high-pressure water spray to remove mold, marks, mud, grime, dirt, shewing gum and many more. Pressure washing helps you maintain a welcoming and professional look of your commercial building."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Contractor-Services-05.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="PREVENT ACCIDENTS"
        heading="Transform a Room"
        content="There are many benefits of pressure washing; improve your building look and value of the structure, promotes health by eliminating potentially harmful substances, pressure washing prevents slips and falls. Mold growth, dirt buildup and algae not only look unattractive, but also can wear out a building by causing damage."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Residential-Painting-40.jpg"
        imageAlt="Smooth &amp; Clean"
        overlayText="CLEAN SURFACES"
        heading="Transform a Room"
        content="Paint Innovators cleans and protects all surfaces transforming every outdoor space of your home and business. We clean facades, decks, patios, dumpster areas, pool decks, vinyl siding, gutters, parking lots, loading docks, driveways, brick, driveways, awnings, walkways, and more. "
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Residential-Painting-13.jpg"
        imageAlt="We Make It Easy"
        overlayText="We Make It Easy"
        heading="Transform a Room"
        content="Paint Innovators has crew of experienced wallpaper removers and is fully armed with all the tools to remove that old wallpaper fast and effectively. We will steam the area with water, scrape the first layer of wallpaper and steam the wallpaper again until all the wallpaper peels off making sure your walls have no trace of adhesive and aged wallpaper remains. We effectively remove all kinds of wallpaper including vinyl wallpaper. We are fully licensed and insured and offer competitive rates on all jobs. Save the time and hassle and call the experts. Request your free estimate."
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
