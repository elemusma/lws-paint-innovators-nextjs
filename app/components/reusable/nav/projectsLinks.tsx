import Link from "next/link";
import { usePathname } from "next/navigation";

interface IndustriesLinksProps {
  onClick?: () => void;
}
export default function ProjectsLinks({ onClick }: IndustriesLinksProps) {
  const pathname = usePathname(); // Get the current route
  return (
    <>
      {[
        {
          name: "Commercial Painting Projects",
          path: "/projects/commercial-painting",
        },
        {
          name: "Industrial Projects",
          path: "/projects/industrial",
        },
        {
          name: "Interior & Exterior Painting Projects",
          path: "/projects/interior-exterior-painting",
        },
        {
          name: "Other Contractor Services",
          path: "/projects/other-contractor-services",
        },
        {
          name: "Residential Painting Projects",
          path: "/projects/residential-painting",
        },
      ].map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`block px-4 py-2 ${
              pathname.startsWith(item.path)
                ? "bg-white !text-[var(--neutral)]"
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
