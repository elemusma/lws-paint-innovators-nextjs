"use client";
import Link from "next/link";
import { useEffect } from "react";
import "../styles/nav-items.scss";
import "../styles/nav.scss";
import Logo from "./logo";

export default function NavItems({ logoContainerClassName = "" }) {
  useEffect(() => {
    const handleDropdowns = () => {
      const menuItems = document.querySelectorAll(".menu-item-has-children");

      menuItems.forEach((item) => {
        const subMenu = item.querySelector(".sub-menu") as HTMLElement;

        if (window.matchMedia("(min-width: 1200px)").matches) {
          item.addEventListener("mouseover", () => {
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
          });

          item.addEventListener("mouseout", () => {
            if (subMenu?.classList.contains("active-sub-menu")) {
              subMenu.classList.remove("active-sub-menu");
              subMenu.style.height = "0px";
            }
          });
        }
      });
    };

    handleDropdowns();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="lg:w-1/3 w-7/12 lg:text-right lg:order-1 order-2">
          <ul className="flex lg:justify-end items-center justify-center main-menu">
            <li className="relative">
              <Link href="/our-team">Our Team</Link>
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
                  <Link href="/services/new-construction-painting">
                    Popcorn Ceiling Removal
                  </Link>
                </li>
                <li>
                  <Link href="/services/wall-paper-removal">
                    Wallpaper Removal
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
                    Drywall Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
                    Deck Coating
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
                    Industrial Coating
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
                    Epoxy Floors
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
                    Pressure Washing
                  </Link>
                </li>
                <li>
                  <Link href="/services/new-construction-painting">
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
            <li className="relative">
              <Link href="/our-team">Our Work</Link>
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div>
            </li>
            <li>
              <Link href="/our-team">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
