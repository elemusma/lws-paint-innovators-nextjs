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
        url: `${Website}/services/Services-Wallpaper-Removal.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function IndustrialPaintingBlasting() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/gallery/Industrial-33.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
            Industrial Painting &amp; Blasting
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
          {Company} is a leading industrial painting and blasting company and
          provides the best surface stripping, painting, and coating services.
          Our wet and dry abrasive technologies lend themselves to a wide
          variety of uses and applications.
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
          INDUSTRIAL PAINTING &amp; BLASTING SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-48.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="OSHA, EPA, AND DEQ Compliant"
        heading="Transform a Room"
        content="BlastCraft is a wet abrasive blasting company that specializes in surface refinishing. We remove coatings, contaminants, corrosion, and residues without damaging your original surface. Our equipment is powerful enough to blast through steel and precise enough to use on antiques. Our system reduces airborne dust for a more efficient cleanup and also assists in compliance with OSHA, EPA, and DEQ regulations."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-51.jpg"
        imageAlt="Wallpaper"
        overlayText="SOFTER SATIN-LIKE FINISH"
        heading="Transform a Room"
        content="Wet blasting is a natural choice for cleaning grease, rust, factory coatings, and contaminants from the old motorcycle, engine, or machine parts. The wet abrasive process is quicker leaving a softer satin-like finish on any aluminum, chrome, or steel surface."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-52.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="BETTER CHOICE FOR RESTORATIONS"
        heading="Transform a Room"
        content="The traditional dry blasting method causes frictional heat to the blasted surface which causes warping on aluminum or steel making our wet blasting a better choice on softer metals and making it a good choice for antique restoration, wood restoration, cleaning up fire damage, and removing graffiti."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-53.jpg"
        imageAlt="Wallpaper"
        overlayText="DECREASE OXIDATION"
        heading="Transform a Room"
        content="In the outdoor construction industry or urban setting wet blasting is your best choice making dust containment less of an issue. In the engineering industry, wet blasting is used to remove carbon deposits, oxidation, paint, and contaminants. It has also been used for cleaning and peening aerospace parts and surfaces."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-54.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="ECO-FRIENDLY"
        heading="Transform a Room"
        content="Our system is an eco-friendly, efficient, and safe way to clean or prepare surfaces. We can clean a wide range of surfaces without the use of harsh chemicals or toxins that does not leave any residue behind."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
      />

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-57.jpg"
        imageAlt="Wallpaper"
        overlayText="POWERFUL YET CAREFUL BLASTER"
        heading="Transform a Room"
        content="Our process is just as powerful as conventional dry sandblasting because we combine eco-friendly abrasives with water and adjustable pressure. Our blaster although powerful won&amp;t ruin any of your product or surface. It is gentle enough to use on a substrate like wood or vinyl without issue."
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
