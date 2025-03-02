import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import IndustriesServed from "@/app/components/reusable/industries-served";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Company, Website } from "./../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

// Define your fade-up variant:
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
export const metadata: Metadata = {
  title:
    "Paint Innovators Team - Professional Painters in Oklahoma, Arkansas and Colorado",
  description:
    "Founded by Rodney Barnes in 2014. Victor Caldera and Allen Wootten are our Project Managers.",
  openGraph: {
    title:
      "Paint Innovators Team - Professional Painters in Oklahoma, Arkansas and Colorado",
    description:
      "Founded by Rodney Barnes in 2014. Victor Caldera and Allen Wootten are our Project Managers.",
    url: `https://${Website}/wallpaper-removal`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: "/services/Services-Wallpaper-Removal-Paint-Innovators.jpg", // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function OurTeam() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/services/Services-Wallpaper-Removal-Paint-Innovators.jpg"}
              alt="Wall paper removal"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
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
            Our Team
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span>
            Community
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
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
          {Company}, is dedicated to quality painting. We have experienced and
          professional painters that specialize in residential and commercial
          painting - including interior painting and exterior painting for homes
          and offices.
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
        <h2 className="text-4xl font-aspira-light pt-4">DID YOU KNOW?</h2>
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
        overlayText="TRANSFORM A ROOM"
        heading="Transform a Room"
        content="New wall covering can transform a room, going from boring to beautiful. But before you can determine the best approach to removing wallpaper, you need to know the type of wallcovering and the type of wall surface under the wallpaper."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/services/wall-paper-removal/02-The-History-of-Wall-Paper.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="The History of Wall Paper"
        heading="Transform a Room"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/services/wall-paper-removal/03-Smooth-Clean.jpg"
        imageAlt="Smooth &amp; Clean"
        overlayText="Smooth &amp; Clean"
        heading="Transform a Room"
        content="New wall covering can transform a room, going from boring to beautiful. But before you can determine the best approach to removing wallpaper, you need to know the type of wallcovering and the type of wall surface under the wallpaper."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/services/wall-paper-removal/04-We-Make-It-Easy.jpg"
        imageAlt="We Make It Easy"
        overlayText="We Make It Easy"
        heading="Transform a Room"
        content="Paint Innovators has crew of experienced wallpaper removers and is fully armed with all the tools to remove that old wallpaper fast and effectively. We will steam the area with water, scrape the first layer of wallpaper and steam the wallpaper again until all the wallpaper peels off making sure your walls have no trace of adhesive and aged wallpaper remains. We effectively remove all kinds of wallpaper including vinyl wallpaper. We are fully licensed and insured and offer competitive rates on all jobs. Save the time and hassle and call the experts. Request your free estimate."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />

      <ContentBlock
        sectionClassName="bg-white text-black pt-7 pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <div className="divider"></div>
      </ContentBlock>

      <CTA />
      <div className="spacer"></div>
    </>
  );
}
