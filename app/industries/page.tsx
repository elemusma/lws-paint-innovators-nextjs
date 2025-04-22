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
    "Industries We Serve - Commercial, Industrial, Residential - Paint Innovators",
  description:
    "Explore the industries we serve at Paint Innovators. Whether it's commercial, industrial, or residential, our expert team delivers top-notch painting services. Learn more about our projects and get a free estimate today.",
  openGraph: {
    title:
      "Industries We Serve - Commercial, Industrial, Residential - Paint Innovators",
    description:
      "Explore the industries we serve at Paint Innovators. Whether it's commercial, industrial, or residential, our expert team delivers top-notch painting services. Learn more about our projects and get a free estimate today.",
    url: `${Website}/industries`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-12.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Industries We Serve - Commercial, Industrial, Residential - Paint Innovators",
      },
    ],
  },
};
export default function IndustriesPage() {
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
              src={"/home/Paint-Innovators-2025-12.jpg"}
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
            Industries We Serve
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
        <div className="absolute bg-light w-full h-[85%] top-[15%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/gallery/Commercial-Painting-15-Rectangular.jpg"
            name="Commercial"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="">Learn more about our commercial projects.</p>
            }
            buttonLink="/industries/commercial"
            buttonText="View Industry"
            buttonAriaLabel="View our Commercial industry"
          />
          <TeamCol
            img="/gallery/Industrial-62.jpg"
            name="Industrial"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="">Learn more about our industrial projects.</p>
            }
            buttonLink="/industries/industrial"
            buttonText="View Industry"
            buttonAriaLabel="View our Industrial industry"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-09.jpg"
            name="Residential"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="">Learn more about our residential projects.</p>
            }
            buttonLink="/industries/residential"
            buttonText="View Industry"
            buttonAriaLabel="View our Residential industry"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>

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
