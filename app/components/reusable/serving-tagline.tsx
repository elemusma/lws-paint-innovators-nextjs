import ContentBlock from "../content-block";
import Image from "next/image";

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
        SERVING ARKANSAS, OKLAHOMA &amp; COLORADO
      </h2>
    </ContentBlock>
    </>
  );
}
