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
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Industrial-Coating-Paint-Innovators.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
          <h1 className="text-6xl uppercase font-proxima-bold text-shadow">
            Industrial Coating
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
          Paint Innovators use protective coatings to solve corrosion problems
          in a variety of applications including commercial heating, cooling,
          refrigeration, or other industrial components that are regularly
          exposed to corrosive conditions.
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
          INDUSTRIAL COATING SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-36.jpg"
        imageAlt="Wallpaper"
        overlayText="SOLVE CORROSION PROBLEMS"
        heading="Transform a Room"
        content="Industrial coatings are types of paint, applied on several settings like metals, plastics, wood, glass, leather, rubber and many more, to solve corrosion problems in a variety of applications including commercial heating, cooling, refrigeration, or other industrial components that are regularly exposed to corrosive conditions."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-40.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="PROTECTION FROM FIRE"
        heading="Transform a Room"
        content="Industrial coatings are also used to protect materials from fire or moisture. Polymers are often used as an industrial coating like epoxy, urethane, polyurethane, and fluoropolymer. Aesthetics are also very important and should not be overlooked."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-50.jpg"
        imageAlt="Smooth &amp; Clean"
        overlayText="FRESH LOOK"
        heading="Transform a Room"
        content="We can apply a coat on any equipment and besides giving it a fresh look, it can also prevent corrosion and wear which can lead to equipment failure. There are also environment friendly coatings we can use like organic coatings that just include basic paint and varnish."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-56.jpg"
        imageAlt="We Make It Easy"
        overlayText="CHEMICAL RESISTANCE"
        heading="Transform a Room"
        content="Other types of coatings include inorganic and metallic. Protect your valuable assets and prevent costly repairs by coating them. Many applications of coatings are based on your specific need for example friction control, extreme temperatures, high pressure loads, impact, abrasion, or chemical resistance."
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
