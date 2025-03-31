import type { Metadata } from "next";
import Image from "next/image";
import ContentBlock from "../components/content-block";
import ContactForm from "../components/forms/ContactForm";
import { Website } from "../components/globals";
import CompletedProjects from "../components/reusable/CompletedProjects";
import Testimonials from "../components/reusable/Testimonials";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title:
    "Contact Us - Commercial, Industrial & Residential Painting Services - Paint Innovators",
  description:
    "Reach out to Paint Innovators by filling out the contact form. Our team will get back to you within 24-48 hours to assist with your needs.",
  openGraph: {
    title:
      "Contact Us - Commercial, Industrial & Residential Painting Services - Paint Innovators",
    description:
      "Reach out to Paint Innovators by filling out the contact form. Our team will get back to you within 24-48 hours to assist with your needs.",
    url: `${Website}/contact`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-12.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Contact Us - Commercial, Industrial & Residential Painting Services - Paint Innovators",
      },
    ],
  },
};
export default function ContactPage() {
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
              src={"/home/Paint-Innovators-2025-12.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "bottom" }}
              fill
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-aspira-thin uppercase">
            Send Us a Message
          </h1>
          <p>
            Fill out the contact form below and our team will reach out to you
            within 24 - 48 hours.
          </p>
        </div>
        <ContactForm />
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
