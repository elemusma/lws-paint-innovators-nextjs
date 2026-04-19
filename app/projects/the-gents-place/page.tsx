import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 1",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 2",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-3.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 3",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-4.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 4",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-5.jpg",
    className: "lg:w-1/2 md:w-full w-full",
    imageAlt: "The Gents Place interior finish 5",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-6.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 6",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-7.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 7",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-8.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "The Gents Place interior finish 8",
  },
  {
    imageSrc: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-9.jpg",
    className: "lg:w-full md:w-full w-full",
    imageAlt: "The Gents Place interior finish 9",
  },
];

export const metadata: Metadata = {
  title: "The Gents Place - Arkansas Commercial Project - Paint Innovators",
  description:
    "See how Paint Innovators delivered high-end interior finishing for The Gents Place, a premium commercial men's grooming and spa environment in Arkansas.",
  openGraph: {
    title: "The Gents Place - Arkansas Commercial Project - Paint Innovators",
    description:
      "See how Paint Innovators delivered high-end interior finishing for The Gents Place, a premium commercial men's grooming and spa environment in Arkansas.",
    url: `${Website}/projects/the-gents-place`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-1.jpg`,
        width: 1200,
        height: 630,
        alt: "The Gents Place project by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/the-gents-place`,
  },
};

export default function TheGentsPlacePage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-4.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="The Gents Place project by Paint Innovators"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="The Gents Place - Arkansas"
        content={
          <>
            <p>
              <strong>Commercial | 9,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators was selected to deliver high-end interior
              finishing for The Gents Place, a 9,000 sq ft upscale men&apos;s
              grooming and spa environment designed to combine luxury, comfort,
              and modern aesthetics. This project required precision execution
              across multiple finish types to meet the elevated expectations of
              a premium commercial space.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              The team completed a full range of interior finishing services,
              including Level 5 drywall finishing, priming and painting of
              gypsum board walls, staining of doors and jambs, and painting of
              detailed judges paneling. Additional work included the
              installation of premium wall coverings and the finishing and
              spraying of an Acoustibuilt ceiling system. Painted MEP elements
              were also integrated to maintain a cohesive, polished look
              throughout the space.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-7.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="The Gents Place commercial interior detail"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Execution, Materials & Outcome"
        content={
          <>
            <p>
              <strong>Project Challenges</strong>
            </p>
            <p>
              Execution took place under a tight schedule with limited working
              space, requiring careful coordination and multiple mobilizations.
              The nature of the project demanded consistency across high-end
              finishes, where even minor imperfections would be noticeable.
              Sequencing trades and maintaining quality under time pressure were
              key factors in successful delivery.
            </p>

            <p>
              <strong>Finishes &amp; Materials</strong>
            </p>
            <p>
              The project featured Level 5 drywall finishes, painted gypsum
              board, custom-painted judges paneling, exposed painted MEP, and
              premium wall coverings. All finishes were selected and applied to
              align with the sophisticated branding of The Gents Place.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              The final result reflects a clean, refined environment that
              supports the brand&apos;s identity as a modern, upscale men&apos;s
              spa. Paint Innovators delivered a consistent, high-quality finish
              across all surfaces while navigating logistical constraints and
              maintaining strict standards.
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
