import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 1",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 2",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-3.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 3",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-4.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 4",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-5.jpg",
    className: "lg:w-1/2 md:w-full w-full",
    imageAlt: "SCHEELS Tulsa project 5",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-6.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 6",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-7.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 7",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-8.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 8",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-9.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 9",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-10.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 10",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-11.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "SCHEELS Tulsa project 11",
  },
  {
    imageSrc: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-12.jpg",
    className: "lg:w-full md:w-full w-full",
    imageAlt: "SCHEELS Tulsa project 12",
  },
];

export const metadata: Metadata = {
  title: "SCHEELS - Tulsa Commercial Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work for the 319,000 sq ft SCHEELS retail location in Tulsa, Oklahoma.",
  openGraph: {
    title: "SCHEELS - Tulsa Commercial Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work for the 319,000 sq ft SCHEELS retail location in Tulsa, Oklahoma.",
    url: `${Website}/projects/scheels-tulsa`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-1.jpg`,
        width: 1200,
        height: 630,
        alt: "SCHEELS Tulsa project by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/scheels-tulsa`,
  },
};

export default function ScheelsTulsaPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-3.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="SCHEELS Tulsa retail overview"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="SCHEELS - Tulsa"
        content={
          <>
            <p>
              <strong>Commercial | Approximately 319,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators completed interior painting services for a
              319,000 sq ft SCHEELS retail location in Tulsa, Oklahoma. This
              large-scale commercial project involved delivering consistent
              finishes across a high-traffic, visually driven retail
              environment designed to showcase a wide range of sporting goods
              and experiences.
            </p>

            <p>
              <strong>Project Overview</strong>
            </p>
            <p>
              SCHEELS is a premier sporting goods retailer, combining elements
              of traditional retail with interactive and experiential features.
              The Tulsa location required a clean, cohesive interior finish to
              support both product displays and customer engagement areas.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              The team was responsible for painting the entire interior of the
              building. This included large open areas, retail floors, and
              specialty sections, all requiring uniform coverage and attention
              to detail at scale.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-10.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="SCHEELS Tulsa interior detail"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Execution, Coordination & Outcome"
        content={
          <>
            <p>
              <strong>Project Challenges</strong>
            </p>
            <p>
              The building featured open ceilings and areas with rustic
              finishes, requiring careful execution to maintain design intent
              while achieving consistent results. The scale of the project and
              coordination with other trades added complexity, particularly in
              maintaining workflow efficiency across such a large footprint.
            </p>

            <p>
              <strong>Square Footage</strong>
            </p>
            <p>Approximately 319,000 square feet.</p>

            <p>
              <strong>Trade Coordination</strong>
            </p>
            <p>
              Paint Innovators worked alongside Sampson Construction, the
              general contractor, coordinating schedules and sequencing to
              ensure smooth project progression.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              The project was completed with consistent, high-quality interior
              finishes that align with the SCHEELS brand and enhance the
              overall customer experience within a large and complex retail
              space.
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
            Commercial Project Gallery
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
