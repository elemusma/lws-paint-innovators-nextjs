import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArkansasAddress,
  ArkansasPhone,
  ColoradoPhone,
  EmailBilling,
  OklahomaAddress,
  OklahomaPhone,
  Website,
} from "../components/globals";
import ValueColumn from "../components/reusable/ValueColumn";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

// Define your fade-up variant:
// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };
export const metadata: Metadata = {
  title:
    "Frequently Asked Questions — Experienced Professional Painter in Arkansas and Oklahoma | Commercial and Residential Painting",
  description:
    "Founded by Rodney Barnes in 2014. Paint Innovators is your preferred choice for painting services in Arkansas and Oklahoma. We specialize in interior and exterior painting, wallpaper removal, and more. Contact us today!",
  openGraph: {
    title:
      "Frequently Asked Questions — Experienced Professional Painter in Arkansas and Oklahoma | Commercial and Residential Painting",
    description:
      "Founded by Rodney Barnes in 2014. Paint Innovators is your preferred choice for painting services in Arkansas and Oklahoma. We specialize in interior and exterior painting, wallpaper removal, and more. Contact us today!",
    url: `${Website}/team`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/team/Team.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function FrequentlyAskedQuestions() {
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
              src={"/home/Paint-Innovators-2025-16.jpg"}
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
          <h1 className="text-6xl uppercase font-aspira-light text-shadow">
            Frequently Asked Questions
          </h1>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />

      <ContentBlock
        sectionClassName="bg-white text-black pt-8 py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold pt-4">
          What is the phone number and address for the Arkansas office?
        </h2>
        <p>
          Our phone number in AR is{" "}
          <Link href={`tel:${ArkansasPhone}`} className="text-accent">
            {ArkansasPhone}
          </Link>{" "}
          and our address is:<br></br>
          <a
            href="https://goo.gl/maps/vyBujFC31QPySXm28"
            target="_blank"
            className="text-accent"
          >
            <span
              dangerouslySetInnerHTML={{ __html: ArkansasAddress }}
              className=""
            ></span>
          </a>
          .
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          What is the phone number and address for the Oklahoma office?
        </h2>
        <p>
          Our phone number in AR is{" "}
          <Link href={`tel:${OklahomaPhone}`} className="text-accent">
            {OklahomaPhone}
          </Link>{" "}
          and our address is:<br></br>
          <a
            href="https://goo.gl/maps/vyBujFC31QPySXm28"
            className="text-accent"
            target="_blank"
          >
            <span
              dangerouslySetInnerHTML={{ __html: OklahomaAddress }}
              className=""
            ></span>
          </a>
          .
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          What is the fax number for both locations?
        </h2>
        <p>Our fax number is (479) 347-7516.</p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          Who do I contact for billing or payment questions?
        </h2>
        <p>
          Please call our Arkansas Office at{" "}
          <Link href={`tel:${OklahomaPhone}`} className="text-accent">
            {OklahomaPhone}
          </Link>{" "}
          or email us at{" "}
          <a
            href={`mailto:${EmailBilling}`}
            className="text-accent"
            target="_blank"
          >
            {EmailBilling}
          </a>
          .
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          Why should I use Paint Innovators?
        </h2>
        <p>
          We have over{" "}
          <Link href="/our-story" className="text-accent">
            100+ combined years of painting and contractor experience
          </Link>
          , are well-established in the communities we serve, and are committed
          giving our clients quality and professional painting services to their
          homes and businesses.
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          What is the painting process for my home or commercial building?
        </h2>
        <p>
          Once a client requests a free,{" "}
          <Link href="/get-estimate" className="text-accent">
            no obligation estimate
          </Link>
          , our experienced estimator will schedule an appointment with the
          homeowner or commercial property owner. During the appointment, the
          estimator will work with the customer to determine what the
          customer&apos;s painting needs are, conduct a color consultation, and
          then will measure the area(s) to be painted. The estimator will create
          and send an estimate to the client via email within 24 hours (or on
          the next business day). Once the proposal is accepted, the painting
          team will schedule a time to complete the painting project. After
          project completion, payment is due via QuickBooks.
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          How do I request a quote or price estimate?
        </h2>
        <p>
          Call us at{" "}
          <Link href={`tel:${ArkansasPhone}`} className="text-accent">
            {ArkansasPhone}
          </Link>{" "}
          or{" "}
          <Link
            href="/get-estimate"
            title="click here to go to free estimate page"
            aria-label="click here to go to free estimate page"
            className="text-accent"
          >
            click here
          </Link>
          .
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          If I request a free estimate, how long will it take to hear back?
        </h2>
        <p>Within 24 hours or on the next business day..</p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">When is payment due?</h2>
        <p>
          Commercial projects are due according to contract terms and
          Residential Painting Jobs are due upon receipt of services. For more
          information about billings or payments,{" "}
          <a
            href="mailto:Ap@paintinnovators.com?subject=Billing%20or%20Payment%20Question"
            target="_blank"
            className="text-accent"
          >
            email us
          </a>
          .
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          What are Paint Innovators&apos; COVID-19 safety procedures?
        </h2>
        <p>
          Painting Estimates are completed in person, while adhering to CDC
          Safety Guidelines:
          <ul style={{ listStyle: "inherit" }} className="pl-8">
            <li>Painters and Field Specialists Wear Masks at All Times</li>
            <li>
              Social Distancing is Practiced - at Least 6 feet Away from
              Customers
            </li>
            <li>Hand Sanitation and Cleaning Project Area</li>
          </ul>
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          What areas does Paint Innovators serve?
        </h2>
        <p>
          Arkansas, Oklahoma, Colorado and other states across the country. For
          more information on our service areas, call us at{" "}
          <Link href={`tel:${ArkansasPhone}`} className="text-accent">
            {ArkansasPhone}
          </Link>{" "}
          in Arkansas or{" "}
          <Link href={`tel:${OklahomaPhone}`} className="text-accent">
            {OklahomaPhone}
          </Link>{" "}
          in Oklahoma or{" "}
          <Link href={`tel:${ColoradoPhone}`} className="text-accent">
            {ColoradoPhone}
          </Link>{" "}
          in Colorado.
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-4 pb-8"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h2 className="text-2xl font-aspira-bold">
          What services does Paint Innovators offer?
        </h2>
        <p>
          Painting - interior, indoor painting, exterior painting, outdoor
          painting, home painting, custom painting, new construction, drywall
          repair, trim, siding, and doors, popcorn removal, wallpaper removal,
          and color consultation.
        </p>
        <p className="mt-4">
          Other Services - cabinet staining, deck coating, epoxy floors,
          COVID-19 sanitation, and concrete staining.
        </p>
      </ContentBlock>

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
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
