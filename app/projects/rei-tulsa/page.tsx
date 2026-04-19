import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "REI Tulsa project 1",
  },
  {
    imageSrc: "/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "REI Tulsa project 2",
  },
  {
    imageSrc: "/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-3.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "REI Tulsa project 3",
  },
  {
    imageSrc: "/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-4.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "REI Tulsa project 4",
  },
  {
    imageSrc: "/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-5.jpg",
    className: "lg:w-1/2 md:w-full w-full",
    imageAlt: "REI Tulsa project 5",
  },
];

export const metadata: Metadata = {
  title: "REI Retail Store - Tulsa Commercial Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work for a 50,000 sq ft REI retail store in Tulsa, Oklahoma.",
  openGraph: {
    title: "REI Retail Store - Tulsa Commercial Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work for a 50,000 sq ft REI retail store in Tulsa, Oklahoma.",
    url: `${Website}/projects/rei-tulsa`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-1.jpg`,
        width: 1200,
        height: 630,
        alt: "REI Tulsa project by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/rei-tulsa`,
  },
};

export default function ReiTulsaPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-2.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="REI Tulsa retail store overview"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="REI Retail Store - Tulsa"
        content={
          <>
            <p>
              <strong>Commercial | Approximately 50,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators completed interior painting services for a
              50,000 sq ft REI retail location, delivering clean, consistent
              finishes aligned with the brand&apos;s modern and functional store
              design. The project focused on preparing and finishing large wall
              surfaces to support a high-traffic retail environment.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              The team handled drywall preparation as needed, followed by spray
              application and back rolling of wall surfaces to ensure even
              coverage and a uniform finish throughout the space.
            </p>

            <p>
              <strong>Project Challenges</strong>
            </p>
            <p>
              No major constraints impacted execution. The project moved
              forward under standard conditions, allowing the team to focus on
              consistency and quality across all painted surfaces.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-4.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="REI Tulsa retail interior detail"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Store Overview, Materials & Outcome"
        content={
          <>
            <p>
              <strong>Square Footage</strong>
            </p>
            <p>Approximately 50,000 square feet.</p>

            <p>
              <strong>Finishes &amp; Materials</strong>
            </p>
            <p>
              The project included multiple paint colors, primarily using
              eggshell finishes to balance durability with a clean, low-sheen
              appearance suitable for retail environments.
            </p>

            <p>
              <strong>Project Overview</strong>
            </p>
            <p>
              REI (Recreational Equipment, Inc.) is a national retail co-op
              specializing in outdoor gear, apparel, and equipment for
              activities such as hiking, camping, cycling, and skiing. The
              store layout and finishes are designed to create an inviting and
              organized shopping experience.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              Paint Innovators delivered consistent, high-quality finishes
              across a large retail space, supporting both the visual
              presentation and durability requirements of a busy commercial
              environment.
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
