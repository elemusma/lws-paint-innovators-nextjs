import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import Link from "next/link";
import CompletedProjects from "./components/reusable/CompletedProjects";
import CoreValues from "./components/reusable/core-values";
import CTA from "./components/reusable/cta";
import SwiperCarouselCommercial from "./components/swiperCarouselCommercial";
// import dynamic from "next/dynamic";
import ServingTagline from "./components/reusable/serving-tagline";
import SwiperCarouselNewService from "./components/swiperCarouselNewService";
import { Slide } from "./components/swiperCarouselProjects";

// Lazy load the component with no SSR to reduce render-blocking JS
// const SwiperCarouselCommercial = dynamic(
//   () => import("./components/swiperCarouselCommercial"),
//   {
//     ssr: false,
//     loading: () => <div className="min-h-[611px] bg-gray-100" />, // Placeholder while it loads
//   }
// );
// import ClientSwiperWrapper from "./components/reusable/ClientSwiperCommercial";

export interface SwiperCarouselPropsResidentialProjects {
  ResidentialProjectsImages: Slide[];
  sliderId?: string;
}
export interface SwiperCarouselPropsCommercialProjects {
  CommercialProjectsImages: Slide[];
  sliderId?: string;
}
export interface SwiperCarouselPropsIndustrialProjects {
  IndustrialProjectsImages: Slide[];
  sliderId?: string;
}

export default function Home() {
  return (
    <>
      <div className="hero">
        <SwiperCarouselCommercial />
      </div>
      <ServingTagline />
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto py-3 px-4"
        rowClassName=""
        columnClassName="flex flex-col md:flex-row items-center relative"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-2025-06.webp"}
              alt="Paint Innovators Industrial"
              className="absolute top-0 right-0 w-7/12 h-full object-cover opacity-[.25]"
              style={{ objectPosition: "right" }}
              width={1000}
              height={1000}
              loading="eager"
              priority={true}
            />
          </>
        }
      >
        <div className="w-full md:w-1/2 lg:pr-10 pb-10 sm:pb-0">
          <div
            className="divider"
            style={{ width: "250px", marginLeft: "0px" }}
          ></div>
          <h2 className="text-5xl font-aspira-light my-4">OUR TEAM</h2>
          <h3 className="text-1xl font-poppins-black my-4">
            BUILT ON VALUES &amp; TRUST
          </h3>
          <p>
            Founded in 2014 by Rodney Barnes, Paint Innovators was born out of
            the idea that quality should be at the forefront of every project
            regardless of being residential or commercial. For six years, we
            have been committed to delivering excellent customer service that is
            unmatched. Each day we are faced with difficult decisions in the
            course of our work, however we are assiduous when it comes to our
            values. Integrity is our highest priority.
          </p>{" "}
          <Link href="/about" className="btn-main mt-[20px]">
            Read Our Story
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:text-right">
          {/* <Image
            src={`/team/Paint-Innovators-Team-Home.jpg`}
            alt={`Paint Innovators Team`}
            width={1000}
            height={1000}
            className="object-cover"
          /> */}
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPaintInnovators%2Fvideos%2F979154837397440%2F&show_text=false&width=267&t=0"
            width="50%"
            height="476"
            style={{
              border: "none",
              overflow: "hidden",
              display: "inline-block",
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Bringing this school back to life - Paint Innovators - Commercial and Industrial Painting"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPaintInnovators%2Fvideos%2F1098726621971511%2F&show_text=false&width=267&t=0"
            width="50%"
            height="476"
            style={{
              border: "none",
              overflow: "hidden",
              display: "inline-block",
            }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Job proximity - Paint Innovators - Commercial and Industrial Painting"
            allowFullScreen
          ></iframe>
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <CoreValues />

      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>

      <CompletedProjects />

      <div className="spacer"></div>

      <CTA />

      <div className="spacer"></div>
    </>
  );
}
