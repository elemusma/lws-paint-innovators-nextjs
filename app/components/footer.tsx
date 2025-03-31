import Image from "next/image";
import Link from "next/link";
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
            <div className="w-full md:w-1/4 w-full pb-10 relative">
              <p className="text-xl font-proxima-bold mb-0">Services</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link href="/services/commercial-painting">
                    Commercial Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/industrial-painting-blasting">
                    Industrial Painting &amp; Blasting
                  </Link>
                </li>
                <li>
                  <Link href="/services/color-consultation-custom-painting">
                    Color Consultation &amp; Custom Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/exterior-painting">
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/interior-painting">
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
                    New Construction Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/popcorn-ceiling-removal">
                    Popcorn Ceiling Removal
                  </Link>
                </li>
                <li>
                  <Link href="/services/wallpaper-removal">
                    Wallpaper Removal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 w-full pb-10 relative">
              <div style={{ height: 28 }}></div>
              <ul className="list-none text-sm">
                <li>
                  <Link href="/services/drywall-repair">Drywall Repair</Link>
                </li>
                <li>
                  <Link href="/services/deck-coating">Deck Coating</Link>
                </li>
                <li>
                  <Link href="/services/industrial-coating">
                    Industrial Coating
                  </Link>
                </li>
                <li>
                  <Link href="/services/epoxy-floors">Epoxy Floors</Link>
                </li>
                <li>
                  <Link href="/services/pressure-washing">
                    Pressure Washing
                  </Link>
                </li>
                <li>
                  <Link href="/services/covid-19-sanitation">
                    COVID-19 Sanitation
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential-painting">
                    Residential Painting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 pb-10">
              <p className="text-xl font-proxima-bold mb-0">Industries</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link href="/industries">All Industries</Link>
                </li>
                <li>
                  <Link href="/industries/commercial">Commercial</Link>
                </li>
                <li>
                  <Link href="/industries/industrial">Industrial</Link>
                </li>
                <li>
                  <Link href="/industries/residential">Residential</Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/4 pb-10">
              <p className="text-xl font-proxima-bold mb-0">Locations</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link href="/locations">All Locations</Link>
                </li>
                <li>
                  <Link href="/locations/arkansas">Arkansas Location</Link>
                </li>
                <li>
                  <Link href="/locations/oklahoma">Oklahoma Location</Link>
                </li>
                <li>
                  <Link href="/locations/colorado">Colorado Location</Link>
                </li>
              </ul>
            </div>

            <div className="relative w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">Projects</p>
              <div className="flex flex-wrap pr-10">
                <div className="w-full">
                  <ul className="list-none text-sm mt-0">
                    <li>
                      <Link href="/projects">All Projects</Link>
                    </li>
                    <li>
                      <Link href="/projects/commercial-painting">
                        Commercial Painting Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/industrial">
                        Industrial Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/interior-exterior-painting">
                        Interior Painting and Exterior Painting
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/other-contractor-services">
                        Other Contractor Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/residential-painting">
                        Residential Painting Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">About</p>
              <ul className="list-none text-sm mt-0">
                <li>
                  <Link href="/about">Our Story</Link>
                </li>
                <li>
                  <Link href="/about/team">Our Team</Link>
                </li>
                <li>
                  <Link href="/news">News / Blog</Link>
                </li>
                <li>
                  <Link href="/about/brandresources">Brand Resources</Link>
                </li>
                <li>
                  <Link href="/about/website-feedback">Website Feedback</Link>
                </li>
                <li>
                  <Link href="/about/service-feedback">Service Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="relative w-full md:w-1/4 w-full pb-10">
              <p className="text-xl font-proxima-bold mb-0">Careers</p>
              <div className="flex flex-wrap pr-10">
                <div className="w-full">
                  <ul className="list-none text-sm mt-0">
                    <li>
                      <Link href="/careers">All Careers</Link>
                    </li>
                    <li>
                      <Link href="/careers/painter-drywall-finisher">
                        Painter / Drywall Finisher
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers/pintor-masero">
                        El Pintor / Masero
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers/office-associate">
                        Office Associate
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers/project-estimator">
                        Project Estimator
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers/project-manager">
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
                      <Link href="/get-estimate">Get Free Estimate</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/about/reviews">Reviews</Link>
                    </li>
                    <li>
                      <Link href="/about/po-submittal">PO Submittal</Link>
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
                <a href="/privacy-policy">Privacy Policy</a>
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
