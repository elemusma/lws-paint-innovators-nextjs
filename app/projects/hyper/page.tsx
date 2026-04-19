import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 1",
  },
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 2",
  },
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-3.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 3",
  },
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-4.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 4",
  },
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-5.jpg",
    className: "lg:w-1/2 md:w-full w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 5",
  },
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-6.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 6",
  },
  {
    imageSrc: "/projects/hyper/Paint-Innovators-Projects-Hyper-7.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "University of Arkansas Fitness Center Renovation 7",
  },
];

export const metadata: Metadata = {
  title:
    "University of Arkansas Fitness Center Renovation - Arkansas Education Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work on the University of Arkansas Fitness Center Renovation, an 80,000 sq ft education project in Arkansas.",
  openGraph: {
    title:
      "University of Arkansas Fitness Center Renovation - Arkansas Education Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work on the University of Arkansas Fitness Center Renovation, an 80,000 sq ft education project in Arkansas.",
    url: `${Website}/projects/hyper`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/hyper/Paint-Innovators-Projects-Hyper-1.jpg`,
        width: 1200,
        height: 630,
        alt: "University of Arkansas Fitness Center Renovation by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/hyper`,
  },
};

export default function HyperPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/hyper/Paint-Innovators-Projects-Hyper-3.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="University of Arkansas Fitness Center Renovation overview"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="University of Arkansas Fitness Center Renovation - Arkansas"
        content={
          <>
            <p>
              <strong>Education | 80,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators completed a full-scale renovation of an 80,000 sq
              ft fitness center on the University of Arkansas campus. This
              project focused on upgrading a high-traffic student facility into
              a modern, state-of-the-art environment that supports health,
              wellness, and daily campus life.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              The team handled a wide range of interior and exterior finishes,
              including painting of walls, ceilings, CMU block, and metal
              substrates. Additional work included dry fall applications,
              sheetrock finishing, staining, sealed concrete, and installation
              of vinyl wall coverings. Each finish was selected and applied to
              meet durability standards required for a high-use facility while
              maintaining a clean, cohesive look.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/hyper/Paint-Innovators-Projects-Hyper-6.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="University of Arkansas Fitness Center Renovation interior detail"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Scheduling, Facility Scope & Outcome"
        content={
          <>
            <p>
              <strong>Project Challenges</strong>
            </p>
            <p>
              The project operated under a strict timeline tied to the Fall 2025
              semester opening, leaving no room for delays. Coordination across
              multiple trades was constant, with many moving parts that required
              precise scheduling and communication. Working alongside
              experienced trade partners helped maintain momentum and ensured
              key milestones were met without compromising quality.
            </p>

            <p>
              <strong>Facility Overview</strong>
            </p>
            <p>
              This renovation transformed the fitness center into a comprehensive
              student resource, featuring offices, conference rooms, two weight
              rooms, large locker rooms, two ballet studios, and additional
              support spaces. The upgraded facility enhances the student
              experience by providing a modern, functional space designed for
              both performance and everyday use.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              Paint Innovators delivered consistent, high-quality finishes
              across a large and complex project while staying aligned with
              tight deadlines. The result is a durable, polished facility that
              meets the demands of a busy university environment and reflects
              the scale and professionalism of the team involved.
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
            Education Project Gallery
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
