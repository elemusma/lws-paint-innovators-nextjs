import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import CompletedProjects from "../components/reusable/CompletedProjects";
import CTA from "../components/reusable/cta";
import ServingTagline from "../components/reusable/serving-tagline";
import TeamCol from "../components/reusable/team-col";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";

export default function Work() {
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
              src={"/work/Paint-Innovators-NWA-Homes.jpg"}
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
            Our Work
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <div className="pt-[50px]"></div>
      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-4"
      >
        <div className="absolute bg-light w-full h-[85%] top-[15%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/home/Paint-Innovators-2025-15.jpg"
            name="Residential Painting Projects"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="text-sm text-accent">
                Paint Innovators has experience with all types of residential
                projects including interior painting, exterior painting, home
                painting, shed painting, trim, siding, and molding painting, and
                more. Here are photos of a few of our recent projects.
              </p>
            }
            buttonLink="/careers/painter-drywall-finisher"
            buttonText="View Project Photos"
            buttonAriaLabel="View Residential Painting Project Photos"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-08.jpg"
            name="Commercial Painting Projects"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Paint Innovators has experience with all types of commercial
                painting projects including interior painting, exterior
                painting, office painting, rental property painting, and
                building painting.
              </p>
            }
            buttonLink="/careers/pintor-masero"
            buttonText="View Project Photos"
            buttonAriaLabel="View Commercial Painting Project Photos"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-14.jpg"
            name="Interior &amp; Exterior Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Paint Innovators has over 100 years of combined painting
                experience. Our team is trained and committed to quality and
                accuracy. We help residential and commercial clients with
                interior painting, exterior painting, door painting, cabinet
                painting, and more.
              </p>
            }
            buttonLink="/careers/office-associate"
            buttonText="View Project Photos"
            buttonAriaLabel="View Interior &amp; Exterior Project Photos"
          />
          <TeamCol
            img="/home/Paint-Innovators-Commercial-02.jpg"
            name="Other Contractor Services"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="text-sm text-accent">
                Paint Innovators has experience with all types of painting and
                staining including wood cabinets and tables, Epoxy Floors,
                industrial coatings, deck coatings, and more.
              </p>
            }
            buttonLink="/careers/project-estimator"
            buttonText="View Project Photos"
            buttonAriaLabel="View Other Contractor Services Project Photos"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-09.jpg"
            name="View All Our Painting Services"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Residential / Commercial / Interior / Exterior Painting, Color
                Consultation & Custom Painting, New Construction Painting,
                Popcorn Ceiling Removal, Wallpaper Removal.
              </p>
            }
            buttonLink="/careers/project-manager"
            buttonText="View All Services"
            buttonAriaLabel="View All Our Painting and Removal Services"
          />

          <div className="divider !mt-20 !mb-[4rem]"></div>

          {/* </div> */}
        </div>
      </ContentBlock>

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
