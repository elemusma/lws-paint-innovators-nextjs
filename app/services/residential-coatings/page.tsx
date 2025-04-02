import ContentBlock from "@/app/components/content-block";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import TeamCol from "@/app/components/reusable/team-col";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";
import { Company, Website } from "../../components/globals";

export const metadata: Metadata = {
  title:
    "Residential Coatings – Deck Coatings, Epoxy Floors, Popcorn Ceilings Removal – Paint Innovators",
  description:
    "Protect and enhance your deck with durable coatings that resist wear and weather, providing a long-lasting finish and improved aesthetics. Serving Arkansas, Oklahoma, and Colorado.",
  openGraph: {
    title:
      "Residential Coatings – Deck Coatings, Epoxy Floors, Popcorn Ceilings Removal – Paint Innovators",
    description:
      "Protect and enhance your deck with durable coatings that resist wear and weather, providing a long-lasting finish and improved aesthetics. Serving Arkansas, Oklahoma, and Colorado.",
    url: `${Website}/services/residential-coatings`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-03.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial Painting Services",
      },
    ],
  },
};
export default function ResidentialCoatings() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/home/Paint-Innovators-2025-03.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
                    src={"/services/Services-Residential-Painting.jpg"}
                    alt="Wall paper removal"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ objectFit: "cover", objectPosition: "right" }}
                    fill
                  /> */}
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
            Residential Coatings
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

      {/* <div className="spacer"></div> */}

      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <p className="text-gray-700 text-2xl pt-8 mb-4 font-aspira-bold">
          {Company} provides durable deck coatings that withstand the elements,
          modern epoxy floors that offer both beauty and performance. Paint
          Innovators ensures each project is completed with the utmost attention
          to detail.
        </p>
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
            colClassName="lg:!w-1/2"
            img="/gallery/Other-Contractor-Services.jpg"
            name="Deck Coatings"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Protect and enhance your deck with durable coatings that
                  resist wear and weather, providing a long-lasting finish and
                  improved aesthetics.
                </p>
              </>
            }
          />
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/gallery/Contractor-Services-17.jpg"
            name="Epoxy floors"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Transform your space with high-performance epoxy floors,
                  offering a sleek, durable finish that&apos;s resistant to
                  stains, spills, and heavy traffic.
                </p>
              </>
            }
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/services/Services-Popcorn-Ceiling-Removal-Paint-Innovators.jpg"
            name="Popcorn Ceilings Removal"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Update your home or office by removing outdated popcorn
                  ceilings for a smooth, modern look that adds value and
                  improves the atmosphere.
                </p>
              </>
            }
          />
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/services/wall-paper-removal/04-We-Make-It-Easy.jpg"
            name="Drywall Repair"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Restore your walls to perfect condition with expert drywall
                  repair services, fixing holes, cracks, and seams for a
                  flawless finish.
                </p>
              </>
            }
          />
          <div className="divider !mt-20 !mb-10"></div>
        </div>
      </ContentBlock>

      <ProjectsWorkedOn />

      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <div className="divider"></div>
        <h2 className="md:text-5xl text-4xl font-aspira-light pt-4">
          RESIDENTIAL COATINGS SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/home/Paint-Innovators-2025-03.jpg"
        imageAlt="Wallpaper"
        overlayText="TRANSFORM YOUR HOME"
        heading="Transform a Room"
        content="Our residential coating services go beyond simple paint jobs—we offer comprehensive solutions designed to protect, enhance, and transform your home. We use high-performance materials and the latest techniques to ensure that every surface is beautifully finished and built to last. Whether you're looking to refresh your interior walls with a modern look or revamp your exterior to increase curb appeal, our team works closely with you to bring your vision to life. We take pride in our precision and commitment to quality, ensuring that your home not only looks great but also maintains its beauty over time."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/home/Paint-Innovators-2025-13.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="STYLE &amp; DURABILITY"
        heading="Transform a Room"
        content="In addition to traditional painting, we offer specialized services like epoxy flooring and deck coatings that provide both style and durability. Our epoxy floors are perfect for high-traffic areas, offering easy maintenance and a sleek finish that stands up to wear and tear. For outdoor spaces, our deck coatings offer superior protection against the elements, keeping your deck looking pristine for years. Whatever your residential coating needs may be, Paint Innovators is here to deliver exceptional results that add lasting value to your home."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

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
