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

        if (window.matchMedia("(min-width: 1200px)").matches) {
          // Remove any existing listeners first
          const mouseoverHandler = () => {
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
        }
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
        <div className="lg:w-1/3 w-7/12 lg:text-right lg:order-1 order-2">
          <ul className="flex lg:justify-end items-center justify-center main-menu">
            <li className="relative">
              <Link href="/about/team">Our Team</Link>
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div>
            </li>
            <li className="menu-item-has-children relative text-left">
              <Link
                href="/services"
                className="flex items-center gap-1"
                style={{ padding: "40px 10px" }}
              >
                Services
                <svg
                  className="w-4 h-4"
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
                  <Link href="/services/residential-painting">
                    Residential Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-painting">
                    Commercial Painting
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
              </ul>
            </li>
          </ul>
        </div>

        <div
          className={`w-3/4 md:w-2/3 lg:order-2 order-1 ${
            logoContainerClassName || "lg:w-1/6"
          }`}
        >
          <Logo />
        </div>

        <div className="lg:w-1/3 w-7/12 lg:order-3 order-3">
          <ul className="flex lg:justify-start items-center justify-center main-menu">
            <li className="menu-item-has-children relative text-left">
              <Link
                href="/projects"
                className="flex items-center gap-1"
                style={{ padding: "40px 10px" }}
              >
                Our Work
                <svg
                  className="w-4 h-4"
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
                  <Link href="/projects/residential-painting">
                    Residential Painting Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects/commercial-painting">
                    Commercial Painting Projects
                  </Link>
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
              </ul>
            </li>
            <li className="relative">
              <Link href="/contact">Contact Us</Link>
              <div
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
