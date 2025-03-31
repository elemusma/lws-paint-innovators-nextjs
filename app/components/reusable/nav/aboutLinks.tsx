import Link from "next/link";
import { usePathname } from "next/navigation";

interface IndustriesLinksProps {
  onClick?: () => void;
}

export default function AboutLinks({ onClick }: IndustriesLinksProps) {
  const pathname = usePathname(); // Get the current route
  return (
    <>
      {[
        {
          name: "Our Story",
          path: "/about",
        },
        {
          name: "Our Team",
          path: "/about/team",
        },
        {
          name: "Brand Resources",
          path: "/about/brandresources",
        },
        {
          name: "Website Feedback",
          path: "/about/website-feedback",
        },
        {
          name: "Service Feedback",
          path: "/about/service-feedback",
        },
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
