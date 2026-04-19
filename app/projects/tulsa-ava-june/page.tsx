export const dynamic = 'force-dynamic';
import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
// import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
// import Image from "next/image";
// import Link from "next/link";
// import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
// import ValueColumn from "@/app/components/reusable/ValueColumn";
// import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

export const metadata: Metadata = {
  title:
    "Ava June - Tulsa Hospitality Project - Paint Innovators",
  description:
    "Explore Paint Innovators' work for Ava June, a hospitality project in Tulsa, Oklahoma.",
  openGraph: {
    title:
      "Ava June - Tulsa Hospitality Project - Paint Innovators",
    description:
      "Explore Paint Innovators' work for Ava June, a hospitality project in Tulsa, Oklahoma.",
    url: `${Website}/projects/tulsa-ava-june`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/Paint-Innovators-Projects-Ava-June-Tulsa-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Ava June project by Paint Innovators",
      },
    ],
  },
  alternates: { canonical: `${Website}/projects/tulsa-ava-june` },
};
export default function AboutPage() {
  return (
    <>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/projects/Paint-Innovators-Projects-Ava-June-Tulsa-4.jpg"
        imageClass=""
        contentColClassName="md:py-[50px] py-[50px]"
        imageAlt="Wallpaper"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Ava June – Tulsa, Oklahoma"
        content={
            <>
            <p><strong>Hospitality | 2,000 sq ft</strong></p>
<p>Ava June is a modern French brasserie located in the heart of Cherry Street in Tulsa, Oklahoma. This project focused on delivering a clean, refined interior finish that complements the restaurant’s elevated yet inviting atmosphere.</p>
<p><strong>Scope of Work</strong></p>

<ul>
 	<li>Drywall preparation as needed</li>
 	<li>Spray and back-roll application on all walls</li>
 	<li>Staining of staircase elements</li>
</ul>
<p><strong>Finishes</strong></p>

<ul>
 	<li>Flat and semi-gloss coatings for a balanced, durable finish</li>
</ul>
<p>The goal was to create a smooth, consistent look throughout the space while maintaining durability in a high-traffic hospitality environment. The combination of spray and back-roll ensured even coverage and a professional finish across all surfaces.</p>
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
<ProjectGallery
  images={[
    { imageSrc: "/projects/Paint-Innovators-Projects-Ava-June-Tulsa-1.jpg", className: "lg:w-1/3 md:w-1/2 w-full", imageAlt: "Room 1" },
    { imageSrc: "/projects/Paint-Innovators-Projects-Ava-June-Tulsa-2.jpg", className: "lg:w-1/3 md:w-1/2 w-full", imageAlt: "Room 2" },
    { imageSrc: "/projects/Paint-Innovators-Projects-Ava-June-Tulsa-3.jpg", className: "lg:w-1/3 md:w-1/2 w-full", imageAlt: "Room 3" },
    { imageSrc: "/projects/Paint-Innovators-Projects-Ava-June-Tulsa-4.jpg", className: "lg:w-1/2 md:w-1/2 w-full", imageAlt: "Room 4" },
    { imageSrc: "/projects/Paint-Innovators-Projects-Ava-June-Tulsa-5.jpg", className: "lg:w-1/2 md:w-full w-full", imageAlt: "Room 5" },
  ]}
/>

      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
