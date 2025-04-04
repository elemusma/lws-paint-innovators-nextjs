import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import { Website } from "../components/globals";
import CTA from "../components/reusable/cta";
import ProjectsWorkedOn from "../components/reusable/projects-worked-on";
import ServingTagline from "../components/reusable/serving-tagline";
import TeamCol from "../components/reusable/team-col";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";

export const metadata: Metadata = {
  title:
    "Painting Services - Commercial, Industrial & Residential - Paint Innovators",
  description:
    "Expert painting services for commercial, industrial, and residential properties. We offer interior & exterior painting, color consultation, drywall repair, wallpaper removal, and more.",
  openGraph: {
    title:
      "Painting Services - Commercial, Industrial & Residential - Paint Innovators",
    description:
      "Expert painting services for commercial, industrial, and residential properties. We offer interior & exterior painting, color consultation, drywall repair, wallpaper removal, and more.",
    url: `${Website}/services`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-05.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial, Industrial & Residential Painting Services",
      },
    ],
  },
};

export default function Services() {
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
              src={"/home/Paint-Innovators-2025-05.jpg"}
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
          <h1 className="md:text-6xl text-4xl uppercase font-proxima-bold text-shadow">
            Professional Painter Services
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            Commercial <span className="text-accent">&bull;</span> Industrial{" "}
            <span className="text-accent">&bull;</span> Residential
          </h2>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />

      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-4"
      >
        <div className="absolute bg-light w-full h-[96%] top-[4%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/home/Paint-Innovators-2025-01.jpg"
            name="Architectural Coatings"
            nameTag="h2"
            nameTagClassName="text-2xl text-accent"
            role=""
            delay={0.1}
            description={
              <p>
                Our architectural coatings provide superior protection and
                aesthetic appeal for both interior and exterior surfaces.
              </p>
            }
            buttonLink="/services/commercial-paint"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/home/Paint-Innovators-2025-06.jpg"
            name="Maintenance Coatings"
            nameTag="h2"
            nameTagClassName="text-2xl text-accent"
            role=""
            delay={0.1}
            description={
              <p>
                We offer reliable maintenance coatings that enhance surface
                durability and keep your property looking its best.
              </p>
            }
            buttonLink="/services/maintenance-coatings"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/gallery/Industrial-53.jpg"
            name="Abrasive Blasting"
            nameTag="h2"
            nameTagClassName="text-2xl text-accent"
            role=""
            delay={0.1}
            description={
              <p>
                Utilizing both wet and dry abrasive technologies, we ensure
                optimal surface preparation for a variety of applications.
              </p>
            }
            buttonLink="/services/abrasive-blasting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/home/Paint-Innovators-2025-03.jpg"
            name="Residential Coating"
            nameTag="h2"
            nameTagClassName="text-2xl text-accent"
            role=""
            delay={0.1}
            description={
              <p>
                We specialize in high-quality residential coatings that enhance
                the beauty and longevity of your home.
              </p>
            }
            buttonLink="/services/residential-coatings"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />

          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <ProjectsWorkedOn />
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
