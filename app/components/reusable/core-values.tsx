import ContentBlock from "../content-block";
import Tabs, { Tab } from "../tabs";

export default function CoreValues() {
  const tabsData: Tab[] = [
    {
      title: "Integrity",
      content: (
        <div>
          <p>
            At Paint Innovators, integrity is our highest priority. We are
            committed to delivering excellent customer service with ethics and
            morals, and we diligently take responsibility for our work to ensure
            your complete satisfaction.
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Safety",
      content: (
        <div>
          <p>
            Safety is paramount in everything we do. We strictly adhere to CDC
            Safety Guidelines during all our in-person estimates and painting
            projects.
          </p>
        </div>
      ),
      // No custom classes/styles; will use defaults.
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Respect",
      content: (
        <div>
          <p>
            We believe in treating every client and their property with the
            utmost respect. We are committed to fostering a positive and
            professional environment
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
        <h2 className="text-5xl font-aspira-thin">CORE VALUES</h2>
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
