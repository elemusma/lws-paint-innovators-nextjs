import ContentBlock from "../content-block";
import ValueColumn from "./ValueColumn";

export default function CoreValuesBlock() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-gray-dark pt-[100px] pb-[65px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full flex flex-wrap justify-center"
      >
        <div className="text-center lg:w-3/4 w-full pb-10 px-4">
          <h3 className="font-pontiac-black uppercase text-accent-secondary">
            Our Core Values
          </h3>
          <h2 className="text-3xl font-pontiac-black text-white">
            Our 6 Core Behaviors “Values” That Shape The Essence Of How We Treat
            Each Other And Everyone Involved With Our Organization:
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <ValueColumn
            number={1}
            heading="Genuine Kindness and Desire To Help"
            text="We are an organization that puts kindness and a servant heart at the core of everything we do."
            delay={0.1}
          />

          <ValueColumn
            className="order-2 md:order-3"
            number={2}
            heading="Work With A Sense Of Urgency"
            text="We're busy and productive every day and specifically look for team members that enjoy being busy and productive."
            delay={0.2}
          />
          <ValueColumn
            className="order-3 md:order-5"
            number={3}
            heading="Genuine Kindness and Desire To Help"
            text="We want you to make the best decision for you and we want you to know all of your options before deciding to sell your land to us."
            delay={0.3}
          />

          <ValueColumn
            className="order-4 md:order-2"
            number={4}
            heading="Make Complicated Problems Simple"
            text="We value people that can take complex problems and make them simple for the people that want"
            delay={0.4}
          />

          <ValueColumn
            className="order-5 md:order-4"
            number={5}
            heading="Take The High Road"
            text="Whenever in doubt, we want our organization to always take the high road and do the right thing even when it's not always in our best interest."
            delay={0.5}
          />

          <ValueColumn
            className="order-6 md:order-6"
            number={6}
            heading="Be Humble"
            text="We are not an organization that has room for people that show up with a lot of ego. Humility is a quality we respect in our organization."
            delay={0.6}
          />
        </div>
      </ContentBlock>
    </>
  );
}
