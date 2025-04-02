"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/footer.scss";
import "../styles/social-icons.scss";
import {
  ArkansasAddress,
  ArkansasPhone,
  ColoradoAddress,
  ColoradoPhone,
  Company,
  Email,
  OklahomaAddress,
  OklahomaPhone,
  Phone,
} from "./globals.js";
import Logo from "./logo";
import SocialIcons from "./reusable/socialIcons";

export default function Footer() {
  const pathname = usePathname(); // Get the current route
  return (
    <>
      <footer>
        <div
          className="w-full relative font-aspira-black italic"
          style={{ marginBottom: "-50px" }}
        >
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3">
              <div
                className="location h-full py-20 relative lg:mr-2 overflow-hidden px-10 flex justify-center items-center"
                style={{}}
              >
                <Image
                  src="/photos/Arkansas.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt="Arkansas Professional Painters. Get Free Estimate"
                  fill
                />
                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50"></div>
                <div
                  className="relative text-center text-white text-shadow"
                  style={{}}
                >
                  <h2 className="text-3xl uppercase">Arkansas</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: ArkansasAddress }}
                    className="text-sm"
                  ></p>
                  <a href={`tel:+${ArkansasPhone}`} className="text-3xl">
                    {ArkansasPhone}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 text-right">
              <div
                className="location h-full py-20 relative lg:mr-2 overflow-hidden px-10 flex justify-center items-center"
                style={{}}
              >
                <Image
                  src="/photos/Oklahoma.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt="Oklahoma Professional Painters. Get Free Estimate"
                  fill
                />
                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50"></div>
                <div
                  className="relative text-center text-white text-shadow"
                  style={{}}
                >
                  <h2 className="text-3xl uppercase">Oklahoma</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: OklahomaAddress }}
                    className="text:sm"
                  ></p>
                  <a href={`tel:+${OklahomaPhone}`} className="text-3xl">
                    {OklahomaPhone}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 text-right">
              <div
                className="location h-full py-20 relative lg:mr-2 overflow-hidden px-10"
                style={{}}
              >
                <Image
                  src="/photos/Colorado.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt="Colorado Professional Painters. Get Free Estimate"
                  fill
                />

                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50"></div>
                <div
                  className="relative text-center text-white text-shadow"
                  style={{}}
                >
                  <h2 className="uppercase text-3xl">Colorado</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: ColoradoAddress }}
                    className="text:sm"
                  ></p>
                  <a href={`tel:+${ColoradoPhone}`} className="text-3xl">
                    {ColoradoPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navigation */}
        <div className="max-w-screen-lg mx-auto relative">
          <div className="flex flex-wrap items-center justify-center">
            <div className="md:w-1/3 w-full">
              <Logo />
            </div>
          </div>
          {/* <NavItems logoContainerClassName="lg:w-1/3" /> */}
        </div>
        {/* columns */}
        <div className="max-w-screen-lg mx-auto pt-10 pb-10 lg:px-0 px-4">
          <div className="flex flex-wrap justify-start">
            <div className="relative w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">Projects</p>
              <div className="flex flex-wrap pr-10">
                <div className="w-full">
                  <ul className="list-none text-sm mt-0">
                    <li>
                      <Link
                        href="/projects"
                        className={`${pathname === "/projects" ? "active text-accent" : ""}`}
                      >
                        All Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/commercial-painting"
                        className={`${pathname === "/projects/commercial-painting" ? "active text-accent" : ""}`}
                      >
                        Commercial Painting Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/industrial"
                        className={`${pathname === "/projects/industrial" ? "active text-accent" : ""}`}
                      >
                        Industrial Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/interior-exterior-painting"
                        className={`${pathname === "/projects/interior-exterior-painting" ? "active text-accent" : ""}`}
                      >
                        Interior Painting and Exterior Painting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/other-contractor-services"
                        className={`${pathname === "/projects/other-contractor-services" ? "active text-accent" : ""}`}
                      >
                        Other Contractor Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/residential-painting"
                        className={`${pathname === "/projects/residential-painting" ? "active text-accent" : ""}`}
                      >
                        Residential Painting Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 w-full pb-0 md:pb-10 relative">
              <p className="text-xl font-proxima-bold mb-0">Services</p>
              <ul className="list-none text-sm m-0">
                <li>
                  <Link
                    href="/services/commercial-paint"
                    className={`${
                      pathname === "/services/commercial-paint"
                        ? "active text-accent"
                        : ""
                    }`}
                  >
                    Architectural Coatings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/maintenance-coatings"
                    className={`${
                      pathname === "/services/maintenance-coatings"
                        ? "active text-accent"
                        : ""
                    }`}
                  >
                    Maintenance Coatings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/sandblasting"
                    className={`${
                      pathname === "/services/sandblasting"
                        ? "active text-accent"
                        : ""
                    }`}
                  >
                    Sandblasting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/residential-coatings"
                    className={`${
                      pathname === "/services/residential-coatings"
                        ? "active text-accent"
                        : ""
                    }`}
                  >
                    Residential Coatings
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/services/interior-painting"
                    className={`${
                      pathname === "/services/interior-painting"
                        ? "active text-accent"
                        : ""
                    }`}
                  >
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/new-construction-painting"
                    className={`${pathname === "/services/new-construction-painting" ? "active text-accent" : ""}`}
                  >
                    New Construction Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/popcorn-ceiling-removal"
                    className={`${pathname === "/services/popcorn-ceiling-removal" ? "active text-accent" : ""}`}
                  >
                    Popcorn Ceiling Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/wallpaper-removal"
                    className={`${pathname === "/services/wallpaper-removal" ? "active text-accent" : ""}`}
                  >
                    Wallpaper Removal
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* <div className="w-full md:w-1/4 w-full pb-10 relative">
              <div className="hidden md:block" style={{ height: 28 }}></div>
              <ul className="list-none text-sm mt-0 md:mt-[1rem]">
                <li>
                  <Link
                    href="/services/drywall-repair"
                    className={`${pathname === "/services/drywall-repair" ? "active text-accent" : ""}`}
                  >
                    Drywall Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/deck-coating"
                    className={`${pathname === "/services/deck-coating" ? "active text-accent" : ""}`}
                  >
                    Deck Coating
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/industrial-coating"
                    className={`${pathname === "/services/industrial-coating" ? "active text-accent" : ""}`}
                  >
                    Industrial Coating
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/epoxy-floors"
                    className={`${pathname === "/services/epoxy-floors" ? "active text-accent" : ""}`}
                  >
                    Epoxy Floors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pressure-washing"
                    className={`${pathname === "/services/pressure-washing" ? "active text-accent" : ""}`}
                  >
                    Pressure Washing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/covid-19-sanitation"
                    className={`${pathname === "/services/covid-19-sanitation" ? "active text-accent" : ""}`}
                  >
                    COVID-19 Sanitation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/residential-painting"
                    className={`${pathname === "/services/residential-painting" ? "active text-accent" : ""}`}
                  >
                    Residential Painting
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="w-full md:w-1/4 pb-10">
              <p className="text-xl font-proxima-bold mb-0">Industries</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link
                    href="/industries"
                    className={`${pathname === "/industries" ? "active text-accent" : ""}`}
                  >
                    All Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/commercial"
                    className={`${pathname === "/industries/commercial" ? "active text-accent" : ""}`}
                  >
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/industrial"
                    className={`${pathname === "/industries/industrial" ? "active text-accent" : ""}`}
                  >
                    Industrial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/residential"
                    className={`${pathname === "/industries/residential" ? "active text-accent" : ""}`}
                  >
                    Residential
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 pb-10">
              <p className="text-xl font-proxima-bold mb-0">Locations</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link
                    href="/locations"
                    className={`${pathname === "/locations" ? "active text-accent" : ""}`}
                  >
                    All Locations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/arkansas"
                    className={`${pathname === "/locations/arkansas" ? "active text-accent" : ""}`}
                  >
                    Arkansas Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/oklahoma"
                    className={`${pathname === "/locations/oklahoma" ? "active text-accent" : ""}`}
                  >
                    Oklahoma Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/colorado"
                    className={`${pathname === "/locations/colorado" ? "active text-accent" : ""}`}
                  >
                    Colorado Location
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">About</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link
                    href="/about"
                    className={`${pathname === "/about" ? "active text-accent" : ""}`}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={`${pathname === "/news" ? "active text-accent" : ""}`}
                  >
                    News / Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/brandresources"
                    className={`${pathname === "/about/brandresources" ? "active text-accent" : ""}`}
                  >
                    Brand Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/website-feedback"
                    className={`${pathname === "/about/website-feedback" ? "active text-accent" : ""}`}
                  >
                    Website Feedback
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/service-feedback"
                    className={`${pathname === "/about/service-feedback" ? "active text-accent" : ""}`}
                  >
                    Service Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">Careers</p>
              <div className="flex flex-wrap pr-10">
                <div className="w-full">
                  <ul className="list-none text-sm mt-0">
                    <li>
                      <Link
                        href="/careers"
                        className={`${pathname === "/careers" ? "active text-accent" : ""}`}
                      >
                        All Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers/painter-drywall-finisher"
                        className={`${pathname === "/careers/painter-drywall-finisher" ? "active text-accent" : ""}`}
                      >
                        Painter / Drywall Finisher
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers/pintor-masero"
                        className={`${pathname === "/careers/pintor-masero" ? "active text-accent" : ""}`}
                      >
                        El Pintor / Masero
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers/office-associate"
                        className={`${pathname === "/careers/office-associate" ? "active text-accent" : ""}`}
                      >
                        Office Associate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers/project-estimator"
                        className={`${pathname === "/careers/project-estimator" ? "active text-accent" : ""}`}
                      >
                        Project Estimator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers/project-manager"
                        className={`${pathname === "/careers/project-manager" ? "active text-accent" : ""}`}
                      >
                        Project Manager
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">Helpful Links</p>
              <div className="flex flex-wrap pr-10">
                <div className="w-full">
                  <ul className="list-none text-sm mt-0">
                    <li>
                      <Link
                        href="/get-estimate"
                        className={`${pathname === "/get-estimate" ? "active text-accent" : ""}`}
                      >
                        Get Free Estimate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={`${pathname === "/contact" ? "active text-accent" : ""}`}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faqs"
                        className={`${pathname === "/faqs" ? "active text-accent" : ""}`}
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/reviews"
                        className={`${pathname === "/about/reviews" ? "active text-accent" : ""}`}
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/po-submittal"
                        className={`${pathname === "/about/po-submittal" ? "active text-accent" : ""}`}
                      >
                        PO Submittal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* icons */}
        <div className="max-w-screen-lg mx-auto pt-10 pb-10">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/3 text-right flex lg:justify-start justify-center lg:pb-0 pb-10">
              <SocialIcons />
            </div>
            <div className="w-full lg:w-1/3 text-center">
              <a href={`tel:+${Phone}`}>
                <Image
                  src="/assets/Headphones-Black.png"
                  className="m-auto"
                  width={65}
                  height={65}
                  alt="Customer Support"
                />
                <strong>
                  <em>{Phone}</em>
                </strong>
              </a>
            </div>
            <div className="w-full lg:w-1/3 lg:text-right text-center text-sm">
              <p>
                &copy;{new Date().getFullYear()} {Company}
                <br></br>
                <a href={`mailto:${Email}`}>
                  <strong>
                    <em>{Email}</em>
                  </strong>
                </a>
                <br></br>
                <a
                  href="/privacy-policy"
                  className={`${pathname === "/privacy-policy" ? "active text-accent" : ""}`}
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="text-center bg-neutral-green px-[70px]"
          style={{ paddingTop: "10px", paddingBottom: "10px", color: "gray" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <small>
              <a
                href="https://latinowebstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Web Design &amp; SEO based out of Denver, Colorado. Seven years of experience in the web design &smp; SEO industry. With a strong background in frontend development."
              >
                Web Design &amp; SEO
              </a>{" "}
              done by Latino Web Studio.
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
