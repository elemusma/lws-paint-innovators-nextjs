import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import CTA from "../components/reusable/cta";
import ProjectsWorkedOn from "../components/reusable/projects-worked-on";
import ServingTagline from "../components/reusable/serving-tagline";
import TeamCol from "../components/reusable/team-col";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";

export default function Services() {
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
              src={"/home/Paint-Innovators-2025-05.jpg"}
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
          <h1 className="text-6xl uppercase font-proxima-bold text-shadow">
            Professional Painter Services
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            Commercial <span className="text-accent">&bull;</span> Industrial{" "}
            <span className="text-accent">&bull;</span> Residential
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
        <div className="absolute bg-light w-full h-[96%] top-[4%] left-0"></div>
        <div className="relative flex flex-wrap justify-center">
          <TeamCol
            img="/home/Paint-Innovators-Commercial-02.jpg"
            name="Commercial Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We service small businesses, large corporations, medical
                facilities, education centers, hospitality and industrial
                service centers, and offices.
              </p>
            }
            buttonLink="/services/commercial-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/gallery/Industrial-33.jpg"
            name="Industrial Painting &amp; Blasting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Our wet and dry abrasive technologies lend themselves to a wide
                variety of uses and applications.
              </p>
            }
            buttonLink="/services/industrial-painting-blasting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-12.jpg"
            name="Color Consultation &amp; Custom Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We find the right match for homes or businesses, aligning with
                the owner&apos;s taste and current design.
              </p>
            }
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/home/Paint-Innovators-Commercial-01.jpg"
            name="Exterior Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We paint homes, businesses, commercial structures, rental
                properties, apartments, doors, parking lot identification,
                windows, trim, siding, gutters.
              </p>
            }
            buttonLink="/services/exterior-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-11.jpg"
            name="Interior Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We paint doors, cabinets, doors, closets, waiting areas,
                shelving, living rooms, kitchens, dining room, family rooms,
                bedrooms, bathrooms, bathroom stalls.
              </p>
            }
            buttonLink="/services/interior-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/work/Paint-Innovators-NWA-Homes.jpg"
            name="New Construction Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Paint Innovators makes sure the painting of your new
                construction project will run smoothly.
              </p>
            }
            buttonLink="/services/new-construction-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/services/Services-Popcorn-Ceiling-Removal-Paint-Innovators.jpg"
            name="Popcorn Ceiling Removal"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Popcorn ceilings are textured and have became obsolete. We can
                help remove and replace it with a smooth surface that suits your
                style.
              </p>
            }
            buttonLink="/services/popcorn-ceiling-removal"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/services/Services-Wallpaper-Removal.jpg"
            name="Wallpaper Removal"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Want a change of space? We need a fresh surface to paint. We can
                remove old wallpaper and freshen up your home or business with
                paint or a new wallpaper covering.
              </p>
            }
            buttonLink="/services/wallpaper-removal"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/services/Services-Drywall-Repair.jpg"
            name="Drywall Repair"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We can repair holes, cuts, deformities and replace all or some
                sections of drywall. Wen we paint, we need a fresh and flat
                surface to ensure the paint looks its best.
              </p>
            }
            buttonLink="/services/drywall-repair"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/services/Services-Deck-Coating.jpg"
            name="Deck Coating"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We can apply a coating to decks, deck stairs, deck rails, beams,
                or any other wood that needs a protective coating. Ensure your
                deck maintains its beauty for years.
              </p>
            }
            buttonLink="/services/deck-coating"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/services/Services-Industrial-Coating-Paint-Innovators.jpg"
            name="Industrial Coating"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Industrial coatings protect structures and surfaces against
                decay and corrosion. Protect your machinery, appliances,
                building components, and equipment.
              </p>
            }
            buttonLink="/services/industrial-coating"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/services/Services-Epoxy-Floors-Concrete-Staining.jpg"
            name="Epoxy Floors"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                Epoxy floors is a 2 part process for concrete floors that offers
                design and protection for garage floors. The coating is
                available in different colors that match your space.
              </p>
            }
            buttonLink="/services/epoxy-floors"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/services/Services-Pressure-Washing-Paint-Innovators-in-Arkansas-and-Oklahoma.jpg"
            name="Pressure Washing"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We can pressure wash siding, brick, concrete, sidewalks,
                driveways, windows, facia, fences, and more. Remove the dirt and
                grime from a large or small surface area.
              </p>
            }
            buttonLink="/services/pressure-washing"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/services/Services-Covid-19-Sanitation-Paint-Innvovators.jpg"
            name="COVID-19 Sanitation"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                COVID-19 sanitation rids your home or office or the virus. We
                utilize high powered systems to kill bacteria and viruses in the
                air. We do one-time or reoccurring sanitations.
              </p>
            }
            buttonLink="/services/covid19-sanitation"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/home/Paint-Innovators-2025-09.jpg"
            name="Residential Painting"
            nameTag="h2"
            nameTagClassName="text-2xl"
            role=""
            delay={0.1}
            description={
              <p>
                We can paint homes, storage sheds, tool sheds, fences, indoors
                and outdoors, as well as trim, siding and gutters. We adjust to
                your needs.
              </p>
            }
            buttonLink="/services/residential-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about residential painting services"
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
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
