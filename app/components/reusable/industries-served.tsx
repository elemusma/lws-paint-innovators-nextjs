import ContentBlock from "../content-block";
import Tabs, { Tab } from "../tabs";

export default function IndustriesServed() {
  const tabsData: Tab[] = [
    {
      title: "Residential",
      content: (
        <div>
          <p>
            Residential Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Commercial",
      content: (
        <div>
          <p>
            Commercial Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      ),
      // No custom classes/styles; will use defaults.
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Government",
      content: (
        <div>
          <p>
            Government Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-full", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
  ];
  return (
    <>
      <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-5xl font-aspira-thin">INDUSTRIES SERVED</h2>
      </ContentBlock>
      <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container max-w-screen-lg mx-auto"
        headerClassName="flex flex-wrap overflow-hidden justify-center mb-4 px-4 headerClassName"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
        contentClassName="p-4"
      />
    </>
  );
}
