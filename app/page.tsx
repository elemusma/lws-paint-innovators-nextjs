import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import Link from "next/link";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "./components/globals.js"; // Adjust path as needed
import CoreValues from "./components/reusable/core-values";
import CTA from "./components/reusable/cta";
import SwiperCarousel from "./components/swiperCarousel";
import SwiperCarouselNewService from "./components/swiperCarouselNewService";
import SwiperCarouselProjects, {
  Slide,
} from "./components/swiperCarouselProjects";

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
        <SwiperCarousel />
      </div>
      <ContentBlock
        sectionClassName="bg-accent text-white"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-3xl font-proxima-bold">
          SERVING ARKANSAS, OKLAHOMA &amp; COLORADO
        </h2>
      </ContentBlock>
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
              src={"/home/Paint-Innovators-2025-06.jpg"}
              alt="Paint Innovators Industrial"
              className="absolute top-0 right-0 w-7/12 h-full object-cover opacity-[.25]"
              style={{ objectPosition: "right" }}
              width={1000}
              height={1000}
            />
          </>
        }
      >
        {/* <div className="flex flex-col lg:flex-row items-center relative"> */}
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
          <Link href="/contact" className="btn-main mt-[20px]">
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:text-right">
          <Image
            src={`/team/Paint-Innovators-Team-Home.jpg`}
            alt={`Paint Innovators Team`}
            width={1000}
            height={1000}
            className="object-cover"
          />
          {/* <iframe
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
          ></iframe> */}
          {/* <iframe
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
            allowFullScreen
          ></iframe> */}
        </div>
        {/* </div> */}
      </ContentBlock>
      <div className="spacer"></div>
      <CoreValues />
      {/* <ContentBlock
        sectionClassName=""
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-5xl font-aspira-thin">INDUSTRIES SERVED</h2>
      </ContentBlock> */}
      {/* <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container max-w-screen-lg mx-auto"
        headerClassName="flex flex-wrap justify-center mb-4 px-4 headerClassName"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
        contentClassName="p-4"
      /> */}
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>

      <ContentBlock
        sectionClassName="bg-black text-white completed-projects py-[30px]"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-aspira-thin mb-4">COMPLETED PROJECTS</h2>
        <div className="relative swiper-carousel-container">
          <SwiperCarouselProjects
            slides={ResidentialProjectsImages}
            sliderId="completed-projects-residential"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            RESIDENTIAL
          </h2>
        </div>
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={CommercialProjectsImages}
            sliderId="completed-projects-commercial"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            COMMERCIAL
          </h2>
        </div>
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={IndustrialProjectsImages}
            sliderId="completed-projects-industrial"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            INDUSTRIAL
          </h2>
        </div>
      </ContentBlock>
      <div className="spacer"></div>

      {/* <Testimonials />
      <div className="spacer"></div> */}
      <CTA />

      <div className="spacer"></div>
    </>
  );
}
