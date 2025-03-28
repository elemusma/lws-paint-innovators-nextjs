"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "../styles/nav-items.scss";
import "../styles/nav.scss";
import Logo from "./logo";

export default function NavItems({ logoContainerClassName = "" }) {
  const menuRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (menuRef.current) return;
    menuRef.current = true;

    const handleDropdowns = () => {
      const menuItems = document.querySelectorAll(".menu-item-has-children");

      menuItems.forEach((item) => {
        const subMenu = item.querySelector(".sub-menu") as HTMLElement;

        // if (window.matchMedia("(min-width: 1200px)").matches) {
        // Remove any existing listeners first
        const mouseoverHandler = () => {
          console.log("Mouseover triggered"); // Debugging
          if (subMenu && !subMenu.classList.contains("active-sub-menu")) {
            subMenu.classList.add("active-sub-menu");

            // Calculate dynamic height based on children
            let totalHeight = 0;
            const children = subMenu.querySelectorAll("li");
            children.forEach((child) => {
              totalHeight += (child as HTMLElement).offsetHeight;
            });

            subMenu.style.height = `${totalHeight}px`;
          }
        };

        const mouseoutHandler = () => {
          if (subMenu?.classList.contains("active-sub-menu")) {
            subMenu.classList.remove("active-sub-menu");
            subMenu.style.height = "0px";
          }
        };

        item.addEventListener("mouseover", mouseoverHandler);
        item.addEventListener("mouseout", mouseoutHandler);

        // Cleanup function to remove event listeners
        return () => {
          item.removeEventListener("mouseover", mouseoverHandler);
          item.removeEventListener("mouseout", mouseoutHandler);
        };
        // }
      });
    };

    // Initial setup
    handleDropdowns();

    // Re-run on window resize
    window.addEventListener("resize", handleDropdowns);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleDropdowns);
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="lg:w-5/12 w-7/12 lg:text-right lg:order-1 order-2">
          <ul className="flex justify-end items-center main-menu m-0">
            <li className="menu-item-has-children main-title relative text-left">
              <Link
                href="/services"
                className="flex items-center gap-1"
                style={{}}
              >
                SERVICES
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "300px",
                }}
              >
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
                  <Link href="/services/covid19-sanitation">
                    COVID-19 Sanitation
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential-painting">
                    Residential Painting
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link href="/industries" className="flex items-center gap-1">
                INDUSTRIES
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {/* <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div> */}
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "150px",
                }}
              >
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
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link href="/locations" className="flex items-center gap-1">
                LOCATIONS
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {/* <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div> */}
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "150px",
                }}
              >
                <li>
                  <Link href="/locations/arkansas">Arkansas</Link>
                </li>
                <li>
                  <Link href="/locations/oklahoma">Oklahoma</Link>
                </li>
                <li>
                  <Link href="/locations/colorado">Colorado</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link href="/about" className="flex items-center gap-1">
                ABOUT
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {/* <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div> */}
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "150px",
                }}
              >
                <li>
                  <Link href="/about/team">Our Team</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          className={`w-3/4 md:w-2/3 lg:order-2 order-1 relative ${
            logoContainerClassName || "lg:w-1/6"
          }`}
        >
          <Logo className="lg:absolute relative lg:-top-[32px] px-4" />
        </div>

        <div className="lg:w-5/12 w-7/12 lg:order-3 order-3">
          <ul className="flex lg:justify-start items-center justify-center main-menu m-0">
            <li className="main-title relative text-left">
              <Link
                href="/news-blog"
                className="flex items-center gap-1 uppercase"
                style={{}}
              >
                News/Blog
              </Link>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              {/* <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div> */}
              <Link
                href="/projects"
                className="flex items-center gap-1 uppercase"
                style={{}}
              >
                Projects
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "300px",
                }}
              >
                <li>
                  <Link href="/projects/commercial-painting">
                    Commercial Painting Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects/industrial">Industrial Projects</Link>
                </li>
                <li>
                  <Link href="/projects/interior-exterior-painting">
                    Interior &amp; Exterior Painting Projects
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
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              {/* <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div> */}
              <Link
                href="/careers"
                className="flex items-center gap-1 uppercase"
                style={{}}
              >
                Careers
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "300px",
                }}
              >
                <li>
                  <Link href="/careers/painter-drywall-finisher">
                    Painter / Drywall Finisher
                  </Link>
                </li>
                <li>
                  <Link href="/careers/pintor-masero">El Pintor / Masero</Link>
                </li>
                <li>
                  <Link href="/careers/office-associate">Office Associate</Link>
                </li>
                <li>
                  <Link href="/careeers/project-estimator">
                    Project Estimator
                  </Link>
                </li>
                <li>
                  <Link href="/careers/project-manager">Project Manager</Link>
                </li>
              </ul>
            </li>
            <li className="relative main-title">
              <Link
                href="/contact"
                style={{ padding: "23px 10px" }}
                className="uppercase"
              >
                Contact
              </Link>
              {/* <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
