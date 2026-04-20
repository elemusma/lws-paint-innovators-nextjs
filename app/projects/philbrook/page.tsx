import ContentBlock from "@/app/components/content-block";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import ProjectGallery from "@/app/components/reusable/ProjectGallery";

const projectImages: { imageSrc: string; className: string; imageAlt: string }[] = [
  {
    imageSrc: "/projects/philbrook/Paint-Innovators-Projects-Philbrook-Tulsa-1.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Philbrook Tulsa education project 1",
  },
  {
    imageSrc: "/projects/philbrook/Paint-Innovators-Projects-Philbrook-Tulsa-2.jpg",
    className: "lg:w-1/3 md:w-1/2 w-full",
    imageAlt: "Philbrook Tulsa education project 2",
  },
  {
    imageSrc: "/projects/philbrook/Paint-Innovators-Projects-Philbrook-Tulsa-3.jpg",
    className: "lg:w-1/3 md:w-full w-full",
    imageAlt: "Philbrook Tulsa education project 3",
  },
];

export const metadata: Metadata = {
  title: "Philbrook - Tulsa Education Project - Paint Innovators",
  description:
    "View Paint Innovators' Philbrook education project in Tulsa, Oklahoma.",
  openGraph: {
    title: "Philbrook - Tulsa Education Project - Paint Innovators",
    description:
      "View Paint Innovators' Philbrook education project in Tulsa, Oklahoma.",
    url: `${Website}/projects/philbrook`,
    type: "website",
    images: [
      {
        url: `${Website}/projects/philbrook/Paint-Innovators-Projects-Philbrook-Tulsa-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Philbrook project by Paint Innovators",
      },
    ],
  },
  alternates: { canonical: `${Website}/projects/philbrook` },
};

export default function PhilbrookPage() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative pt-[50px] pb-[15px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center px-4"
      >
        <div className="relative">
          <h1 className="md:text-4xl text-3xl uppercase font-proxima-bold">
            Philbrook - Tulsa - Education
          </h1>
        </div>
      </ContentBlock>
      <ProjectGallery images={projectImages} />
    </>
  );
}
