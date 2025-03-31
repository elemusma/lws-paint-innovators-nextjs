import ContentBlock from "@/app/components/content-block";
import { Company, Website } from "@/app/components/globals";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import ValueColumn from "@/app/components/reusable/ValueColumn";
import OklahomaLocationMap from "@/app/map/OklahomaLocation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title:
    "Professional Painter in Oklahoma - Serving Tulsa, Oklahoma City, and More - Paint Innovators",
  description:
    "Transform your space with expert painting services in Oklahoma. Serving Tulsa, Broken Arrow, OKC, and surrounding areas. Get a free estimate today with Paint Innovators.",
  openGraph: {
    title:
      "Professional Painter in Oklahoma - Serving Tulsa, Oklahoma City, and More - Paint Innovators",
    description:
      "Transform your space with expert painting services in Oklahoma. Serving Tulsa, Broken Arrow, OKC, and surrounding areas. Get a free estimate today with Paint Innovators.",
    url: `${Website}/locations/oklahoma`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/photos/Oklahoma.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Professional Painter in Oklahoma - Serving Tulsa, Oklahoma City, and More - Paint Innovators",
      },
    ],
  },
};
export default function OklahomaLocation() {
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
              src={"/photos/Oklahoma.jpg"}
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
            Professional Painter in Oklahoma
          </h1>
          {/* <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2> */}
          <p className="text-shadow">
            View our interactive map below to see all our areas of service in
            Oklahoma.
          </p>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Ensuring-Quality.jpg"
        imageAlt="Wallpaper"
        overlayText="Our Second Location"
        borderSubtitle={true}
        overlayTextSubtitle="Opened in 2019"
        contentBorderOff={true}
        heading="Transform a Room"
        content="Paint Innovators Oklahoma office is located in Tulsa, Oklahoma, which is in Northeast Oklahoma. Our office is located off of N 108th Avenue on E Newton Street - across the street from General Parts Group in Tulsa County. Paint innovators opened its Tulsa, OK location in October 2019 and is excited to serve the communities of Tulsa, Broken Arrow, and Oklahoma City to name just a few!"
        buttonLabel="Get Free Estimate"
        buttonLink="/contact"
      />

      {/* <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Painting & Contracting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="Commercial & Residential"
        content="At our Tulsa location, we have a team of painters, technicians, and project managers to serve the professional painting needs of business owners and homeowners in Oklahoma. Paint Innovators is a painting company that is dedicated to quality painting, staining, deck coating, finishes, and more! We offer painting solutions for both commercial and residential painting projects across the state of OK."
        buttonLabel="Get Free Estimate"
        buttonLink="/contact"
      /> */}
      <ContentBlock
        sectionClassName="bg-white text-black pt-7"
        containerClassName="max-w-screen-lg mx-auto pt-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <h2 className="uppercase font-aspira-bold text-accent text-5xl">
          Our Oklahoma Location
        </h2>
        <p className="text-gray-700 text-2xl pt-8 mb-20 font-aspira-bold">
          {Company} at our Tulsa location, we have a team of painters,
          technicians, and project managers to serve the professional painting
          needs of business owners and homeowners in Oklahoma. Paint Innovators
          is a painting company that is dedicated to quality painting, staining,
          deck coating, finishes, and more! We offer painting solutions for both
          commercial and residential painting projects across the state of OK.
        </p>
        <div className="divider"></div>
        <div className="mb-20"></div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="mb-20"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <OklahomaLocationMap />
        <h2 className="mt-20 font-aspira-bold text-accent text-2xl">
          Cities Served by our Tulsa, Oklahoma location:
        </h2>
        <p className="text-gray-700 pt-8 mb-20 font-aspira-bold">
          Tulsa • Broken Arrow • Oklahoma City (OKC) • Glenpool • Jenks •
          Oakhurst • Owasso • Prue • Sand Springs • Sperry • Bixby • Mannford •
          Inola • Chouteau • Pryor • Bartlesville • Claremore • Terlton, OK •
          Depew • Bristow • Cushing • Drumright • Pawnee, OK • Bristow • Haskell
          • Coweta • Skiatook • Collinsville • Limestone • Catoosa • Fair Oaks
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
            Fun Facts
          </h3>
          <h2 className="text-3xl font-pontiac-black text-white">
            Did You Know?
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <ValueColumn
            number={1}
            heading="Riverside Gateway to the Universe"
            text="Tulsa is on the Arkansas River and some say that it is the center of the Universe."
            delay={0.1}
          />

          <ValueColumn
            className="order-2 md:order-3"
            number={2}
            heading="Second Largest City"
            text="According to Wikipedia - Tulsa, Oklahoma is the second largest city in Oklahoma and is the 47th most populous city in the US.  Population of about 401,000."
            delay={0.2}
          />
          <ValueColumn
            className="order-3 md:order-5"
            number={3}
            heading="Home to Fortune 500 Leaders"
            text="Tulsa is home to fortune 500 companies such as Williams, ONEOK, Avis, and NGL Energy Partners."
            delay={0.3}
          />

          <ValueColumn
            className="order-4 md:order-2"
            number={4}
            heading="A City Spanning Four Counties"
            text="Tulsa is located in Osage, Rogers, Tulsa, and Wagoner counties."
            delay={0.4}
          />
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
