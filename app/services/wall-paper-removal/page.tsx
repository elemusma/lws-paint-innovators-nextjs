import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import IndustriesServed from "@/app/components/reusable/industries-served";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Company, Website } from "../../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";
export const metadata: Metadata = {
  title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
  description: "Professional painting.",
  openGraph: {
    title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
    description: "Professional painting.",
    url: `https://${Website}/wallpaper-removal`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: "/services/Services-Wallpaper-Removal-Paint-Innovators.jpg", // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function WallPaperRemoval() {
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
              src={"/services/Services-Wallpaper-Removal-Paint-Innovators.jpg"}
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
          <h1 className="text-6xl uppercase font-aspira-light">
            Wall Paper Removal
          </h1>
          <h2 className="font-aspira-bold text-2xl">Get the Job Done Right!</h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />

      {/* <div className="spacer"></div> */}
      <IndustriesServed />

      <div className="divider"></div>

      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center"
      >
        <p className="text-gray-700 text-2xl mb-4 font-aspira-bold">
          {Company}, is dedicated to quality painting. We have experienced and
          professional painters that specialize in residential and commercial
          painting - including interior painting and exterior painting for homes
          and offices.
        </p>
      </ContentBlock>

      <ProjectsWorkedOn />

      <ImageContentBlock
        imageSrc="/photos/Colorado.jpg"
        imageAlt="Wallpaper"
        overlayText="TRANSFORM A ROOM"
        heading="Transform a Room"
        contentCol={
          <>
            <p>heloo there</p>
          </>
        }
        content="New wall covering can transform a room, going from boring to spectacular. But before you embark on the change, it's essential to know the type of wallpaper and the surface underneath."
        buttonLabel="Learn More"
        buttonLink="/wallpaper/transform-room"
      />

      <CTA />
      <div className="spacer"></div>
    </>
  );
}
