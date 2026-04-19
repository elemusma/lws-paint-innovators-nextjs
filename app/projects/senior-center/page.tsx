import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 1",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 2",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-3.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 3",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-4.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 4",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-5.jpg",
    className: "lg:w-1/2 md:w-full w-full",
    imageAlt: "Springdale Senior Center project 5",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-6.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 6",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-7.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 7",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-8.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 8",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-9.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 9",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-10.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 10",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-11.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Springdale Senior Center project 11",
  },
  {
    imageSrc: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-12.jpg",
    className: "lg:w-full md:w-full w-full",
    imageAlt: "Springdale Senior Center project 12",
  },
];

export const metadata: Metadata = {
  title: "Springdale Senior Center - Arkansas Hospitality Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work for the 43,000 sq ft Springdale Senior Center in Arkansas.",
  openGraph: {
    title:
      "Springdale Senior Center - Arkansas Hospitality Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work for the 43,000 sq ft Springdale Senior Center in Arkansas.",
    url: `${Website}/projects/senior-center`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/senior-center/Paint-Innovators-Projects-Senior-Center-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Springdale Senior Center project by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/senior-center`,
  },
};

export default function SeniorCenterPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/senior-center/Paint-Innovators-Projects-Senior-Center-4.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Springdale Senior Center overview"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Springdale Senior Center - Arkansas"
        content={
          <>
            <p>
              <strong>Hospitality | Approximately 43,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators completed full interior and exterior finishing
              for the 43,000 sq ft Springdale Senior Center, a community-focused
              facility designed to support and enrich the lives of older adults.
              The project required a balance of durability, accessibility, and
              a welcoming aesthetic across a large and varied space.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              Work included Level 4 sheetrock finishing, installation of vinyl
              wall coverings, and comprehensive interior and exterior painting
              and staining. The team also handled painted cabinets, stained and
              cleared trim, and finishing across both standard ceilings and
              open structure areas.
            </p>

            <p>
              <strong>Project Challenges</strong>
            </p>
            <p>
              The project moved on a fast-paced schedule, requiring tight
              coordination and efficient sequencing. High ceilings introduced
              additional complexity, with scaffolding and lifts necessary to
              complete work safely and consistently. Exterior applications
              required two-part paint systems, adding another layer of planning
              and execution. Coordination across multiple trades was critical to
              keeping progress on track.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/senior-center/Paint-Innovators-Projects-Senior-Center-10.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Springdale Senior Center interior detail"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Materials, Facility Use & Outcome"
        content={
          <>
            <p>
              <strong>Square Footage</strong>
            </p>
            <p>Approximately 43,000 square feet.</p>

            <p>
              <strong>Finishes &amp; Materials</strong>
            </p>
            <p>
              The project featured Level 4 drywall finishes, vinyl wall
              coverings, painted cabinets, stained and cleared trim, and a
              variety of accent colors throughout the space. Painted walls,
              hard lid ceilings, and open structure elements were all
              integrated to create a cohesive environment.
            </p>

            <p>
              <strong>Project Overview</strong>
            </p>
            <p>
              The Springdale Senior Center serves as a hub for the local senior
              community, offering programs and services that promote social
              connection, physical activity, and ongoing engagement. The
              facility is designed to provide a comfortable and functional space
              where seniors can remain active and involved.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              Paint Innovators delivered consistent, high-quality finishes
              across a complex project while meeting an aggressive timeline. The
              result is a durable, well-finished environment that supports the
              center&apos;s mission and daily use.
            </p>
          </>
        }
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ContentBlock
        sectionClassName="relative pt-[50px] pb-[15px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <div className="relative">
          <h2 className="md:text-3xl text-2xl uppercase font-proxima-bold">
            Hospitality Project Gallery
          </h2>
        </div>
      </ContentBlock>
      <ProjectGallery images={projectImages} />

      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
