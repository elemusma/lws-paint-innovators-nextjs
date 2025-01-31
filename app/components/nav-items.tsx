"use client";
import { useEffect } from "react";
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
              const children = subMenu.children;
              subMenu.style.height = `${
                (children[0] as HTMLElement).offsetHeight * children.length
              }px`;
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
          <ul className="flex lg:justify-end items-center justify-center">
            <li className="relative">
              <a href="/our-team" style={{}}>
                Our Team
              </a>
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div>
            </li>
            <li className="menu-item-has-children relative text-left">
              <a
                href="#"
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
              </a>
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  // backgroundColor: "#231f20",
                  backgroundColor: "var(--neutral-dark)",
                }}
              >
                <li className="hover:border-[var(--neutral-dark)] hover:border hover:bg-gray-50 transition-all duration-500 border border-transparent">
                  <a
                    href="/services/painting"
                    className="block px-4 py-2 text-white"
                  >
                    Painting
                  </a>
                </li>
                <li className="hover:border-[var(--neutral-dark)] hover:border hover:bg-gray-50 transition-all duration-500 border border-transparent">
                  <a
                    href="/services/coating"
                    className="block px-4 py-2 text-white"
                  >
                    Coating
                  </a>
                </li>
                <li className="hover:border-[var(--neutral-dark)] hover:border hover:bg-gray-50 transition-all duration-500 border border-transparent">
                  <a
                    href="/services/maintenance"
                    className="block px-4 py-2 text-white"
                  >
                    Maintenance
                  </a>
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
          <ul className="flex lg:justify-start items-center justify-center">
            <li className="relative">
              <a href="/our-team">Our Work</a>
              <div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[25px]"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></div>
            </li>
            <li>
              <a href="/our-team">Contact Us </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
