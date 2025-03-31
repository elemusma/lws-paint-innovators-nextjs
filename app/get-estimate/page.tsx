import type { Metadata } from "next";
import Image from "next/image";
import ContentBlock from "../components/content-block";
import ContactFormRequestQuote from "../components/forms/ContactFormRequestQuote";
import { Website } from "../components/globals";
import CompletedProjects from "../components/reusable/CompletedProjects";
import Testimonials from "../components/reusable/Testimonials";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title: "Get a Free Estimate for Painting Services - Contact Paint Innovators",
  description:
    "Request a free estimate for your commercial or home painting project with Paint Innovators. Fill out the form to get in touch with a dedicated project estimator today.",
  openGraph: {
    title:
      "Get a Free Estimate for Painting Services - Contact Paint Innovators",
    description:
      "Request a free estimate for your commercial or home painting project with Paint Innovators. Fill out the form to get in touch with a dedicated project estimator today.",
    url: `${Website}/get-estimate`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-Commercial-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Get a Free Estimate for Painting Services - Contact Paint Innovators",
      },
    ],
  },
};
export default function GetEstimate() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative py-[35px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative bg-[rgba(0,0,0,0.5)] pt-10 px-5"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-Commercial-01.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <div className="text-center text-white md:w-3/4 w-full mx-auto">
          <h1 className="text-4xl text-shadow font-aspira-thin uppercase">
            Get a Free Estimate
          </h1>
          <p>
            Fill out what you can below and a dedicated project estimator will
            be in touch with you shortly to discuss your commercial painting
            project or home painting needs.
          </p>
        </div>
        <ContactFormRequestQuote />
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
      <Testimonials />
      <div className="spacer"></div>
    </>
  );
}
