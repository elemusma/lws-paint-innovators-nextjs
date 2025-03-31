import Link from "next/link";
import { usePathname } from "next/navigation";

interface IndustriesLinksProps {
  onClick?: () => void;
}

export default function IndustriesLinks({ onClick }: IndustriesLinksProps) {
  const pathname = usePathname(); // Get the current route

  return (
    <>
      {[
        {
          name: "Commercial",
          path: "/industries/commercial",
        },
        {
          name: "Industrial",
          path: "/industries/industrial",
        },
        {
          name: "Residential",
          path: "/industries/residential",
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
