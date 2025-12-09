import Link from "next/link";
import { usePathname } from "next/navigation";

interface IndustriesLinksProps {
  onClick?: () => void;
}
export default function LocationsLinks({ onClick }: IndustriesLinksProps) {
  const pathname = usePathname(); // Get the current route
  return (
    <>
      {[
        {
          name: "Arkansas",
          path: "/locations/arkansas",
        },
        {
          name: "Oklahoma",
          path: "/locations/oklahoma",
        },
        {
          name: "Colorado",
          path: "/locations/colorado",
        },
        {
          name: "Kansas City",
          path: "/locations/kansas-city",
        }
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
