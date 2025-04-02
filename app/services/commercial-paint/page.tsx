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
    "Commercial Paint & Architectural Coatings – Performance Coatings – Paint Innovators",
  description:
    "Expert commercial painting services tailored to your business needs. We provide high-performance coatings with minimal disruption. Serving Arkansas, Oklahoma, and Colorado.",
  openGraph: {
    title:
      "Commercial Paint & Architectural Coatings – Professional & Durable Finishes – Paint Innovators",
    description:
      "Expert commercial painting services tailored to your business needs. We provide high-performance coatings with minimal disruption. Serving Arkansas, Oklahoma, and Colorado.",
    url: `${Website}/services/commercial-paint`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-Commercial-02.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Commercial Painting Services",
      },
    ],
  },
};
export default function CommercialPaint() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/home/Paint-Innovators-Commercial-02.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
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
            Commercial Paint &amp; Architectural Coatings
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
          {Company} we offer a comprehensive range of commercial paint and
          architectural coating services designed to enhance the aesthetic
          appeal, durability, and performance of your building. Whether
          it&apos;s a commercial office, retail space, or industrial facility,
          our expert team delivers results tailored to your specific needs.
        </p>
      </ContentBlock>

      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center relative"
        columnClassName=""
      >
        <div className="absolute bg-light w-full h-[90%] top-[10%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/home/Paint-Innovators-Commercial-02.jpg"
            name="Interiors"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center leading-loose">
                  Seamless Drywall<br></br>Tape &amp; Bed Levels 1-5<br></br>
                  Decorative Walls<br></br>Gypsum Board Finishes<br></br>
                  Accent Walls<br></br>Doors, Trim &amp; Finishes<br></br>
                  Caulking
                </p>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-Commercial-01.jpg"
            name="Exteriors"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center leading-loose">
                  Protective Coatings for Stucco<br></br>Elastomeric &amp;
                  Texture Coatings<br></br>Wood & Metal<br></br>Exterior Latex
                  &amp; Acrylic<br></br>
                  Metal Coatings<br></br>Weatherproofing Sealants<br></br>Stucco
                  & Masonry Finishes
                </p>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-04.jpg"
            name="High-Performance Coatings"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.3}
            description={
              <>
                <p className="text-center leading-loose pb-[3px]">
                  Fireproofing (Intumescents)<br></br>Concrete Masonry Unit
                  (CMU) Coatings<br></br>Metal Coatings
                  <br></br>High-Performance Epoxies<br></br>Anti-Graffiti
                  Coatings
                </p>
              </>
            }
          />
          <div className="divider !mt-20 !mb-10"></div>

          <TeamCol
            img="/home/Paint-Innovators-2025-01.jpg"
            name="Finishes"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.1}
            description={
              <>
                <p className="text-center leading-loose">
                  Traditional Wallcovering<br></br>Digital Wallcovering<br></br>
                  Venetian Plaster<br></br>Dry Erase & Chalkboard Paints
                </p>
                <div className="h-[15px] hidden lg:block"></div>
              </>
            }
          />

          <TeamCol
            img="/services/Services-Epoxy-Floors-Concrete-Staining.jpg"
            name="Structural Foundation &amp; Shell"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.2}
            description={
              <>
                <p className="text-center leading-loose pb-[5px]">
                  Priming and Base Coatings<br></br>Durable Industrial-Grade
                  Paints<br></br>
                  Fireproofing Applications
                  <br></br>Exposed Structure Finishes
                </p>
              </>
            }
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-12.jpg"
            name="Tenant Space Enhancements"
            nameTag="h2"
            nameTagClassName="text-xl text-accent font-proxima-bold uppercase"
            role=""
            delay={0.3}
            description={
              <>
                <p className="text-center leading-loose">
                  Inviting Commercial Environments<br></br>
                  High-Traffic Wear-Resistant Finishes<br></br>Acoustic &
                  Soundproofing Coatings
                </p>
                <div className="h-[20px] hidden lg:block"></div>
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
          COMMERCIAL PAINT &amp; ARCHITECTURAL COATINGS SERVICES
        </h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/home/Paint-Innovators-2025-07.jpg"
        imageAlt="Wallpaper"
        overlayText="SEAMLESS DRYWALL"
        heading="Transform a Room"
        content="Our interior services cover seamless drywall, tape and bed levels 1-5, and decorative wall finishes like accent walls, gypsum board finishes, and doors, trim, and caulking. For exteriors, we specialize in protective coatings for stucco, elastomeric and texture coatings, wood and metal finishes, as well as weatherproofing sealants to protect your building from the elements. Our performance coatings include fireproofing, concrete masonry unit (CMU) coatings, high-performance epoxies, and anti-graffiti coatings, providing added protection and longevity for your facility."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Commercial-Painting-01.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="DIGITAL WALLCOVERING"
        heading="Transform a Room"
        content="Additionally, we offer a variety of specialty finishes to suit unique design preferences, including traditional and digital wallcovering, Venetian plaster, decorative faux finishes, and dry erase or chalkboard paints. Our core and shell services ensure your building's foundation is secure with durable industrial-grade paints, priming, and fireproofing applications. For tenant improvements, we focus on creating inviting commercial environments with high-traffic wear-resistant finishes and acoustic or soundproofing coatings to meet the diverse needs of your business. At Paint Innovators, we are committed to providing premium coatings and finishes that enhance the value, functionality, and safety of your commercial space."
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
