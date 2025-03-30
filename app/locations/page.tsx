import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import CTA from "../components/reusable/cta";
import ProjectsWorkedOn from "../components/reusable/projects-worked-on";
import ServingTagline from "../components/reusable/serving-tagline";
import TeamCol from "../components/reusable/team-col";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";

export default function Locations() {
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
              src={"/gallery/Industrial-53.jpg"}
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
            Paint Innovators Locations
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            Arkansas <span className="text-accent">&bull;</span> Oklahoma{" "}
            <span className="text-accent">&bull;</span> Colorado
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
            img="/gallery/Interior-Exterior-Painting-02.jpg"
            name="Arkansas"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p className="text-sm text-accent">
                See all the locations that we serve in our Arkansas location.
              </p>
            }
            buttonLink="/locations/arkansas"
            buttonText="View Location"
            buttonAriaLabel="View our Arkansas location"
          />
          <TeamCol
            img="/gallery/Commercial-Painting-17.jpg"
            name="Oklahoma"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                See all the locations that we serve in our Oklahoma location.
              </p>
            }
            buttonLink="/locations/oklahoma"
            buttonText="View Location"
            buttonAriaLabel="View our Oklahoma location"
          />
          <TeamCol
            img="/gallery/Industrial-58.jpg"
            name="Colorado"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                See all the locations that we serve in our Oklahoma location.
              </p>
            }
            buttonLink="/locations/colorado"
            buttonText="View Location"
            buttonAriaLabel="View our Colorado location"
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
