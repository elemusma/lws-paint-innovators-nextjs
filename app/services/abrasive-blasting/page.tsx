import ContentBlock from "@/app/components/content-block";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import TeamCol from "@/app/components/reusable/team-col";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Link from "next/link";
import { Company, Website } from "../../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title:
    "Blasting & Painting – Automotive, Graffiti, Marine – Paint Innovators",
  description:
    "Expert commercial painting services tailored to your business needs. We provide high-performance coatings with minimal disruption. Serving Arkansas, Oklahoma, and Colorado.",
  openGraph: {
    title:
      "Blasting & Painting – Automotive, Graffiti, Marine – Paint Innovators",
    description:
      "Expert commercial painting services tailored to your business needs. We provide high-performance coatings with minimal disruption. Serving Arkansas, Oklahoma, and Colorado.",
    url: `${Website}/services/sandblasting`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/gallery/Industrial-53.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial Painting Services",
      },
    ],
  },
};
export default function AbrasiveBlasting() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/gallery/Industrial-53.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
            Abrasive Blasting
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
          {Company} is a leading industrial painting and blasting company and
          provides the best surface stripping, painting, and coating services.
          Our wet and dry abrasive technologies lend themselves to a wide
          variety of uses and applications.
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
            img="/gallery/Industrial-42.jpg"
            name="Automotive"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Tape & Bed levels 1-5<br></br>Gypsum Board finishes<br></br>
                  Accent Walls<br></br>Doors and Trim<br></br>Caulking
                </p>
              </>
            }
          />
          <TeamCol
            img="/gallery/Industrial-28.jpg"
            name="Graffiti"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Elastomeric & Texture Coatings<br></br>Exterior Latex &
                  Acrylic<br></br>Metal Coatings
                </p>
                <div className="h-[40px]"></div>
              </>
            }
          />
          <TeamCol
            img="/gallery/Industrial-Applications-Marine.jpg"
            name="Marine"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.3}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Intumescents<br></br>CMU Coatings<br></br>Metal Coatings
                </p>
                <div className="h-[40px]"></div>
              </>
            }
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
          <TeamCol
            img="/gallery/Industrial-76.jpg"
            name="Concrete"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Wallcovering<br></br>Digital Wallcovering
                </p>
              </>
            }
          />
          <TeamCol
            img="/gallery/Industrial-82.jpg"
            name="Wood"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  A clean, blank canvas for future tenants.
                </p>
              </>
            }
          />
          <TeamCol
            img="/gallery/Industrial-19.jpg"
            name="Heavy Equipment"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.3}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Helping commercial space feel unique.
                </p>
              </>
            }
          />
          <div className="divider !mt-20 !mb-10"></div>
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/gallery/Industrial-06.jpg"
            name="Fleet Vehicles"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Helping commercial space feel unique.
                </p>
              </>
            }
          />
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/gallery/Industrial-42-Antiques.jpg"
            name="Antiques"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Helping commercial space feel unique.
                </p>
              </>
            }
          />
          <div className="divider !mt-20 !mb-10"></div>
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/gallery/Industrial-26.jpg"
            name="Fire Restorations"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Helping commercial space feel unique.
                </p>
              </>
            }
          />
          <TeamCol
            colClassName="lg:!w-1/2"
            img="/gallery/Industrial-18-Door-Etching.jpg"
            name="Etching"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center text-leading-relaxed text-lg">
                  Helping commercial space feel unique.
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
          ABRASIVE BLASTING SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Industrial-21.jpg"
        imageAlt="Wallpaper"
        overlayText="GRAFFITI-RESISTANT COATINGS"
        heading="Transform a Room"
        content="Whether it's restoring the beauty of antiques, creating unique finishes for commercial spaces, or ensuring durability through graffiti-resistant coatings, we have the expertise and technology to deliver exceptional results."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Industrial-33.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="BUILT TO LAST"
        heading="Transform a Room"
        content="Our team is committed to offering solutions tailored to your specific needs, helping to preserve and enhance the surfaces we treat. With Paint Innovators, you can trust us to provide high-quality blasting and painting services that stand the test of time."
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
