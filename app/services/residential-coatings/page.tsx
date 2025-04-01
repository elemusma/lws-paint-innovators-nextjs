import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import TeamCol from "@/app/components/reusable/team-col";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";
import { Company, Website } from "../../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title:
    "Commercial Painting – Professional & Durable Finishes – Paint Innovators",
  description:
    "Expert commercial painting services tailored to your business needs. We provide high-performance coatings with minimal disruption. Serving Arkansas, Oklahoma, and Colorado.",
  openGraph: {
    title:
      "Commercial Painting – Professional & Durable Finishes – Paint Innovators",
    description:
      "Expert commercial painting services tailored to your business needs. We provide high-performance coatings with minimal disruption. Serving Arkansas, Oklahoma, and Colorado.",
    url: `${Website}/services/commercial-painting`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-Commercial-02.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial Painting Services",
      },
    ],
  },
};
export default function ResidentialCoatings() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/website/Paint-Innovators-09.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
            Residential Coatings
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

      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <p className="text-gray-700 text-2xl pt-8 mb-4 font-aspira-bold">
          {Company} use long-lasting, high quality, durable products that
          protect, and beautify interior and exterior concrete: including
          garages, basements, sidewalks, and patios.
        </p>
      </ContentBlock>

      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-4"
      >
        <div className="absolute bg-light w-full h-[90%] top-[10%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/home/Paint-Innovators-Commercial-02.jpg"
            name="Deck Coatings"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Flexible manpower and after-hours schedules for no
                  disruptions.
                </p>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-Commercial-01.jpg"
            name="Epoxy floors"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Prep and mockups ensure coatings perform their intended
                  functions.
                </p>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-04.jpg"
            name="Popcorn Ceilings Removal"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.3}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Zero-VOC products and regular maintenance ensure optimal air
                  quality.
                </p>
              </>
            }
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/home/Paint-Innovators-2025-01.jpg"
            name="Drywall Repair"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  High-visibility and non-slip coatings keep staff, equipment,
                  and visitors safe.
                </p>
              </>
            }
          />
          <TeamCol
            img="/services/Services-Epoxy-Floors-Concrete-Staining.jpg"
            name="Durability"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Proper application helps extend the life of coatings and
                  surfaces.
                </p>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-12.jpg"
            name="Cleanliness"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Keep your facility clean and visitors safe with specialty
                  coatings.
                </p>
              </>
            }
          />
          <div className="divider !mt-20 !mb-10"></div>
        </div>
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
          COMMERCIAL PAINTING SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/services/Services-Commercial-Exterior-Building-Painting-01.jpg"
        imageAlt="Wallpaper"
        overlayText="PAINTING SPECIALISTS"
        heading="Transform a Room"
        content="Our commercial painting specialists utilize advanced materials and techniques that withstand heavy traffic and harsh conditions. We work efficiently around your business schedule, ensuring minimal operational disruption while providing high-performance coating solutions."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-02.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="SAFETY &amp; EFFICIENCY"
        heading="Transform a Room"
        content="Safety, efficiency, and quality define our approach. We use eco-friendly, low-VOC paints and follow strict safety standards, delivering professional finishes that enhance your commercial space's appearance and protection."
        buttonLabel="Get Free Estimate"
        buttonLink="/wallpaper/transform-room"
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
