import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import { Website } from "../components/globals";
import CTA from "../components/reusable/cta";
import ProjectsWorkedOn from "../components/reusable/projects-worked-on";
import ServingTagline from "../components/reusable/serving-tagline";
import TeamCol from "../components/reusable/team-col";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Careers - Join Our Team - Painter, Drywall Finisher, Project Manager & More - Paint Innovators",
  description:
    "Explore exciting career opportunities at Paint Innovators. We’re hiring painters, drywall finishers, project managers, office associates, and more. Apply now to join our team.",
  openGraph: {
    title:
      "Careers - Join Our Team - Painter, Drywall Finisher, Project Manager & More - Paint Innovators",
    description:
      "Explore exciting career opportunities at Paint Innovators. We’re hiring painters, drywall finishers, project managers, office associates, and more. Apply now to join our team.",
    url: `${Website}/careers`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Careers - Join Our Team - Painter, Drywall Finisher, Project Manager & More - Paint Innovators",
      },
    ],
  },
};
export default function CareersPage() {
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
              src={"/gallery/Industrial-64.jpg"}
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
          <h1 className="md:text-6xl text-4xl uppercase font-proxima-bold text-shadow">
            We&apos;re Hiring
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            We Get the Job Done Right!
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
        columnClassName="w-full relative px-4"
      >
        <div className="absolute bg-light w-full h-[85%] top-[15%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/gallery/Commercial-Painting-07.jpg"
            name="Painter / Drywall Finisher"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="">
                Painters work on job sites on a daily basis. They are directly
                involved in both residential and commercial painting projects.
              </p>
            }
            buttonLink="/careers/painter-drywall-finisher"
            buttonText="Apply to Job"
            buttonAriaLabel="Apply to Painter / Drywall Finisher Job"
          />
          <TeamCol
            img="/gallery/Commercial-Painting-05.jpg"
            name="El Pintor / Masero"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Los pintores trabajan en obras diariamente. Están directamente
                involucrados en proyectos de pintura tanto residenciales como
                comerciales.
              </p>
            }
            buttonLink="/careers/pintor-masero"
            buttonText="Apply to Job"
            buttonAriaLabel="Apply to El Pintor / Masero Job"
          />
          <TeamCol
            img="/gallery/Commercial-Painting-03.jpg"
            name="Office Associate"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                They answer incoming calls, help with scheduling and develop
                working relationships with all team members to ensure
                expectations are met.
              </p>
            }
            buttonLink="/careers/office-associate"
            buttonText="Apply to Job"
            buttonAriaLabel="Apply to Office Associate Job"
          />
          <TeamCol
            img="/home/Paint-Innovators-Commercial-02.jpg"
            name="Project Estimator"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="">
                Project Estimators interact with commercial customers, prepare
                proposals, answer questions, and ensure customer satisfaction.
              </p>
            }
            buttonLink="/careers/project-estimator"
            buttonText="Apply to Job"
            buttonAriaLabel="Apply to Project Estimator Job"
          />
          <TeamCol
            img="/gallery/Commercial-Painting-18.jpg"
            name="Project Manager"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Project Managers work with paint crews on job sites and manage
                the organization of painting teams and customer communication.
              </p>
            }
            buttonLink="/careers/project-manager"
            buttonText="Apply to Job"
            buttonAriaLabel="Apply to Project Manager Job"
          />

          <div className="divider !mt-20 !mb-[4rem]"></div>

          {/* </div> */}
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <ProjectsWorkedOn />
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
