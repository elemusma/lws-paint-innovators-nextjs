import Image from "next/image";
// import ContactForm from "../components/contactForm";
import type { Metadata } from "next";
import ContentBlock from "../components/content-block";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
  Website,
} from "../components/globals";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";
import SwiperCarouselProjects from "../components/swiperCarouselProjects";

export const metadata: Metadata = {
  title:
    "Thank You - Commercial, Industrial & Residential Painting Services - Paint Innovators",
  description:
    "Thank you for choosing Paint Innovators. We will get back to you in no time.",
  openGraph: {
    title:
      "Thank You - Commercial, Industrial & Residential Painting Services - Paint Innovators",
    description:
      "Thank you for choosing Paint Innovators. We will get back to you in no time.",
    url: `${Website}/thank-you`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/services/Services-Wallpaper-Removal.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Thank You - Commercial, Industrial & Residential Painting Services - Paint Innovators",
      },
    ],
  },
};
export default function ThankYou() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative py-[300px]"
        containerClassName="w-full absolute top-1/2 left-0 w-full transform -translate-y-1/2"
        rowClassName="flex flex-col justify-center items-center"
        columnClassName="w-full text-center text-white relative bg-[rgba(0,0,0,0.5)] py-5 px-2"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
              src={"/gallery/Industrial-50.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "top" }}
              fill
            /> */}
            <Image
              src={"/gallery/Industrial-50.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "center" }}
              width={2000}
              height={2000}
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <h1 className="text-4xl font-aspira-thin uppercase">Thank You</h1>
        <p className="px-[50px]">
          We will reach back out to you within 24 - 48 hours.
        </p>
      </ContentBlock>
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
    </>
  );
}
