import ContentBlock from "../content-block";

export default function ServingTagline() {
  return (
    <>
    <ContentBlock
      sectionClassName="bg-[var(--accent-primary)] text-white"
      containerClassName="max-w-screen-lg mx-auto py-3"
      rowClassName="flex flex-col items-center"
      columnClassName="w-full text-center"
    >
      <h2 className="text-3xl font-proxima-bold">
        SERVING ARKANSAS, OKLAHOMA, COLORADO, KANSAS &amp; MISSOURI
      </h2>
    </ContentBlock>
    </>
  );
}
