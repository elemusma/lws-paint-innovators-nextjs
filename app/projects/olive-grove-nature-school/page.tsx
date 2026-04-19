import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/olive-grove-nature-school/Paint-Innovators-Projects-Olive-Grove-Natural-School-1.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "Olive Grove Nature School project 1",
  },
  {
    imageSrc: "/projects/olive-grove-nature-school/Paint-Innovators-Projects-Olive-Grove-Natural-School-2.jpg",
    className: "lg:w-1/2 md:w-1/2 w-full",
    imageAlt: "Olive Grove Nature School project 2",
  },
];

export const metadata: Metadata = {
  title: "Olive Grove Nature School - Arkansas Education Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work for Olive Grove Nature School, a 17,000 sq ft education project in Arkansas.",
  openGraph: {
    title:
      "Olive Grove Nature School - Arkansas Education Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work for Olive Grove Nature School, a 17,000 sq ft education project in Arkansas.",
    url: `${Website}/projects/olive-grove-nature-school`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/olive-grove-nature-school/Paint-Innovators-Projects-Olive-Grove-Natural-School-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Olive Grove Nature School project by Paint Innovators",
      },
    ],
  },
  alternates: {
    canonical: `${Website}/projects/olive-grove-nature-school`,
  },
};

export default function OliveGroveNatureSchoolPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/olive-grove-nature-school/Paint-Innovators-Projects-Olive-Grove-Natural-School-1.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Olive Grove Nature School overview"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Olive Grove Nature School - Arkansas"
        content={
          <>
            <p>
              <strong>Education | 17,000 sq ft</strong>
            </p>
            <p>
              Paint Innovators completed interior and exterior finishing across
              a 17,000 sq ft campus consisting of four buildings and a storm
              shelter for Olive Grove Nature School, a private early education
              facility serving Rogers, Arkansas and the Northwest Arkansas
              region. The project focused on delivering durable, clean finishes
              suited for a high-use learning environment while maintaining a
              consistent look across multiple structures.
            </p>

            <p>
              <strong>Scope of Work</strong>
            </p>
            <p>
              Work included Level 4 drywall finishing with a light orange peel
              texture, painting of gypsum board, and finishing of both interior
              and exterior CMU surfaces. The team also painted hollow metal
              doors and frames, along with exterior fascia and board and batten
              Hardie siding to create a cohesive exterior appearance.
            </p>
          </>
        }
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/projects/olive-grove-nature-school/Paint-Innovators-Projects-Olive-Grove-Natural-School-2.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Olive Grove Nature School exterior detail"
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
              Sequencing created complications when door installations were
              delayed until the end of the project. This required returning to
              completed areas to tie in additional drywall finishing without
              compromising the original finish quality. Winter conditions added
              another layer of difficulty, as the absence of installed doors
              exposed interiors to low temperatures. Continuous heating was
              required to maintain workable conditions, which slowed dry times
              and impacted overall efficiency.
            </p>

            <p>
              <strong>Finishes &amp; Materials</strong>
            </p>
            <p>
              The project featured Level 4 drywall with a light orange peel
              texture, painted gypsum board interiors, painted CMU surfaces, and
              exterior painted Hardie board siding. All finishes were selected
              to balance durability with a clean, consistent aesthetic
              appropriate for an educational setting.
            </p>

            <p>
              <strong>Outcome</strong>
            </p>
            <p>
              Despite sequencing challenges and harsh weather conditions, Paint
              Innovators maintained finish quality and delivered a uniform
              result across all buildings. The completed campus provides a
              functional, well-finished environment that supports early
              childhood education while holding up to daily use.
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
