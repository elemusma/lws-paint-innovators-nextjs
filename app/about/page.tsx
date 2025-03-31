import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Company, Website } from "../components/globals";
import CompletedProjects from "../components/reusable/CompletedProjects";
import ImageContentBlock from "../components/reusable/ImageContentBlock";
import ValueColumn from "../components/reusable/ValueColumn";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";

export const metadata: Metadata = {
  title:
    "Our Story - How Paint Innovators Began - Quality Painting Services - Paint Innovators",
  description:
    "Discover the story behind Paint Innovators, founded by Rodney Barnes in 2014. Learn about our dedication to quality, integrity, and customer service in commercial, industrial, and residential painting.",
  openGraph: {
    title:
      "Our Story - How Paint Innovators Began - Quality Painting Services - Paint Innovators",
    description:
      "Discover the story behind Paint Innovators, founded by Rodney Barnes in 2014. Learn about our dedication to quality, integrity, and customer service in commercial, industrial, and residential painting.",
    url: `${Website}/about`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/team/Our-Story-Rodney-Barnes.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Our Story - How Paint Innovators Began - Quality Painting Services - Paint Innovators",
      },
    ],
  },
};
export default function AboutPage() {
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
              src={"/team/Our-Story-Rodney-Barnes.jpg"}
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
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold text-shadow">
            Our Story
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <h2 className="text-4xl font-aspira-light pt-4 uppercase">
          How It All Started
        </h2>
      </ContentBlock>
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Rodney-Family.jpg"
        imageClass=""
        imageAlt="Wallpaper"
        overlayText=""
        borderSubtitle={true}
        overlayTextSubtitle=""
        contentBorderOff={true}
        heading="Transform a Room"
        content="Founded in 2014 by Rodney Barnes, Paint Innovators was born out of the idea that quality should be at the forefront of every project regardless of being commercial, industrial or residential. For six years, we have been committed to delivering excellent customer service that is unmatched. Each day we are faced with difficult decisions in the course of our work, however we are assiduous when it comes to our values. Integrity is our highest priority."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/home/Paint-Innovators-2025-05.jpg"
        imageAlt="The History of Wall Paper"
        imageObjectPosition="50% 30%"
        overlayText=""
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle=""
        content="Our team aspires to represent each of our core values regardless of the circumstance.  At Paint Innovators, we diligently take responsibility, conduct ourselves with ethics and morals in order to achieve success, gain new customers, and expand relationships with existing customers."
        buttonLabel="Get Free Estimate"
        buttonLink="/contact"
      />
      {/* <IndustriesServed /> */}
      <ContentBlock
        sectionClassName="bg-white text-black py-20"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        {/* <h2 className="uppercase font-aspira-bold text-accent text-5xl">
          Our Team
        </h2> */}
        <p className="text-gray-700 text-2xl mb-20 font-aspira-bold">
          {Company}, is dedicated to quality painting. We have experienced and
          professional painters that specialize in commercial, industrial and
          residential painting and blasting - including interior painting and
          exterior painting for homes and offices.
        </p>
        <div className="divider"></div>
      </ContentBlock>
      <div className="spacer"></div>
      {/* <Image
        src="/assets/five-star-reviews.png"
        alt="Five Stars"
        className="mx-auto my-8"
        width={150}
        height={150}
      /> */}
      <ContentBlock
        sectionClassName="bg-gray-dark pt-[100px] pb-[65px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full flex flex-wrap justify-center"
      >
        <div className="text-center lg:w-3/4 w-full pb-10 px-4">
          <h3 className="font-pontiac-black uppercase text-accent-secondary">
            Our Core Values
          </h3>
          <h2 className="text-3xl font-pontiac-black text-white">
            Our 6 Core Behaviors “Values” That Shape The Essence Of How We Treat
            Each Other And Everyone Involved With Our Organization:
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <ValueColumn
            number={1}
            heading="Genuine Kindness and Desire To Help"
            text="We are an organization that puts kindness and a servant heart at the core of everything we do."
            delay={0.1}
          />

          <ValueColumn
            className="order-2 md:order-3"
            number={2}
            heading="Work With A Sense Of Urgency"
            text="We're busy and productive every day and specifically look for team members that enjoy being busy and productive."
            delay={0.2}
          />
          <ValueColumn
            className="order-3 md:order-5"
            number={3}
            heading="Genuine Kindness and Desire To Help"
            text="We want you to make the best decision for you and we want you to know all of your options before deciding to sell your land to us."
            delay={0.3}
          />

          <ValueColumn
            className="order-4 md:order-2"
            number={4}
            heading="Make Complicated Problems Simple"
            text="We value people that can take complex problems and make them simple for the people that want"
            delay={0.4}
          />

          <ValueColumn
            className="order-5 md:order-4"
            number={5}
            heading="Take The High Road"
            text="Whenever in doubt, we want our organization to always take the high road and do the right thing even when it's not always in our best interest."
            delay={0.5}
          />

          <ValueColumn
            className="order-6 md:order-6"
            number={6}
            heading="Be Humble"
            text="We are not an organization that has room for people that show up with a lot of ego. Humility is a quality we respect in our organization."
            delay={0.6}
          />
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
