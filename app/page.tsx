import ContentBlock from "@/app/components/content-block";
import Logo from "@/app/components/logo";
import Image from "next/image";
import Link from "next/link";
import SwiperCarousel from "./components/swiperCarousel";
import Tabs from "./components/tabs";

export default function Home() {
  const tabsData = [
    {
      title: "Tab 1",
      content: (
        <div>
          <p>This is the content for Tab 1.</p>
        </div>
      ),
    },
    {
      title: "Tab 2",
      content: (
        <div>
          <p>This is the content for Tab 2.</p>
        </div>
      ),
    },
    {
      title: "Tab 3",
      content: (
        <div>
          <p>This is the content for Tab 3.</p>
        </div>
      ),
    },
  ];
  return (
    <>
      {/* <p>hey theres</p> */}
      <SwiperCarousel />
      <ContentBlock
        sectionClassName="bg-accent text-white"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-3xl font-bold">
          SERVING ARKANSAS, OKLAHOMA &amp; COLORADO
        </h2>
      </ContentBlock>
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName=""
        columnClassName="flex flex-col md:flex-row items-center relative"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/assets/Home/Our-Team-Bg.jpg"}
              alt="Paint Innovators Industrial"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "contain", objectPosition: "right" }}
              width={100}
              height={100}
            />
          </>
        }
      >
        {/* <div className="flex flex-col lg:flex-row items-center relative"> */}
        <div className="w-full md:w-1/2 lg:pr-10">
          <div className="divider"></div>
          <h2 className="text-5xl font-aspira-light my-4">OUR TEAM</h2>
          <h3 className="text-1xl font-poppins-black my-4">
            BUILT ON VALUES &amp; TRUST
          </h3>
          <p>
            Founded in 2014 by Rodney Barnes, Paint Innovators was born out of
            the idea that quality should be at the forefront of every project
            regardless of being residential or commercial. For six years, we
            have been committed to delivering excellent customer service that is
            unmatched. Each day we are faced with difficult decisions in the
            course of our work, however we are assiduous when it comes to our
            values. Integrity is our highest priority.
          </p>{" "}
          {/* <p>
             Our team aspires to represent
            each of our core values regardless of the circumstance. At Paint
            Innovators, we diligently take responsibility, conduct ourselves
            with ethics and morals in order to achieve success, gain new
            customers, and expand relationships with existing customers.
          </p> */}
          <Link href="/contact" className="btn-main mt-[20px]">
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:text-right">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPaintInnovators%2Fvideos%2F979154837397440%2F&show_text=false&width=267&t=0"
            width="50%"
            height="476"
            style={{
              border: "none",
              overflow: "hidden",
              display: "inline-block",
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPaintInnovators%2Fvideos%2F1098726621971511%2F&show_text=false&width=267&t=0"
            width="50%"
            height="476"
            style={{
              border: "none",
              overflow: "hidden",
              display: "inline-block",
            }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* </div> */}
      </ContentBlock>
      <div className="spacer"></div>
      <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container"
        headerClassName="flex justify-center mb-4"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white"
        contentClassName="p-4"
      />
      <Logo />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
