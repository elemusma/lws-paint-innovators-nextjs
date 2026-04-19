import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Port of Catoosa project 1",
  },
  {
    imageSrc: "/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Port of Catoosa project 2",
  },
  {
    imageSrc: "/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-3.jpg",
    className: "lg:w-1/3 md:w-full w-full",
    imageAlt: "Port of Catoosa project 3",
  },
];

export const metadata: Metadata = {
  title: "Port of Catoosa - Tulsa Industrial Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work at the Port of Catoosa, a large-scale industrial project in Tulsa, Oklahoma.",
  openGraph: {
    title: "Port of Catoosa - Tulsa Industrial Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work at the Port of Catoosa, a large-scale industrial project in Tulsa, Oklahoma.",
    url: `${Website}/projects/port-catoosa-tulsa`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Port of Catoosa project by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/port-catoosa-tulsa`,
  },
};

export default function PortCatoosaTulsaPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-1.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Port of Catoosa industrial facility overview"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Port of Catoosa - Tulsa"
        content={
          <>
            <p>
              <strong>Industrial | Approximately 150,000 to 200,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators completed large-scale interior and exterior
              painting services for facilities within the Port of Catoosa, a
              major inland industrial park and shipping complex spanning over
              2,000 acres in Catoosa, Oklahoma. Serving as a critical hub along
              the McClellan-Kerr Arkansas River Navigation System, the port
              supports the movement of agricultural goods, steel, and
              industrial cargo, requiring durable finishes suited for heavy-use
              environments.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              Exterior work included power washing, surface preparation through
              scraping and sanding, full spray application to building
              exteriors, and the addition of a design line across the upper
              portions of the structures. Interior work involved degreasing
              walls, patching holes in metal substrates, and applying paint to
              metal wall systems to restore and protect high-traffic industrial
              spaces.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-3.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Port of Catoosa industrial detail"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Challenges, Materials & Outcome"
        content={
          <>
            <p>
              <strong>Project Challenges</strong>
            </p>
            <p>
              A primary challenge was maintaining the cleanliness and protection
              of active equipment and finished flooring while work was ongoing.
              The site remained operational, which required strict control over
              work areas. Paint Innovators implemented a detailed protection
              plan using proper coverings, controlled zones, and daily
              housekeeping procedures. This approach allowed work to move
              forward without disrupting operations or damaging surrounding
              assets.
            </p>

            <p>
              <strong>Finishes &amp; Materials</strong>
            </p>
            <p>
              The project utilized drywall and direct-to-metal paint systems
              designed for industrial durability, ensuring long-term
              performance in a demanding environment.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              Paint Innovators delivered a clean, consistent finish across a
              large operational facility while maintaining strict protection
              standards. The result supports the functionality and appearance of
              a key logistics hub without interrupting ongoing operations.
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
            Industrial Project Gallery
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
