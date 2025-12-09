import ContentBlock from "@/app/components/content-block";
import { Company, Website } from "@/app/components/globals";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import ValueColumn from "@/app/components/reusable/ValueColumn";
import KansasMissouriMap from "@/app/components/maps/KansasMissouri";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Professional Painters in Kansas City - Locations, Services & Free Estimate - Paint Innovators",
  description:
    "Explore our Kansas City location offering residential and commercial painting services. Get a free estimate today for custom, interior, exterior painting & more.",
  openGraph: {
    title:
      "Professional Painters in Kansas City - Locations, Services & Free Estimate - Paint Innovators",
    description:
      "Explore our Kansas City location offering residential and commercial painting services. Get a free estimate today for custom, interior, exterior painting & more.",
    url: `${Website}/locations/kansas-city`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/locations/Kansas-City.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Professional Painters in Kansas City - Locations, Services & Free Estimate - Paint Innovators",
      },
    ],
  },
};

export default function KansasCityLocation() {
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
              src={"/locations/Kansas-City.jpg"}
              alt="Professional painting services Kansas and Missouri"
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
            Industrial and Commercial Painting in Kansas City
          </h1>
          <p className="text-shadow">
            View our interactive map below to see all our areas of service in Kansas City and the surrounding region.
          </p>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>

      <ServingTagline />

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/locations/Kansas-City-02.jpg"
        imageAlt="Kansas City painting services"
        overlayText="Now Serving"
        borderSubtitle={true}
        overlayTextSubtitle="Kansas City, MO"
        contentBorderOff={true}
        heading="Expanding Our Services"
        content={`Paint Innovators is proud to expand our painting and contracting services to Kansas City, Missouri. Our new Kansas City location at 1819 Central St, Kansas City, MO 64108 brings our commitment to quality craftsmanship and professional service to this vibrant region.`}
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/locations/Kansas-City-01.jpg"
        imageAlt="Kansas City painting team"
        overlayText="Painting & Contracting"
        borderSubtitle={true}
        heading="Transform Your Space"
        contentBorderOff={true}
        overlayTextSubtitle="Commercial & Residential"
        content="At our Kansas City location, we have a team of experienced painters and technicians dedicated to excellence. Paint Innovators offers comprehensive painting and contractor services to residential and commercial clients including custom painting, interior painting, exterior painting, drywall repair, cabinet & door staining or painting, concrete staining and epoxy floors, and deck coatings."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ContentBlock
        sectionClassName="bg-white text-black pt-7"
        containerClassName="max-w-screen-lg mx-auto pt-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <h2 className="uppercase font-aspira-bold text-accent text-5xl">
          Our Kansas City Location
        </h2>
        <p className="text-gray-700 text-2xl pt-8 mb-20 font-aspira-bold">
          {Company} is honored to serve the Kansas City community. Our team of top-rated painters and technicians are committed to bringing professional-quality painting services to residential and commercial properties throughout the Kansas City metropolitan area. We&apos;re dedicated to being a trusted partner for all your painting and contracting needs.
        </p>
        <div className="divider"></div>
        <div className="mb-20"></div>
      </ContentBlock>

      <ContentBlock
        sectionClassName="mb-20"
        containerClassName="max-w-screen-lg mx-auto py-3 px-4"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <KansasMissouriMap />
        <h2 className="mt-10 font-aspira-bold text-accent text-2xl">
          Areas Served by our Kansas City location:
        </h2>
        <p className="text-gray-700 pt-8 mb-20 font-aspira-bold">
          Kansas City • Overland Park • Lenexa • Olathe • Lee&apos;s Summit • Shawnee • Westwood • Mission • Roeland Park • Fairway • Prairie Village • Merriam • Independence • Blue Springs • Gladstone • Parkville • Leawood • Lees Summit • North Kansas City • Raytown • Grandview • Liberty • Kearney • Excelsior Springs • Peculiar • Belton
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
        <div className="w-full flex flex-wrap justify-start">
          <ValueColumn
            number={1}
            heading="All That Jazz"
            text='A jazz hub from the 1920s-40s, Kansas City earned the nickname "Paris of the Plains." Jazz legends like Louis Armstrong and Count Basie performed here. Today, live jazz thrives at 40 venues throughout the city.'
            delay={0.1}
          />

          <ValueColumn
            className="order-2 md:order-3"
            number={2}
            heading="City of Fountains"
            text="Kansas City has 200+ fountains—second only to Rome. Originally 1800s drinking stations, they became ornate sculptures. Notable examples include Mill Creek Fountain and the Henry Wollman Bloch Fountain."
            delay={0.2}
          />

          <ValueColumn
            className="order-3 md:order-5"
            number={3}
            heading="Barbecue Capital"
            text="Kansas City's barbecue began in the 1920s with Henry Perry. Pioneers like Bryant and Gates followed in the 1930s-40s. Today, 100+ restaurants serve KC 'cue, with burnt ends the signature dish."
            delay={0.3}
          />

          <ValueColumn
            className="order-4 md:order-2"
            number={4}
            heading="Spanish-Inspired Charm"
            text="Country Club Plaza opened in 1922 as America's first suburban shopping district. Its 15 blocks feature Spanish-inspired Seville architecture with terracotta roofs, tilework and sculptures."
            delay={0.4}
          />
          <ValueColumn
            className="order-5"
            number={4}
            heading="Fifa World Cup 2026 Host"
            text="Kansas City is officially a host city for the 2026 FIFA World Cup, one of 16 North American cities selected to host matches at Arrowhead Stadium (Kansas City Stadium). The city will host multiple matches, including several in the group stage and a knockout stage game, with preparations and excitement building for the event next summer. "
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