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
import { Company } from "../../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
  description: "Professional painting.",
  openGraph: {
    title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
    description: "Professional painting.",
    url: `{Website}/services/wallpaper-removal`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: "/services/Services-Residential-Painting.jpg", // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function ResidentialPainting() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Residential-Painting.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
          <h1 className="text-6xl uppercase font-aspira-light text-shadow">
            Residential Painting
          </h1>
          <h2 className="font-aspira-bold text-2xl">
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
          At {Company}, our skilled and talented painters are on hand to tackle
          a wide range of projects. One of the easiest and most effective ways
          to personalize your home is with bright, cheerful, elegant colors,
          whatever your personality or preference might be, we have a paint
          color to match.
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
          RESIDENTIAL PAINTING
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
        imageSrc="/services/wall-paper-removal/01-Transform-a-Room.jpg"
        imageAlt="Wallpaper"
        overlayText="Professional Painter"
        heading="Transform a Room"
        content="Our skilled painters bring precision and craftsmanship to every project, meticulously preparing surfaces and using premium, eco-friendly materials. We ensure flawless finishes that provide long-lasting protection against wear and environmental factors."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/services/wall-paper-removal/02-The-History-of-Wall-Paper.jpg"
        imageAlt="Wallpaper"
        overlayText="Professional Painter"
        heading="Transform a Room"
        content="We pride ourselves on minimal disruption and maximum results. Our professional painters work efficiently and cleanly, delivering a seamless painting experience that transforms your living spaces across Arkansas, Oklahoma, and Colorado."
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
