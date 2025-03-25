import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Company } from "../../components/globals";
import IndustriesServed from "../../components/reusable/core-values";
import TeamCol from "../../components/reusable/team-col";
import ValueColumn from "../../components/reusable/ValueColumn";
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
    "Paint Innovators Team - Professional Painters in Oklahoma, Arkansas and Colorado",
  description:
    "Founded by Rodney Barnes in 2014. Victor Caldera and Allen Wootten are our Project Managers.",
  openGraph: {
    title:
      "Paint Innovators Team - Professional Painters in Oklahoma, Arkansas and Colorado",
    description:
      "Founded by Rodney Barnes in 2014. Victor Caldera and Allen Wootten are our Project Managers.",
    url: `{Website}/wallpaper-removal`, // Replace with actual URL
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
export default function OurTeam() {
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
              src={"/team/Team.jpg"}
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
            Our Team
          </h1>
          <h2 className="font-aspira-bold text-2xl">
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
        <h2 className="text-4xl font-aspira-light pt-4">OUR VISION</h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Ensuring-Quality.jpg"
        imageAlt="Wallpaper"
        overlayText="Ensuring Quality & Safety"
        borderSubtitle={true}
        overlayTextSubtitle="Craftmanship and Inspection of Every Job"
        contentBorderOff={true}
        heading="Transform a Room"
        content="New wall covering can transform a room, going from boring to beautiful. But before you can determine the best approach to removing wallpaper, you need to know the type of wallcovering and the type of wall surface under the wallpaper."
        buttonLabel="Get Free Estimate"
        buttonLink="/contact"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="It's Our Team That Makes Us Successful"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Get Free Estimate"
        buttonLink="/contact"
      />

      <IndustriesServed />
      <ContentBlock
        sectionClassName="bg-white text-black pt-7"
        containerClassName="max-w-screen-lg mx-auto pt-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <h2 className="uppercase font-aspira-bold text-accent text-5xl">
          Our Team
        </h2>
        <p className="text-gray-700 text-2xl pt-8 mb-20 font-aspira-bold">
          {Company}, is dedicated to quality painting. We have experienced and
          professional painters that specialize in residential and commercial
          painting - including interior painting and exterior painting for homes
          and offices.
        </p>
        <div className="divider"></div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-4"
      >
        <div className="absolute bg-light w-full h-[90%] top-[10%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/team/Rodney-Family.jpg"
            name="Rodney Barnes"
            role="Owner"
            delay={0.1}
            description={
              <>
                <p className="">
                  Originally from West Fork, Arkansas, Rodney began working in
                  the paint industry immediately out of high school. He started
                  working at Spectrum Paint Company in 2006 and followed the
                  company to the east coast as a paint salesman in Myrtle Beach,
                  SC in 2012. During his years working in the store and as a
                  salesman, he acquired a vast knowledge of paint including
                  ingredients, colors, palettes, tools, enhancements, and
                  finishes.
                </p>
                <p>
                  In 2014, Rodney and his family moved back to Northwest
                  Arkansas where they started Paint Innovators, Inc. They began
                  with a small crew and made sure that the focus was on quality
                  painting with professional painters. The company grew quickly
                  and expanded from residential into commercial - Paint
                  Innovators received a commercial license in 2016 and expanded
                  into Oklahoma in 2019. Rodney credits his team for the
                  continued growth over the years - they make the difference!
                </p>
              </>
            }
          />
          <TeamCol
            img="/team/Victor-Caldera.jpg"
            name="Victor Caldera"
            role="Project Manager"
            delay={0.2}
            description={
              <>
                <p className="">
                  Victor started out as a project estimator at Paint Innovators
                  and then transitioned to Project Manager. Victor has been with
                  us for 3 years and has 6+ years of painting and contractor
                  experience. At Paint Innovators, Victor ensures painting and
                  contractor projects run smoothly and efficiently in order to
                  exceed client expectations and meet project deadlines.
                </p>
                <p>
                  He ensures customer satisfaction, organizes and motivates his
                  team, and oversees the painting or construction project from
                  beginning to end. What does Victor like about working at Paint
                  Innovators? “The culture.” Victor&apos;s Hobbies: Fishing,
                  playing basketball, camping, reading, podcasting, golf, family
                  time, UFC, and boxing. Victor&apos;s Favorite quote:
                  “Sometimes you will never know the value of a moment, until it
                  becomes a memory.” - Dr Seuss
                </p>
              </>
            }
          />
          <TeamCol
            img="/team/Allen-Wootten.jpg"
            name="Allen Wootten"
            role="Project Manager"
            delay={0.3}
            description={
              <>
                <p className="">
                  Allen has been with Paint Innovators for 2 years. As a Project
                  Manager, Allen plans and oversees painting and epoxy projects
                  to make sure they are completed according to schedule and
                  within budget.
                </p>
                <p>
                  He also monitors project progress and communicates with his
                  team to establish scope of work. Allen is dedicated to
                  exceeding customer expectations and ensuring clients&apos;
                  receive quality workmanship.
                </p>
              </>
            }
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
          <TeamCol
            img="/team/Hope-Smith.jpg"
            name="Hope Smith"
            role="Office Manager"
            delay={0.1}
            description={
              <>
                <p className="">
                  Hope is the Office Manager. She has been with Paint Innovators
                  for over 4 years. Hope provides support to the the owner and
                  other staff members and also takes care of Accounts Payable,
                  Accounts Receivable, Payroll, Human Resources, and any other
                  things that arise. Hope has over 20 years of office
                  experience.
                </p>
                <p>
                  What do you like about working at PI? “I enjoy the challenge
                  that comes with working in an office of a small business with
                  a variety of daily tasks.” Hope&apos;s Hobbies: Spending time
                  with family, listening to audio books, hanging out and playing
                  games with friends. Hope&apos;s Favorite quote: “You never
                  fail until you stop trying.” - Albert Einstein
                </p>
              </>
            }
          />
          <TeamCol
            img="/team/Jeff-Berger.jpg"
            name="Jeff Berger"
            role="Project Estimator"
            delay={0.2}
            description={
              <>
                <p className="">
                  Jeff has been a Project Estimator at Paint Innovators for over
                  5 years and has over 16 years of experience in the paint
                  industry. He estimates painting and contractor services for
                  commercial customers. Jeff is responsible for overseeing cost
                  to complete a project and provides an array of services to
                  clients.
                </p>
                <p>
                  What do you like about working at PI? “I really like
                  collaborating with people who have the same vision and
                  dedication.” Jeff&apos;s Hobbies: Leisure time with my
                  friends, golfing and hunting. Jeff&apos;s Favorite quote: “We
                  are what we repeatedly do. Excellence, therefore, is not an
                  act but a habit.” - Aristotle
                </p>
              </>
            }
          />
          <div className="divider !mt-20 !mb-10"></div>
        </div>
      </ContentBlock>

      <Image
        src="/assets/five-star-reviews.png"
        alt="Five Stars"
        className="mx-auto my-8"
        width={150}
        height={150}
      />

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
