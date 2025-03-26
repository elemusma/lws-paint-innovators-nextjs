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
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Drywall-Repair.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
              src={"/services/Services-Wallpaper-Removal.jpg"}
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
            DRYWALL REPAIR
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
          Paint Innovators can perform multiple drywall repairs and drywall
          finishing services at your home or business. Cracks from settling,
          wear and tear, moisture damage, just to name a few. We can repair just
          about everything.
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
          DRYWALL REPAIR SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Commercial-Painting-01.jpg"
        imageAlt="Wallpaper"
        overlayText="LEVEL 0"
        heading="Transform a Room"
        content="Drywall level 0 is known for no taping, accessories, or finishing.  Level 0 may be used in temporary types of construction where the final decoration has not been determined yet."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-03.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="LEVEL 1"
        heading="Transform a Room"
        content="Drywall level 1 is a single coat of plaster or mud with taping set in a joint compound on both interior and exterior angles.  Normally level 1 is used on ceilings, attics, or any areas where you need to conceal structure elements or on any areas that are not open to public view in commercial buildings."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Commercial-Painting-04.jpg"
        imageAlt="Smooth &amp; Clean"
        overlayText="LEVEL 2"
        heading="Transform a Room"
        content="Drywall level 2 is a double coating of joint compound for areas like garages, warehouses."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-07.jpg"
        imageAlt="We Make It Easy"
        overlayText="LEVEL 3"
        heading="Transform a Room"
        content="Drywall level 3 is a tape embedded joint compound with an additional coat of joint compound.  Level 3 is normally found in residential interiors where medium texture is applied by hand or sprayed and followed by the final coat of paint. Drywall level 4 has two separate coats of joint compound with three separate coats of mud."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Commercial-Painting-20.jpg"
        imageAlt="We Make It Easy"
        overlayText="LEVEL 4"
        heading="Transform a Room"
        content="Drywall level 4 is ideal for flat paint, wall coverings, and light textures."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Interior-Exterior-Painting-01.jpg"
        imageAlt="We Make It Easy"
        overlayText="LEVEL 5"
        heading="Transform a Room"
        content="Drywall level 5 involves three separate coats of mud or joint compound. This level of finish is highly recommended where semi-gloss, enamel, gloss, or flat paints are to be used."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Interior-Exterior-Painting-04.jpg"
        imageAlt="We Make It Easy"
        overlayText="SKILLED FINISHERS"
        heading="Transform a Room"
        content="Our finishers also prepare unfinished interior drywall panels for painting by taping, filling, and sanding joints and correcting imperfections. Paint Innovators has skilled finishers that are capable of working with the client to meet their expectations."
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
