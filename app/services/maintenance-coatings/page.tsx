import ContentBlock from "@/app/components/content-block";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import TeamCol from "@/app/components/reusable/team-col";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";
import { Company, Website } from "../../components/globals";

export const metadata: Metadata = {
  title:
    "Maintenance Coatings – Professional Finishes & Minimal Disruption – Paint Innovators",
  description:
    "We offer high-performance coatings, eco-friendly solutions, and minimal disruption during installation. Serving Arkansas, Oklahoma, and Colorado.",
  openGraph: {
    title:
      "Maintenance Coatings – Professional Finishes & Minimal Disruption – Paint Innovators",
    description:
      "We offer high-performance coatings, eco-friendly solutions, and minimal disruption during installation. Serving Arkansas, Oklahoma, and Colorado.",
    url: `${Website}/services/maintenance-coatings`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-06.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial Painting Services",
      },
    ],
  },
};
export default function MaintenanceCoatings() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/home/Paint-Innovators-2025-06.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
            Maintenance Coatings
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
          At {Company} we understand the importance of maintaining your
          commercial space with minimal disruption to your operations and a
          seamless fit with your schedule.
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
            img="/home/Paint-Innovators-2025-01.jpg"
            name="Disruption-Free Service"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Adaptable workforce and after-hours scheduling to ensure
                  uninterrupted operations.
                </p>
                <div className="h-[12px] hidden lg:block"></div>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-07.jpg"
            name="Optimized Coating Performance"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Thorough prep and testing ensure coatings meet performance
                  standards.
                </p>
              </>
            }
          />
          <TeamCol
            img="/gallery/Commercial-Painting-14-Rectangular.jpg"
            name="Eco-Friendly Protection"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Routine maintenance and zero-VOC products promote healthy air
                  quality.
                </p>
              </>
            }
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
          <TeamCol
            img="/gallery/Commercial-Painting-20.jpg"
            name="Safe &amp; Secure Spaces"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Visitors, staff and equipment are safe with anti-slip and
                  high-visibility solutions.
                </p>
              </>
            }
          />
          <TeamCol
            img="/gallery/Commercial-Painting-17.jpg"
            name="Built to Last"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Precision application enhances coating durability and surface
                  longevity.
                </p>
              </>
            }
          />
          <TeamCol
            img="/gallery/Interior-Exterior-Painting-14.jpg"
            name="Hygienic &amp; Safe"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.3}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Coatings designed to keep your facility spotless and secure.
                </p>
                <div className="hidden lg:block h-[12px]"></div>
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
        <h2 className="md:text-5xl text-4xl font-aspira-light pt-4">
          MAINTENANCE COATINGS SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Commercial-Painting-02.jpg"
        imageAlt="Wallpaper"
        overlayText="ZERO-VOC PRODUCTS"
        heading="Transform a Room"
        content="We focus on optimizing coating performance through thorough preparation and testing to guarantee that our coatings meet the highest standards. Our eco-friendly protection methods, including routine maintenance and the use of zero-VOC products, contribute to a healthier environment and improved air quality."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-12.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="PRECISION &amp; DURABILITY"
        heading="Transform a Room"
        content="Built to last, our coatings are applied with precision to improve durability and extend the longevity of your surfaces. We also offer hygienic and safe coatings that ensure your facility stays spotless while protecting your staff and visitors."
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
