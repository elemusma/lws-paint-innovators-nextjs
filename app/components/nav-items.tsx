"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "../styles/nav-items.scss";
import "../styles/nav.scss";
import Logo from "./logo";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import AboutLinks from "./reusable/nav/aboutLinks";
import CareersLinks from "./reusable/nav/careersLinks";
import IndustriesLinks from "./reusable/nav/industriesLinks";
import LocationsLinks from "./reusable/nav/locationsLinks";
import ProjectsLinks from "./reusable/nav/projectsLinks";
import ServicesLinks from "./reusable/nav/servicesLinks";

export default function NavItems({ logoContainerClassName = "" }) {
  const menuRef = useRef<boolean>(false);
  // const router = useRouter();
  // const currentPath = router.pathname;
  const pathname = usePathname(); // Get the current route

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
                className={`flex items-center gap-1 ${
                  pathname.startsWith("/services")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
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
                  width: "215px",
                }}
              >
                <ServicesLinks />
              </ul>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link
                href="/industries"
                className={`flex items-center gap-1 ${
                  pathname.startsWith("/industries")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
              >
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
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "150px",
                }}
              >
                <IndustriesLinks />
              </ul>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link
                href="/locations"
                className={`flex items-center gap-1 ${
                  pathname.startsWith("/locations")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
              >
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
              <ul
                className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  height: "0px",
                  backgroundColor: "var(--neutral-dark)",
                  width: "150px",
                }}
              >
                <LocationsLinks />
              </ul>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link
                href="/about"
                className={`flex items-center gap-1 uppercase ${
                  pathname.startsWith("/about")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
              >
                About
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
                  width: "175px",
                }}
              >
                <AboutLinks />
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
                href="/news"
                className={`flex items-center gap-1 uppercase ${
                  pathname.startsWith("/news")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
                style={{}}
              >
                News/Blog
              </Link>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link
                href="/projects"
                className={`flex items-center gap-1 uppercase ${
                  pathname.startsWith("/projects")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
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
                <ProjectsLinks />
              </ul>
            </li>
            <li className="menu-item-has-children main-title relative text-left">
              <Link
                href="/careers"
                className={`flex items-center gap-1 uppercase ${
                  pathname.startsWith("/careers")
                    ? "text-accent font-bold active-with-children"
                    : ""
                }`}
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
                  width: "225px",
                }}
              >
                <CareersLinks />
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
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
