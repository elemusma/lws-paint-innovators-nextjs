import Image from "next/image";
// import ContactForm from "../components/contactForm";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import { Website } from "../../components/globals";
import CompletedProjects from "../../components/reusable/CompletedProjects";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";

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
    url: `${Website}/thank-you/po-submittal`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/gallery/Industrial-73.jpg`, // Replace with the actual image path
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
            <Image
              src={"/gallery/Industrial-73.jpg"}
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
        <p className="px-[50px] lg:w-3/4 w-full m-auto">
          Thank you for taking time to fill out a PO Submission form. You will
          be emailed a corresponding PO# shortly and will see the reflected job
          and PO# on the PO list.
        </p>
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
    </>
  );
}
