import Link from "next/link";
import { usePathname } from "next/navigation";

interface IndustriesLinksProps {
  onClick?: () => void;
}

export default function ServicesLinks({ onClick }: IndustriesLinksProps) {
  const pathname = usePathname(); // Get the current route

  return (
    <>
      {[
        {
          name: "Architectural Coatings",
          path: "/services/commercial-paint",
        },
        {
          name: "Maintenance Coatings",
          path: "/services/maintenance-coatings",
        },
        {
          name: "Sandblasting",
          path: "/services/sandblasting",
        },
        {
          name: "Residential Coatings",
          path: "/services/residential-coatings",
        },
        // {
        //   name: "Commercial Painting",
        //   path: "/services/commercial-painting",
        // },
        // {
        //   name: "Industrial Painting & Blasting",
        //   path: "/services/industrial-painting-blasting",
        // },
        // {
        //   name: "Color Consultation & Custom Painting",
        //   path: "/services/color-consultation-custom-painting",
        // },
        // {
        //   name: "Exterior Painting",
        //   path: "/services/exterior-painting",
        // },
        // {
        //   name: "Interior Painting",
        //   path: "/services/interior-painting",
        // },
        // {
        //   name: "New Construction Painting",
        //   path: "/services/new-construction-painting",
        // },
        // {
        //   name: "Popcorn Ceiling Removal",
        //   path: "/services/popcorn-ceiling-removal",
        // },
        // {
        //   name: "Wallpaper Removal",
        //   path: "/services/wallpaper-removal",
        // },
        // { name: "Drywall Repair", path: "/services/drywall-repair" },
        // { name: "Deck Coating", path: "/services/deck-coating" },
        // {
        //   name: "Industrial Coating",
        //   path: "/services/industrial-coating",
        // },
        // { name: "Epoxy Floors", path: "/services/epoxy-floors" },
        // {
        //   name: "Pressure Washing",
        //   path: "/services/pressure-washing",
        // },
        // {
        //   name: "COVID-19 Sanitation",
        //   path: "/services/covid19-sanitation",
        // },
        // {
        //   name: "Residential Painting",
        //   path: "/services/residential-painting",
        // },
      ].map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`block px-4 py-2 ${
              pathname === item.path
                ? "bg-white !text-[var(--neutral)] active"
                : ""
            }`}
            onClick={onClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
