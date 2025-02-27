import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import IndustriesServed from "@/app/components/reusable/industries-served";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Company, Email, Phone, Website } from "../../components/globals";
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
          <h2 className="font-aspira-bold">Get the Job Done Right!</h2>
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

      <CTA />

      <div className="wallpaper-removal-container max-w-7xl mx-auto px-4 py-12">
        <div className="content-wrapper grid md:grid-cols-2 gap-8">
          <div className="info-section">
            <h2 className="text-2xl font-semibold mb-4">
              Expert Wallpaper Removal Services
            </h2>
            <p className="text-gray-700 mb-4">
              At {Company}, we specialize in professional wallpaper removal
              using industry-leading techniques and equipment. Our experienced
              team ensures a clean, damage-free surface ready for your next wall
              treatment.
            </p>

            <ul className="list-disc pl-5 mb-6">
              <li>Safe and efficient removal process</li>
              <li>Surface preparation for new finishes</li>
              <li>Commercial and industrial expertise</li>
              <li>Minimal disruption to your space</li>
            </ul>
          </div>

          <div className="contact-section bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
            <p className="mb-4">
              Contact us for professional wallpaper removal services in
              Arkansas, Oklahoma, and Colorado.
            </p>
            <div className="contact-info">
              <p className="font-bold">Call us: {Phone}</p>
              <p className="font-bold">Email: {Email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
