import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import CTA from "../components/reusable/cta";
import ImageContentBlock from "../components/reusable/ImageContentBlock";
import ServingTagline from "../components/reusable/serving-tagline";
import TeamCol from "../components/reusable/team-col";

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
              src={"/services/Services-Exterior-Painting-03.jpg"}
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
            Professional Painter Services
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            Industrial <span className="text-accent">&bull;</span> Commercial{" "}
            <span className="text-accent">&bull;</span> Government
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
            img="/team/Rodney-Family.jpg"
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
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            img="/team/Rodney-Family.jpg"
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
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <div className="divider !mt-20 !mb-[4rem]"></div>
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          <TeamCol
            img="/team/Rodney-Family.jpg"
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
            buttonLink="/services/color-consultation-custom-painting"
            buttonText="Learn More"
            buttonAriaLabel="Learn more about commercial painting services"
          />
          {/* <div className="py-10 relative"> */}
          <div className="divider !mt-20 !mb-10"></div>
          {/* </div> */}
        </div>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Ensuring-Quality.jpg"
        imageAlt="Wallpaper"
        overlayText="Residential Painting"
        borderSubtitle={true}
        overlayTextSubtitle="Craftmanship and Inspection of Every Job"
        contentBorderOff={true}
        heading="Transform a Room"
        content="New wall covering can transform a room, going from boring to beautiful. But before you can determine the best approach to removing wallpaper, you need to know the type of wallcovering and the type of wall surface under the wallpaper."
        buttonLabel="Read Residential Painting"
        buttonLink="/services/residential-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Commercial Painting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Color Consultation & Custom Painting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Exterior Painting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Interior Painting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="New Construction Painting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Popcorn Ceiling Removal"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Wallpaper Removal"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Drywall Repair"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Deck Coating"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Industrial Coating"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Epoxy Floors"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Pressure Washing"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="COVID-19 Sanitation"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />

      <CTA />
      <div className="spacer"></div>
    </>
  );
}
